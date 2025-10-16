import { ForestAnimation } from "@/animation/forestAnimation";
import { Card } from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";
import { Bills } from "../../data/Bills";
import { Treasures } from "../../data/Treasures";
export default function EventDetails() {
  const { token } = useParams();
  return (
    <div className="min-h-screen relative overflow-hidden pb-35 md:pb-0">
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

      <div className="relative z-10 min-h-screen p-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-violet-200/40 to-lavender-200/40 backdrop-blur-sm animate-float shadow-lg border-2 border-violet-300/50">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 rounded-full blur-lg opacity-30 animate-pulse" />
              <div className="absolute -inset-2 bg-gradient-to-r  from-violet-400 via-purple-400 to-fuchsia-400 rounded-full opacity-50 animate-pulse " />
              <div className="relative     max-h-80 w-full overflow-hidden image-container perspective-100">
                <img src="/images/tangled_flower.png" alt="" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-4 text-balance bg-gradient-to-r from-violet-700 via-purple-600 to-lavender-600 bg-clip-text text-transparent animate-fade-in-up drop-shadow-lg">
              Clarissa's Debut
            </h1>
            <div className="w-96 h-0.5 bg-gradient-to-r from-transparent via-violet-400/70 to-transparent mx-auto mt-6" />
          </div>

          <Card className="p-8 md:p-12 mb-8 backdrop-blur-sm bg-gradient-to-br from-violet-100/35 via-lavender-50/30 to-purple-100/35 border-2 border-violet-200/50 shadow-2xl shadow-violet-300/30 animate-fade-in-up delay-200">
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
                        Manet Inland Resort
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
                      6:00 PM
                    </p>
                    <p className="font-medium text-violet-900 drop-shadow">
                      Cocktail Reception
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-violet-700/90 drop-shadow">
                      7:00 PM
                    </p>
                    <p className="font-medium text-violet-900 drop-shadow">
                      Grand Entrance
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-violet-700/90 drop-shadow">
                      8:00 PM
                    </p>
                    <p className="font-medium text-violet-900 drop-shadow">
                      Dinner & Dancing
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="text-center pt-4">
                <p className="text-sm text-violet-800/90 mb-4 drop-shadow">
                  Please confirm your attendance by March 1, 2025
                </p>
                <Button className="bg-gradient-to-r from-violet-400/80 via-lavender-400/75 to-purple-400/80 hover:from-violet-500/90 hover:via-lavender-500/85 hover:to-purple-500/90 backdrop-blur-sm text-white px-8 transition-all duration-300 hover:scale-105 shadow-xl border-2 border-violet-300/50">
                  RSVP Now
                </Button>
              </div> */}
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 backdrop-blur-sm bg-gradient-to-br from-violet-100/30 via-lavender-50/25 to-purple-100/30 border-2 border-violet-200/40 animate-fade-in-up delay-300 hover:border-violet-300/60 transition-all duration-300 shadow-lg">
              <h3 className="text-lg font-medium  text-violet-700 drop-shadow">
                Treasures 💎
              </h3>
              <p className="text-sm text-violet-800/95 leading-relaxed drop-shadow text-justify">
                The 18 Treasures represent precious gifts of love, wisdom, and
                guidance, each one a heartfelt token from family and friends who
                have shaped the debutante’s life and continue to light her path
                ahead. 💖
              </p>
              <ul className="grid grid-cols-2  gap-x-4 gap-y-1">
                {Treasures.map((treasure) => (
                  <li
                    key={treasure.id}
                    className="text-violet-800/95 text-[12px] md:text-sm"
                  >
                    {treasure.id}. {treasure.name}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-violet-800/90 drop-shadow text-center md:text-sm text-[12px]">
                <Link
                  to={`/authorized/${token}/gift-ideas`}
                  className="  hover:text-violet-600 transition underline underline-offset-4"
                >
                  Click here to view Gift Ideas
                </Link>
              </p>
            </Card>
            <Card className="p-6 backdrop-blur-sm bg-gradient-to-br from-violet-100/30 via-lavender-50/25 to-purple-100/30 border-2 border-violet-200/40 animate-fade-in-up delay-400 hover:border-violet-300/60 transition-all duration-300 shadow-lg">
              <h3 className="text-lg font-medium   text-violet-700 drop-shadow">
                Yellow Bills 💛
              </h3>
              <p className="text-sm text-violet-800/95 leading-relaxed drop-shadow text-justify">
                The 18 Bills symbolize the debutante’s journey toward
                independence and abundance, each bill a heartfelt wish for
                prosperity, success, and the beautiful future she’s destined to
                create. ✨
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                {Bills.map((bill) => (
                  <li
                    key={bill.id}
                    className="text-violet-800/95 text-[12px] md:text-sm"
                  >
                    {bill.id}. {bill.name}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
