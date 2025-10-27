import { ForestAnimation } from "@/animation/forestAnimation";
import { Card } from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";
import { Bills } from "../../data/Bills";
import { Cupcakes } from "../../data/Cupcakes";
import { Candles } from "../../data/Candles";
import { Treasures } from "../../data/Treasures";
import { ArrowRight } from "lucide-react";

export default function EventDetails() {
  const { token } = useParams();
  return (
    <div className="min-h-screen relative overflow-hidden transition-opacity duration-1000 ease-in-out ">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/background-photo.jpg')",
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
        <div className="max-w-4xl  mx-auto">
          <div className="text-center mb-12 transition-all duration-1000 ease-out delay-300 ">
            <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-violet-200/40 to-lavender-200/40 backdrop-blur-sm animate-float border-2 border-violet-300/60 shadow-[0_0_30px_rgba(139,92,246,0.4),0_0_60px_rgba(168,85,247,0.2)] ">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 rounded-full blur-lg opacity-30 animate-pulse" />
              <div className="absolute -inset-2 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 rounded-full opacity-50 animate-pulse" />
              <div className="relative max-h-80 w-full overflow-hidden image-container perspective-100">
                <img src="/images/tangled_flower.png" alt="" />
              </div>
            </div>
            <h1 className="euphoria-script-regular text-[50px] md:text-[90px] font-semibold  text-balance bg-gradient-to-r from-violet-700 via-purple-600 to-lavender-600 bg-clip-text text-transparent animate-fade-in-up drop-shadow-lg">
              This serves as your invitation!
            </h1>
            <div className="w-96 h-0.5 bg-gradient-to-r from-transparent via-violet-400/70 to-transparent mx-auto mt-6" />
          </div>

          <Card
            className="p-6 mb-5 md:p-12   backdrop-blur-sm bg-gradient-to-br from-violet-100/35 via-lavender-50/30 to-purple-100/35  transition-all duration-1000 ease-out delay-500 border-2 border-violet-300/60 shadow-[0_0_30px_rgba(139,92,246,0.4),0_0_60px_rgba(168,85,247,0.2)]  ${
            "
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

              <p className="text-sm text-violet-800/90 mt-1 drop-shadow text-center">
                STRICTLY NO BRINGING OF PLUS ONE
              </p>
            </div>
          </Card>

          <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-2 md:overflow-x-visible transition-all duration-1000 ease-out delay-700 ">
            <Card className="min-w-[87vw] md:min-w-0 p-6 backdrop-blur-sm bg-gradient-to-br from-violet-100/30 via-lavender-50/25 to-purple-100/30 border-2 border-violet-300/60 shadow-[0_0_5px_rgba(139,92,246,0.4),0_0_60px_rgba(168,85,247,0.2)] transition-all duration-300 ">
              <h3 className="font-semibold euphoria-script-regular  text-[30px] md:text-[50px] text-center  text-violet-700 drop-shadow">
                Treasures
              </h3>
              <p className="text-sm text-violet-800/95 leading-relaxed drop-shadow text-justify">
                The 18 Treasures represent precious gifts of love, wisdom, and
                guidance, each one a heartfelt token from family and friends who
                have shaped the debutante's life and continue to light her path
                ahead.
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
            <Card className="min-w-[87vw] md:min-w-0 p-6 backdrop-blur-sm bg-gradient-to-br from-violet-100/30 via-lavender-50/25 to-purple-100/30  transition-all duration-300  border-2 border-violet-300/60 shadow-[0_0_5px_rgba(139,92,246,0.4),0_0_60px_rgba(168,85,247,0.2)]">
              <h3 className="font-semibold euphoria-script-regular text-center text-[30px] md:text-[50px]  text-violet-700 drop-shadow">
                Yellow Bills
              </h3>
              <p className="text-sm text-violet-800/95 leading-relaxed drop-shadow text-justify">
                The 18 Bills symbolize the debutante's journey toward
                independence and abundance, each bill a heartfelt wish for
                prosperity, success, and the beautiful future she's destined to
                create.
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
            <Card className="min-w-[87vw] md:min-w-0 p-6 backdrop-blur-sm bg-gradient-to-br from-violet-100/30 via-lavender-50/25 to-purple-100/30  transition-all duration-300  border-2 border-violet-300/60 shadow-[0_0_5px_rgba(139,92,246,0.4),0_0_60px_rgba(168,85,247,0.2)]">
              <h3 className="font-semibold euphoria-script-regular text-center text-[30px] md:text-[50px]  text-violet-700 drop-shadow">
                Cupcakes
              </h3>
              <p className="text-sm text-violet-800/95 leading-relaxed drop-shadow text-justify">
                The 18 Cupcakes represent the sweet moments in the debutante’s
                life, each cupcake a symbol of joy, celebration, and the
                delightful memories shared with loved ones as she steps into
                womanhood with grace and happiness.
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                <div>
                  {Cupcakes.slice(0, 9).map((bill) => (
                    <li
                      key={bill.id}
                      className="text-violet-800/95 text-xs text-[11px] md:text-sm"
                    >
                      {bill.id}. {bill.name}
                    </li>
                  ))}
                </div>
                <div>
                  {Cupcakes.slice(9, 18).map((bill) => (
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
            <Card className="min-w-[87vw] md:min-w-0 p-6 backdrop-blur-sm bg-gradient-to-br from-violet-100/30 via-lavender-50/25 to-purple-100/30  transition-all duration-300  border-2 border-violet-300/60 shadow-[0_0_5px_rgba(139,92,246,0.4),0_0_60px_rgba(168,85,247,0.2)]">
              <h3 className="font-semibold euphoria-script-regular text-center text-[30px] md:text-[50px]  text-violet-700 drop-shadow">
                Candles
              </h3>
              <p className="text-sm text-violet-800/95 leading-relaxed drop-shadow text-justify">
                The 18 Candles symbolize the guiding lights in the debutante’s
                life, each flame representing love, hope, and the heartfelt
                wishes of family and friends who have illuminated her journey
                toward maturity and a bright future.
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                <div>
                  {Candles.slice(0, 9).map((bill) => (
                    <li
                      key={bill.id}
                      className="text-violet-800/95 text-xs text-[11px] md:text-sm"
                    >
                      {bill.id}. {bill.name}
                    </li>
                  ))}
                </div>
                <div>
                  {Candles.slice(9, 18).map((bill) => (
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
          <div className="flex items-center justify-center mt-5 ">
            <p className="text-sm md:hidden align-middle text-violet-800/90 drop-shadow flex items-center justify-center">
              Scroll right
            </p>
            <ArrowRight className=" h-4 w-4 md:hidden text-violet-800/90" />
          </div>
        </div>
      </div>
    </div>
  );
}
