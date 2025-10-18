import { ForestAnimation } from "@/animation/forestAnimation";
import { Card } from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";
import { Bills } from "../../data/Bills";
import { Treasures } from "../../data/Treasures";
import PhotoCollage from "./PhotoCollage";
import { useState, useEffect, useRef } from "react";

export default function EventDetails() {
  const { token } = useParams();
  const [showCollage, setShowCollage] = useState(true);
  const [isCollageVisible, setIsCollageVisible] = useState(false);
  const [isEventDetailsVisible, setIsEventDetailsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const timerRef = useRef<number | null>(null);
  const collageContainerRef = useRef<HTMLDivElement>(null);

  // Fade in photo collage on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCollageVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Fade in event details when switching from collage
  useEffect(() => {
    if (!showCollage) {
      window.scrollTo({ top: 0, behavior: "smooth" });

      const timer = setTimeout(() => {
        setIsEventDetailsVisible(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [showCollage]);

  // Handle scroll detection for bottom of page
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

      // Start new timer if at bottom
      if (atBottom) {
        timerRef.current = setTimeout(() => {
          setShowCollage(false);
        }, 2000); // 2 second delay
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

  if (showCollage) {
    return (
      <div
        ref={collageContainerRef}
        className={`relative transition-opacity duration-1000 ease-in-out ${
          isCollageVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <PhotoCollage />

        {/* Bottom scroll indicator */}
        {isAtBottom && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-violet-600/90 w-3xs text-white px-6 py-2 rounded-full text-sm backdrop-blur-sm animate-pulse text-center">
              Transitioning to event details...
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-opacity duration-1000 ease-in-out ${
        isEventDetailsVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/samplePhoto.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-violet-300/45 via-lavender-200/40 to-purple-300/45" />
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-200/25 via-transparent to-violet-200/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(233,213,255,0.12),transparent_50%)]" />
      </div>

      <ForestAnimation />

      <div className="absolute top-20 right-10 w-40 h-40 bg-violet-300/25 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-lavender-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-purple-200/20 rounded-full blur-2xl animate-pulse delay-500" />

      <div className="relative z-10 min-h-screen p-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div
            className={`text-center mb-12 transition-all duration-1000 ease-out delay-300 ${
              isEventDetailsVisible
                ? "animate-fade-in translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-violet-200/40 to-lavender-200/40 backdrop-blur-sm animate-float border-2 border-violet-300/60 shadow-[0_0_30px_rgba(139,92,246,0.4),0_0_60px_rgba(168,85,247,0.2)] ">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 rounded-full blur-lg opacity-30 animate-pulse" />
              <div className="absolute -inset-2 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 rounded-full opacity-50 animate-pulse" />
              <div className="relative max-h-80 w-full overflow-hidden image-container perspective-100">
                <img src="/images/tangled_flower.png" alt="" />
              </div>
            </div>
            <h1 className="euphoria-script-regular text-[60px] md:text-[140px] text-balance bg-gradient-to-r from-violet-700 via-purple-600 to-lavender-600 bg-clip-text text-transparent animate-fade-in-up drop-shadow-lg">
              Clarissa's Debut
            </h1>
            <div className="w-96 h-0.5 bg-gradient-to-r from-transparent via-violet-400/70 to-transparent mx-auto mt-6" />
          </div>

          <Card
            className={`p-6 md:p-12 mb-8 backdrop-blur-sm bg-gradient-to-br from-violet-100/35 via-lavender-50/30 to-purple-100/35  transition-all duration-1000 ease-out delay-500 border-2 border-violet-300/60 shadow-[0_0_30px_rgba(139,92,246,0.4),0_0_60px_rgba(168,85,247,0.2)]  ${
              isEventDetailsVisible
                ? "animate-fade-in-up translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="space-y-8">
              <div className="text-center space-y-6">
                <div>
                  <h2 className="text-sm uppercase tracking-widest text-violet-700/90 mb-2 drop-shadow">
                    Join us in celebrating
                  </h2>
                  <p className="text-xl md:text-2xl text-violet-900 leading-relaxed text-balance drop-shadow-md">
                    A milestone of grace, beauty, and new beginnings as Clarissa
                    steps into womanhood
                  </p>
                </div>

                <div className="py-6 border-y border-violet-300/40">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm uppercase tracking-widest text-violet-700/90 mb-2 drop-shadow">
                        Date & Time
                      </h3>
                      <p className="text-lg font-medium text-violet-900 drop-shadow">
                        Saturday, November 8, 2025
                      </p>
                      <p className="text-base text-violet-800/90 drop-shadow">
                        4:00 PM - 8:00 PM
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-widest text-violet-700/90 mb-2 drop-shadow">
                        Venue
                      </h3>
                      <p className="text-lg font-medium text-violet-900 drop-shadow">
                        E&M Resort
                      </p>
                      <p className="text-base text-violet-800/90 drop-shadow">
                        <Link
                          to={`/authorized/${token}/map`}
                          className="hover:text-violet-600 transition underline underline-offset-4"
                        >
                          View location
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-widest text-violet-700/90 mb-3 drop-shadow">
                    Dress Code
                  </h3>
                  <p className="text-lg text-violet-900 drop-shadow">
                    Formal Attire
                  </p>
                  <div className="flex items-center justify-center space-x-2 mt-2">
                    <span className="p-4 rounded-full bg-[#A978C9]" />
                    <span className="p-4 rounded-full bg-[#D393D3]" />
                    <span className="p-4 rounded-full bg-[#FCAEDD]" />
                    <span className="p-4 rounded-full bg-[#F3BED6]" />
                    <span className="p-4 rounded-full bg-[#FFFFFF]" />
                  </div>
                  <p className="text-sm text-violet-800/90 mt-1 drop-shadow">
                    Soft pastels and romantic hues encouraged
                  </p>
                </div>
              </div>

              <div className="bg-white/25 backdrop-blur-sm rounded-lg p-6 border-2 border-violet-300/35">
                <h3 className="text-lg font-medium text-center mb-4 text-violet-700 drop-shadow">
                  Program Flow
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-violet-700/90 drop-shadow">
                      4:00 PM - 5:00 PM
                    </p>
                    <p className="font-medium text-violet-900 drop-shadow">
                      Arrival of Friends & Visitors
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-violet-700/90 drop-shadow">
                      6:00 PM - 7:00 PM
                    </p>
                    <p className="font-medium text-violet-900 drop-shadow">
                      Program
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-violet-700/90 drop-shadow">
                      7:00 PM - 8:00 PM
                    </p>
                    <p className="font-medium text-violet-900 drop-shadow">
                      Dinner
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center text-base text-violet-800/90  underline underline-offset-4">
                <Link to={`/authorized/${token}/about-clarissa`}>
                  Get to know Clarissa
                </Link>
              </div>
            </div>
          </Card>

          <div
            className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 ease-out delay-700 ${
              isEventDetailsVisible
                ? "animate-fade-in-up translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <Card className="p-6 backdrop-blur-sm bg-gradient-to-br from-violet-100/30 via-lavender-50/25 to-purple-100/30 border-2 border-violet-300/60 shadow-[0_0_30px_rgba(139,92,246,0.4),0_0_60px_rgba(168,85,247,0.2)]   transition-all duration-300 ">
              <h3 className="text-lg font-medium text-violet-700 drop-shadow">
                Treasures 💎
              </h3>
              <p className="text-sm text-violet-800/95 leading-relaxed drop-shadow text-justify">
                The 18 Treasures represent precious gifts of love, wisdom, and
                guidance, each one a heartfelt token from family and friends who
                have shaped the debutante's life and continue to light her path
                ahead. 💖
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                <div>
                  {Treasures.slice(0, 9).map((treasure) => (
                    <li
                      key={treasure.id}
                      className="text-violet-800/95 text-[11px] md:text-sm"
                    >
                      {treasure.id}. {treasure.name}
                    </li>
                  ))}
                </div>
                <div>
                  {Treasures.slice(9, 18).map((treasure) => (
                    <li
                      key={treasure.id}
                      className="text-violet-800/95 text-[11px] md:text-sm"
                    >
                      {treasure.id}. {treasure.name}
                    </li>
                  ))}
                </div>
              </ul>
            </Card>
            <Card className="p-6 backdrop-blur-sm bg-gradient-to-br from-violet-100/30 via-lavender-50/25 to-purple-100/30 border-2 border-violet-300/60 shadow-[0_0_30px_rgba(139,92,246,0.4),0_0_60px_rgba(168,85,247,0.2)] transition-all duration-300  ">
              <h3 className="text-lg font-medium text-violet-700 drop-shadow">
                Yellow Bills 💛
              </h3>
              <p className="text-sm text-violet-800/95 leading-relaxed drop-shadow text-justify">
                The 18 Bills symbolize the debutante's journey toward
                independence and abundance, each bill a heartfelt wish for
                prosperity, success, and the beautiful future she's destined to
                create. ✨
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                <div>
                  {Bills.slice(0, 9).map((bill) => (
                    <li
                      key={bill.id}
                      className="text-violet-800/95 text-xs text-[11px] md:text-sm"
                    >
                      {bill.id}. {bill.name}
                    </li>
                  ))}
                </div>
                <div>
                  {Bills.slice(9, 18).map((bill) => (
                    <li
                      key={bill.id}
                      className="text-violet-800/95 text-xs text-[11px] md:text-sm"
                    >
                      {bill.id}. {bill.name}
                    </li>
                  ))}
                </div>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
