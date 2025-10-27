"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ForestAnimation } from "../../../src/animation/forestAnimation";
import { useNavigate } from "react-router-dom";
import { SparkleIntro } from "@/animation/SparkleIntro";
import { SparkleEffect } from "@/animation/SparkleEffect";

export default function HomePage() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    setTimeout(() => {
      const validCodes = ["CLARISSA", "CLANG"];
      const token = crypto.randomUUID();
      if (validCodes.includes(code.toUpperCase())) {
        navigate(`/authorized/${token}`);
      } else {
        navigate(`/unauthorized`);
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleIntroComplete = () => {
    setShowIntro(false);
    setTimeout(() => {
      setFadeIn(true);
    }, 100);
  };

  useEffect(() => {
    if (!showIntro && !fadeIn) {
      const timer = setTimeout(() => setFadeIn(true), 50);
      return () => clearTimeout(timer);
    }
  }, [showIntro, fadeIn]);

  if (showIntro) {
    return <SparkleIntro onComplete={handleIntroComplete} />;
  }

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-opacity duration-1000 ease-in-out ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/background-photo.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-violet-300/40 via-lavender-200/35 to-purple-300/40" />
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-200/20 via-transparent to-violet-200/25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(233,213,255,0.15),transparent_10%)]" />
      </div>

      <ForestAnimation />
      <SparkleEffect />

      <div className="relative z-10 flex items-center justify-center min-h-screen overflow-hidden p-4">
        <Card className="relative w-full md:max-w-md border-none p-8 md:p-12 backdrop-blur-sm bg-gradient-to-br from-violet-100/30 via-lavender-50/25 to-purple-100/30     animate-fade-in border-2 border-violet-300/60 shadow-[0_0_30px_rgba(139,92,246,0.4),0_0_60px_rgba(168,85,247,0.2)]">
          <div className="text-center md:mb-8 mb-2">
            <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-violet-200/40 to-lavender-200/40 backdrop-blur-sm animate-float shadow-lg border-2 border-violet-300/50">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 rounded-full blur-lg opacity-30 animate-pulse" />
              <div className="absolute -inset-2 bg-gradient-to-r  from-violet-400 via-purple-400 to-fuchsia-400 rounded-full opacity-50 animate-pulse " />
              <div className="relative max-h-80 w-full overflow-hidden image-container perspective-100">
                <img src="/images/tangled_flower.png" alt="" />
              </div>
            </div>

            <h1 className="euphoria-script-regular text-[60px] md:text-[70px]   mb-3 text-balance bg-gradient-to-r from-violet-700 via-purple-600 to-lavender-600 bg-clip-text text-transparent animate-fade-in-up drop-shadow-lg">
              You're Invited
            </h1>
            <p className="text-lg text-violet-800/90 mb-2 animate-fade-in-up delay-100 drop-shadow-md">
              A Celebration of Eighteen Years
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-violet-400/70 to-transparent mx-auto mt-4" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="code"
                className="text-sm font-medium text-violet-800/95 block text-center drop-shadow"
              >
                Enter Your Invitation Code
              </label>
              <Input
                id="code"
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder=""
                className="text-center text-lg tracking-wider uppercase h-12 bg-white/40 backdrop-blur-sm border-2 border-violet-300/60  transition-all duration-300 text-violet-900 placeholder:text-violet-400/70 shadow-lg focus:outline-none focus:border-violet-500/80 focus-visible:border-violet-500/80 focus:ring-2 focus:ring-violet-400/50 focus:ring-offset-0"
                required
              />
              {error && (
                <p className="text-sm text-rose-600 text-center drop-shadow">
                  {error}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 text-base font-medium bg-gradient-to-r from-violet-400/80 via-lavender-400/75 to-purple-400/80 hover:from-violet-500/90 hover:via-lavender-500/85 hover:to-purple-500/90 backdrop-blur-sm text-white transition-all duration-300 hover:scale-105 shadow-xl border-2 border-violet-300/50"
            >
              {isLoading ? "Verifying..." : "Enter"}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-xs text-violet-700/80 drop-shadow">
              Please enter the code for your invitation
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
