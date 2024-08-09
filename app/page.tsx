import Image from "next/image";
import { HomePage } from "./components/home-page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <header className="w-full flex items-center p-2">
        <h2>Email Me</h2>
        <div className="w-[300px] h-[300px] relative">

        <Image src="/moon.png" alt="user profile pic" fill />
        </div>
      </header>

      <HomePage />
      
    </main>
  );
}
