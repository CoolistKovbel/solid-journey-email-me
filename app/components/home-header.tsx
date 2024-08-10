"use client";

import { ContactEmail } from "../lib/serverapi";

const HomeHeader = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("handling submit");
    const form = new FormData(e.currentTarget());
    try {
      await ContactEmail(undefined, form);
    } catch (error) {
      return {
        status: "error",
        payload: error,
      };
    }
  };

  return (
    <header className="w-full flex items-center p-2 justify-between">

      {/* <form
        onSubmit={handleSubmit}
        className="relative flex-col md:flex-row z-10 text-[6rem] text-center tracking-tight font-[12px] bg-clip-text text-transparent bg-gradient-to-b from-green-800 via-white to-red flex items-center gap-2"
      >

        <div className="flex items-center justify-center gap-10 flex-col">
          <label className="flex flex-col gap-5">
            <span>Enter Email List:</span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter email"
              className="bg-[#222] p-4 rounded drop-shadow-lg focus:bg-[#000]"
            />
          </label>

          <button className="hover:bg-[#444] p-4 text-[10rem] hover:text-[#999] rounded hover:drop-shadow-lg">
            Send Email
          </button>
        </div>
      </form> */}

      <div className="w-[100px] h-[100px] relative">
        {/* <Image src="/moon.png" alt="user profile pic" fill /> */}
      </div>
    </header>
  );
};

export default HomeHeader;
