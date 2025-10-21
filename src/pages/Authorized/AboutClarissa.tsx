import { ForestAnimation } from "@/animation/forestAnimation";
import { ChildhoodPhotos } from "@/data/ChildhoodPhotos";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AboutClarissa() {
  const navigate = useNavigate();
  const [screenSize, setScreenSize] = useState<
    "xs" | "sm" | "md" | "lg" | "default"
  >("default");

  const { token } = useParams();
  const [showCollage, setShowCollage] = useState(true);
  const [isCollageVisible, setIsCollageVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showKeepScrolling, setShowKeepScrolling] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const timerRef = useRef<number | null>(null);
  const collageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setScreenSize("lg");
      } else if (width >= 768) {
        setScreenSize("md");
      } else if (width >= 640) {
        setScreenSize("sm");
      } else if (width > 412) {
        setScreenSize("xs");
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

  // Transition to event details
  useEffect(() => {
    if (!showCollage) {
      window.scrollTo({ top: 0, behavior: "smooth" });

      const timer = setTimeout(() => {
        // Navigate to event details page
        navigate(`/authorized/${token}/event-details`);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [showCollage, navigate, token]);

  // Bottom detection and auto-transition
  useEffect(() => {
    const handleScroll = () => {
      if (!collageContainerRef.current) return;

      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;
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
        }, 3000); // 3 seconds as requested
      }
    };

    if (showCollage) {
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
      }, 2000); // 2 seconds as requested
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
      | { default: number; md?: number; lg?: number; sm?: number; xs?: number }
  ) => {
    if (typeof spanConfig === "number") return spanConfig;

    if (screenSize === "lg" && spanConfig.lg) return spanConfig.lg;
    if (screenSize === "md" && spanConfig.md) return spanConfig.md;
    if (screenSize === "sm" && spanConfig.sm) return spanConfig.sm;
    if (screenSize === "xs" && spanConfig.xs) return spanConfig.xs;
    return spanConfig.default;
  };

  const getColSpanClass = (span: number) => {
    const spanMap: Record<number, string> = {
      1: "col-span-1",
      2: "col-span-2",
      3: "col-span-3",
      4: "col-span-4",
      5: "col-span-5",
    };
    return spanMap[span] || "col-span-1";
  };

  const getRowSpanClass = (span: number) => {
    const spanMap: Record<number, string> = {
      1: "row-span-1",
      2: "row-span-2",
      3: "row-span-3",
      4: "row-span-4",
      5: "row-span-5",
      6: "row-span-6",
    };
    return spanMap[span] || "row-span-1";
  };

  if (showCollage) {
    return (
      <div
        ref={collageContainerRef}
        className={`relative transition-opacity duration-1000 ease-in-out ${
          isCollageVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative z-5 min-h-full bg-black overflow-hidden p-4 md:p-10">
          <ForestAnimation />

          <h1 className="text-center euphoria-script-regular font-bold text-[55px] md:text-[140px] bg-gradient-to-r from-violet-400 via-purple-300 to-lavender-300 bg-clip-text text-transparent animate-fade-in-up drop-shadow-lg">
            Childhood Memories
          </h1>
          <div className="  text-center gap-2 animate-fade-in-up mx-auto">
            <h1 className="parisienne-regular bg-gradient-to-r from-violet-400 via-purple-300 to-violet-500/30 bg-clip-text text-transparent text-center font-light text-xl md:text-5xl max-w-3xl mx-auto leading-relaxed px-2 md:px-0">
              "True nostalgia is an ephemeral composition of disjointed
              memories"
            </h1>
          </div>

          <div className="-z-5 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5 w-full p-0 md:p-4 h-full auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[300px]">
            {ChildhoodPhotos.map((photo, index) => {
              const currentColSpan = getSpan(photo.colSpan);
              const currentRowSpan = getSpan(photo.rowSpan || 1);
              return (
                <div
                  key={photo.id}
                  className={`relative rounded-lg group animate-fade-in border-violet-300/60 shadow-[0_0_10px_rgba(139,92,246,0.4),0_0_60px_rgba(168,85,247,0.2)] md:shadow-[0_0_15px_rgba(139,92,246,0.4),0_0_60px_rgba(168,85,247,0.2)] ${getColSpanClass(
                    currentColSpan
                  )} ${getRowSpanClass(currentRowSpan)}`}
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: "both",
                  }}
                >
                  <img
                    src={photo.src || "/placeholder.svg"}
                    alt={`Nature ${photo.id}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-lg"
                    loading={index < 4 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Keep scrolling message */}
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

  return null;
}
