"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { themes } from "../../data/PhotoCollageData";
import { useNavigate, useParams } from "react-router-dom";
import { LoaderCircle } from "lucide-react";

export default function PhotoCollage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams();
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [screenSize, setScreenSize] = useState<
    "xxs" | "xs" | "sm" | "md" | "lg" | "default"
  >("default");

  // New state variables for scroll behavior
  const [showCollage, setShowCollage] = useState(true);
  const [isCollageVisible, setIsCollageVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showKeepScrolling, setShowKeepScrolling] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setScreenSize("lg");
      } else if (width >= 768) {
        setScreenSize("md");
      } else if (width >= 640) {
        setScreenSize("sm");
      } else {
        setScreenSize("default");
      }
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  // Initial collage visibility
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCollageVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Transition to next page
  useEffect(() => {
    if (!showCollage) {
      window.scrollTo({ top: 0, behavior: "smooth" });

      const timer = setTimeout(() => {
        navigate(`/authorized/${token}/event-details`);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [showCollage, navigate, token]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);

      // Bottom detection
      const {
        scrollTop: docScrollTop,
        scrollHeight,
        clientHeight,
      } = document.documentElement;
      const scrollPercentage = (docScrollTop + clientHeight) / scrollHeight;
      const atBottom = scrollPercentage >= 0.95;

      setIsAtBottom(atBottom);

      // Clear existing timer
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }

      // Set new timer if at bottom
      if (atBottom) {
        timerRef.current = window.setTimeout(() => {
          setShowCollage(false);
        }, 3000); // 3 seconds
      }
    };

    if (showCollage) {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    }
  }, [showCollage]);

  // Scroll detection for "keep scrolling" message
  useEffect(() => {
    let scrollTimer: number | null = null;

    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }

      scrollTimer = window.setTimeout(() => {
        setIsScrolling(false);
      }, 2000); // 2 seconds
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
    };
  }, []);

  // Show/hide keep scrolling message
  useEffect(() => {
    setShowKeepScrolling(!isScrolling && !isAtBottom && showCollage);
  }, [isScrolling, isAtBottom, showCollage]);

  const getSpan = (
    spanConfig:
      | number
      | {
          default: number;
          md?: number;
          lg?: number;
          sm?: number;
        }
  ) => {
    if (typeof spanConfig === "number") return spanConfig;

    if (screenSize === "lg" && spanConfig.lg) return spanConfig.lg;
    if (screenSize === "md" && spanConfig.md) return spanConfig.md;
    if (screenSize === "sm" && spanConfig.sm) return spanConfig.sm;
    return spanConfig.default;
  };

  return (
    <div
      ref={containerRef}
      className={`min-h-full overflow-x-hidden bg-black pt-1 pb-1 transition-opacity duration-1000 ease-in-out ${
        isCollageVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="min-h-full p-5 space-y-10">
        <div className="-z-5 grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 gap-4 md:gap-5 w-full p-0 md:p-4 h-full auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[300px]">
          {themes.black.map((photo, index) => {
            const currentSpan = getSpan(photo.span);
            return (
              <div
                key={photo.id}
                className={cn(
                  "relative rounded-lg  group animate-fade-in border-violet-300/60 shadow-[0_0_10px_rgba(139,92,246,0.4),0_0_60px_rgba(168,85,247,0.2)] md:shadow-[0_0_20px_rgba(139,92,246,0.4),0_0_60px_rgba(168,85,247,0.2)]",
                  currentSpan === 2 ? "col-span-2" : "col-span-1"
                )}
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: "both",
                }}
              >
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg z-10">
             <LoaderCircle className="h-4 w-4 animate-spin" />
                  </div>
                )}
                <img
                  src={photo.url || "/placeholder.svg"}
                  alt={`Black theme ${photo.id}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-lg"
                  loading={index < 4 ? "eager" : "lazy"}
                  onLoad={() => setImageLoaded(true)}
                  style={imageLoaded ? {} : { visibility: "hidden" }}
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
        <div className="-z-5 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5 w-full p-0 md:p-4 h-full auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[300px]">
          {themes.red.map((photo, index) => {
            const currentSpan = getSpan(photo.span);
            const isVisible = scrollProgress > 0.2 + index * 0.02;
            const fromLeft = index % 2 === 0;

            return (
              <div
                key={photo.id}
                className={cn(
                  "relative rounded-lg   transition-all duration-1000 group border-violet-300/60 shadow-[0_0_10px_rgba(139,92,246,0.4),0_0_60px_rgba(168,85,247,0.2)] md:shadow-[0_0_20px_rgba(139,92,246,0.4),0_0_60px_rgba(168,85,247,0.2)]",
                  currentSpan === 2 ? "col-span-2" : "col-span-1",
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : fromLeft
                    ? "opacity-0 -translate-x-20"
                    : "opacity-0 translate-x-20"
                )}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <img
                  src={photo.url || "/placeholder.svg"}
                  alt={`Red theme ${photo.id}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t rounded-lg from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        <div className="-z-5 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5 w-full p-0 md:p-4 h-full auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[300px]">
          {themes.white.map((photo, index) => {
            const isVisible = scrollProgress > 0.5 + index * 0.02;
            const fromRight = index % 2 === 1;
            const currentSpan = getSpan(photo.span);
            return (
              <div
                key={photo.id}
                className={cn(
                  "relative rounded-lg  transition-all duration-1000 group border-violet-300/60 shadow-[0_0_10px_rgba(139,92,246,0.4),0_0_60px_rgba(168,85,247,0.2)] md:shadow-[0_0_20px_rgba(139,92,246,0.4),0_0_60px_rgba(168,85,247,0.2)]",
                  currentSpan === 2 ? "col-span-2" : "col-span-1",
                  isVisible
                    ? "opacity-100 translate-x-0 rotate-0"
                    : fromRight
                    ? "opacity-0 translate-x-20 rotate-6"
                    : "opacity-0 -translate-x-20 -rotate-6"
                )}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <img
                  src={photo.url || "/placeholder.svg"}
                  alt={`White theme ${photo.id}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 rounded-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t rounded-lg from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>

      {showKeepScrolling && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-violet-600/90 text-white px-6 py-2 rounded-full text-sm backdrop-blur-sm animate-pulse text-center">
            Keep scrolling to continue...
          </div>
        </div>
      )}

      {/* Transition message */}
      {isAtBottom && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-violet-600/90 text-white px-6 py-2 rounded-full text-sm backdrop-blur-sm animate-pulse text-center">
            Transitioning...
          </div>
        </div>
      )}
    </div>
  );
}
