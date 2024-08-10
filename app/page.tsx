import Image from "next/image";
import { HomePage } from "./components/home-page";
import HomeHeader from "./components/home-header";

export default function Home() {



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">

      <HomeHeader />

      <HomePage />

      
    </main>
  );
}
