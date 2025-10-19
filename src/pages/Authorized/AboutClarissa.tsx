import { ForestAnimation } from "@/animation/forestAnimation";
import { ChildhoodPhotos } from "@/data/ChildhoodPhotos";
import { useEffect, useState } from "react";

export default function AboutClarissa() {
  const [screenSize, setScreenSize] = useState<
    "xs" | "sm" | "md" | "lg" | "default"
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

  return (
    <div className="relative z-5 min-h-[400dvh] flex bg-black overflow-hidden  p-2  md:p-10  ">
      <ForestAnimation />
      <div className="-z-5 grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-5 w-full p-0 md:p-4 h-full auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[300px]">
        {ChildhoodPhotos.map((photo, index) => {
          const currentColSpan = getSpan(photo.colSpan);
          const currentRowSpan = getSpan(photo.rowSpan || 1);
          return (
            <div
              key={photo.id}
              className={`relative rounded-lg group animate-fade-in ${getColSpanClass(
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
  );
}
