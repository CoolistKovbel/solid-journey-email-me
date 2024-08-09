"use client";
import React from "react";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";


export function HomePage() {
  return (
    <div className="min-h-screen rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
      <h2 className="relative flex-col md:flex-row z-10 text-[12rem]  md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-green-800 via-white to-red flex items-center gap-2 md:gap-8">
        Join my Com
      </h2>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
