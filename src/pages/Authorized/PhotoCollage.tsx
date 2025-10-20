"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { themes } from "../../data/PhotoCollageData";

export default function PhotoCollage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [screenSize, setScreenSize] = useState<
    "xxs" | "xs" | "sm" | "md" | "lg" | "default"
  >("default");

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
      } else if (width > 361) {
        setScreenSize("xxs");
      } else {
        setScreenSize("default");
      }
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const getSpan = (
    spanConfig:
      | number
      | {
          default: number;
          md?: number;
          lg?: number;
          sm?: number;
          xs?: number;
          xxs?: number;
        }
  ) => {
    if (typeof spanConfig === "number") return spanConfig;

    if (screenSize === "lg" && spanConfig.lg) return spanConfig.lg;
    if (screenSize === "md" && spanConfig.md) return spanConfig.md;
    if (screenSize === "sm" && spanConfig.sm) return spanConfig.sm;
    if (screenSize === "xs" && spanConfig.xs) return spanConfig.xs;
    if (screenSize === "xxs" && spanConfig.xxs) return spanConfig.xxs;
    return spanConfig.default;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="min-h-[400vh] bg-black  pt-1 pb-1">
      <section className="relative min-h-[185dvh] max-h-[200dvh] xxs:min-h-[175dvh] xxs:max-h-[185dvh] xs:min-h-[135dvh] xs:max-h-[190dvh] sm:min-h-[150dvh] sm:max-h-[190dvh] md:min-h-[160dvh] md:max-h-[195dvh] lg:min-h-[180dvh] lg:max-h-[225dvh] xl:min-h-[185dvh] xl:max-h-[200dvh]  xxl:min-h-[220dvh] xxl:max-h-[240dvh] flex items-center justify-center  my-3 md:mb-15 md:mt-10  overflow-hidden">
        <div className="absolute inset-0 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[260px] py-4 md:py-10">
              {themes.nature.map((photo, index) => {
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
                    <img
                      src={photo.url || "/placeholder.svg"}
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
        </div>

        <div
          className="relative z-10 text-center px-4 animate-fade-in pointer-events-none"
          style={{ animationDelay: "1s" }}
        >
          <h1 className="euphoria-script-regular text-[90px] md:text-[120px] lg:text-[150px] font-bold text-white drop-shadow-2xl mb-4 text-balance">
            Nature's Beauty
          </h1>
        </div>
      </section>

      <section className="relative min-h-[185dvh] max-h-[190dvh] xxs:min-h-[165dvh] xxs:max-h-[170dvh] xs:min-h-[135dvh] xs:max-h-[190dvh] sm:min-h-[150dvh] sm:max-h-[190dvh] md:min-h-[160dvh] md:max-h-[195dvh] lg:min-h-[180dvh] lg:max-h-[225dvh] xl:min-h-[185dvh] xl:max-h-[200dvh]  xxl:min-h-[220dvh] xxl:max-h-[240dvh] flex items-center justify-center  my-3 md:mb-15 md:mt-10 overflow-hidden">
        <div className="absolute inset-0 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[260px]  py-4 md:py-10">
              {themes.urban.map((photo, index) => {
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
                      alt={`Urban ${photo.id}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t rounded-lg from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="relative z-10 text-center px-4 pointer-events-none">
          <h2 className="euphoria-script-regular text-[90px] md:text-[120px] lg:text-[150px] font-bold text-white drop-shadow-2xl text-balance">
            Urban Landscapes
          </h2>
        </div>
      </section>

      <section className="relative min-h-[185dvh] max-h-[190dvh] xxs:min-h-[165dvh] xxs:max-h-[170dvh] xs:min-h-[135dvh] xs:max-h-[190dvh] sm:min-h-[150dvh] sm:max-h-[190dvh] md:min-h-[160dvh] md:max-h-[195dvh] lg:min-h-[180dvh] lg:max-h-[225dvh] xl:min-h-[185dvh] xl:max-h-[200dvh]  xxl:min-h-[220dvh] xxl:max-h-[240dvh] flex items-center justify-center  my-3 md:mb-15 md:mt-10 overflow-hidden">
        <div className="absolute inset-0 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[260px] py-4 md:py-10">
              {themes.abstract.map((photo, index) => {
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
                      alt={`Abstract ${photo.id}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 rounded-lg"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t rounded-lg from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="relative z-10 text-center px-4 pointer-events-none">
          <h2 className="euphoria-script-regular text-[90px] md:text-[120px] lg:text-[150px] font-bold text-white drop-shadow-2xl text-balance">
            Abstract Art
          </h2>
        </div>
      </section>
    </div>
  );
}
