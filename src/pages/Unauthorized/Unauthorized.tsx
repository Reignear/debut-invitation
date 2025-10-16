import { ForestAnimation } from "@/animation/forestAnimation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import BackgroundImage from "/images/samplePhoto.webp";

export default function Unauthorized() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${BackgroundImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-violet-400/50 via-slate-300/45 to-purple-400/52" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_50%)]" />
      </div>

      <ForestAnimation />

      <div className="absolute top-10 left-10 w-32 h-32 bg-red-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-slate-400/25 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-md p-8 md:p-12 backdrop-blur-sm bg-gradient-to-br from-red-200/30 via-slate-100/25 to-red-200/30 border-2 border-red-300/40 shadow-2xl animate-fade-in">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-red-300/30 backdrop-blur-sm animate-shake shadow-lg border border-red-400/40">
              <svg
                className="w-10 h-10 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>

            <h1 className="text-3xl md:text-4xl font-serif mb-4 text-balance text-red-800 animate-fade-in-up drop-shadow-lg">
              Invalid Code
            </h1>
            <p className="text-base text-red-700/90 mb-6 leading-relaxed animate-fade-in-up delay-100 drop-shadow">
              The invitation code you entered is not valid.
            </p>

            <div className="space-y-3 animate-fade-in-up delay-200">
              <Link to="/" className="block">
                <Button className="w-full bg-violet-400/70 hover:bg-violet-500/80 backdrop-blur-sm text-white transition-all duration-300 hover:scale-105 shadow-lg border border-violet-300/40">
                  Try Again
                </Button>
              </Link>

              <p className="text-sm text-red-600/80 pt-4 drop-shadow">
                Need help? Contact the event organizer
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
