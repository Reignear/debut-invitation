"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const themes = {
  nature: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800",
      span: { default: 1, md: 2, lg: 1 },
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400",
      span: { default: 1, md: 1, lg: 2 },
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&h=900",
      span: { default: 2, md: 1, lg: 2 },
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=600",
      span: { default: 1, md: 2, lg: 1 },
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&h=750",
      span: { default: 1, md: 2, lg: 1 },
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&h=750",
      span: { default: 1, md: 1, lg: 2 },
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=450",
      span: { default: 1, md: 1, lg: 2 },
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=850",
      span: { default: 2, md: 2, lg: 1 },
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=600&h=550",
      span: { default: 1, md: 2, lg: 1 },
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=600&h=550",
      span: { default: 1, md: 1, lg: 2 },
    },
  ],
  urban: [
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=750",
      span: { default: 1, md: 2, lg: 1 },
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=500",
      span: { default: 1, md: 1, lg: 2 },
    },
    {
      id: 13,
      url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=900",
      span: { default: 2, md: 1, lg: 2 },
    },
    {
      id: 14,
      url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&h=450",
      span: { default: 1, md: 2, lg: 1 },
    },
    {
      id: 15,
      url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&h=800",
      span: { default: 1, md: 2, lg: 1 },
    },
    {
      id: 16,
      url: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=600&h=550",
      span: { default: 1, md: 1, lg: 2 },
    },
    {
      id: 17,
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=700",
      span: { default: 1, md: 1, lg: 2 },
    },
    {
      id: 18,
      url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=850",
      span: { default: 2, md: 2, lg: 1 },
    },
    {
      id: 19,
      url: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=600&h=600",
      span: { default: 1, md: 2, lg: 1 },
    },
    {
      id: 20,
      url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=650",
      span: { default: 1, md: 1, lg: 2 },
    },
  ],
  abstract: [
    {
      id: 21,
      url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=700",
      span: { default: 1, md: 2, lg: 1 },
    },
    {
      id: 22,
      url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&h=500",
      span: { default: 1, md: 1, lg: 2 },
    },
    {
      id: 23,
      url: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&h=850",
      span: { default: 2, md: 1, lg: 2 },
    },
    {
      id: 24,
      url: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=600&h=450",
      span: { default: 1, md: 2, lg: 1 },
    },
    {
      id: 25,
      url: "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=600&h=800",
      span: { default: 1, md: 2, lg: 1 },
    },
    {
      id: 26,
      url: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=600&h=600",
      span: { default: 1, md: 1, lg: 2 },
    },
    {
      id: 27,
      url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=900",
      span: { default: 1, md: 1, lg: 2 },
    },
    {
      id: 28,
      url: "https://images.unsplash.com/photo-1554034483-04fda0d3507b?w=600&h=550",
      span: { default: 2, md: 2, lg: 1 },
    },
    {
      id: 29,
      url: "https://images.unsplash.com/photo-1506792006437-256b665541e2?w=600&h=750",
      span: { default: 1, md: 2, lg: 1 },
    },
    {
      id: 30,
      url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=650",
      span: { default: 1, md: 1, lg: 2 },
    },
  ],
};

export default function PhotoCollage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [screenSize, setScreenSize] = useState<"sm" | "md" | "lg" | "default">(
    "default"
  );

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

  const getSpan = (
    spanConfig: number | { default: number; md?: number; lg?: number }
  ) => {
    if (typeof spanConfig === "number") return spanConfig;

    if (screenSize === "lg" && spanConfig.lg) return spanConfig.lg;
    if (screenSize === "md" && spanConfig.md) return spanConfig.md;
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
    <div ref={containerRef} className="min-h-[500vh] bg-black  pt-1 pb-1">
      <section className="relative min-h-[175vh] sm:min-h-[175vh] md:min-h-[180vh] lg:min-h-[215vh] flex items-center justify-center py-24 px-4 mb-8 md:px-8  md:mb-10 mt-4 md:mt-10 overflow-hidden">
        <div className="absolute inset-0 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[260px]">
              {themes.nature.map((photo, index) => {
                const currentSpan = getSpan(photo.span);
                return (
                  <div
                    key={photo.id}
                    className={cn(
                      "relative rounded-lg  group animate-fade-in",
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl mb-4 text-balance">
            Nature's Beauty
          </h1>
        </div>
      </section>

      <section className="relative min-h-[175vh] sm:min-h-[175vh] md:min-h-[180vh] lg:min-h-[215vh] flex items-center justify-center py-24 px-4 mb-8 md:px-8  md:mb-10 mt-4 md:mt-10 overflow-hidden">
        <div className="absolute inset-0 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[260px]">
              {themes.urban.map((photo, index) => {
                const currentSpan = getSpan(photo.span);
                const isVisible = scrollProgress > 0.2 + index * 0.02;
                const fromLeft = index % 2 === 0;

                return (
                  <div
                    key={photo.id}
                    className={cn(
                      "relative rounded-lg   transition-all duration-1000 group",
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
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl text-balance">
            Urban Landscapes
          </h2>
        </div>
      </section>

      <section className="relative min-h-[175vh] sm:min-h-[175vh] md:min-h-[180vh] lg:min-h-[215vh] flex items-center justify-center py-24 px-4 mb-8 md:px-8  md:mb-10 mt-4 md:mt-10 overflow-hidden">
        <div className="absolute inset-0 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[260px]">
              {themes.abstract.map((photo, index) => {
                const isVisible = scrollProgress > 0.5 + index * 0.02;
                const fromRight = index % 2 === 1;
                const currentSpan = getSpan(photo.span);
                return (
                  <div
                    key={photo.id}
                    className={cn(
                      "relative rounded-lg  transition-all duration-1000 group",
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
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl text-balance">
            Abstract Art
          </h2>
        </div>
      </section>
    </div>
  );
}
