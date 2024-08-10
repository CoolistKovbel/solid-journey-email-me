"use client";
import React from "react";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import { createDatabase } from "../lib/serverapi";
import Image from "next/image";

export function HomePage() {

  const handleCreateDB = async (e: any) => {
    e.preventDefault();
    console.log("handling submit");
    try {
      const form = new FormData(e.currentTarget);
      const data = form.get("dbName");

      await createDatabase(data as string);
    } catch (error) {
      return {
        status: `error ${error}`,
        payload: error,
      };
    }
  };

  return (
    <div className="min-h-screen rounded-md bg-[#111] flex flex-col items-center justify-center relative w-full">
      <div>
        
        <header className="p-10 text-center">
          <h2 className="text-6xl font-bold mb-2">Donate Today</h2>
          <p className="text-md capitalize text-gray-500">
            By just donating a .001 eth or 1 btc it will go a long way
          </p>
        </header>

        <div className=" w-full p-10 drop-shadow-lg bg-[#333] rounded">
         
          <div className="flex items-center justify-between gap-10 mb-4">
            {/* qr code */}
            <div className="w-[300px] h-[300px] relative">
              <Image src="/wal.png" alt="image of wallet" fill />
            </div>


            <div className="w-[300px] h-[300px] relative">
              <Image src="/ghost-v1.webp" alt="ghost image" fill />
            </div>

          </div>


          <ul>
              <li className="w-full flex flex-col mb-4">
                <span className="text-2xl font-bold">ETH Address:</span>
                <span className="text-gray-500">0x610aC7169092c2120f20B3b04d8452fa5a90c774</span>
              </li>
              <li className="w-full flex flex-col text-center">
                <span>WBTC in ETH accepted</span>
              </li>
          </ul>
        

        </div>
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}

{
  /* <header>
        <form
          onSubmit={handleCreateDB}
          className="relative flex-col md:flex-row z-10 text-[12rem]  md:leading-tight text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-green-800 via-white to-red flex items-center gap-2"
        >
          <div className="flex items-center justify-center gap-10 flex-col">
            <label className="flex flex-col gap-5">
              <input
                type="text"
                name="dbName"
                id="dbName"
                placeholder="enter db name"
                className="bg-[#222] p-4 rounded drop-shadow-lg text-white focus:bg-[#000]"
              />
            </label>
          </div>
        </form>
      </header>

      */
}
