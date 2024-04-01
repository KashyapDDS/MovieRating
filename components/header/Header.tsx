"use client";
import Image from "next/image";
import logo from "../../public/IMDB_Logo.svg";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [first, setfirst] = useState(false);
  return (
    <div className="flex items-center justify-around p-2 sm:p-5">
      <Link href="/">
        <Image width={80} height={80} src={logo} alt="LOGO" />
      </Link>
      <div className="hidden sm:flex items-center gap-[10px] sm:gap-[30px]">
        <Link href={"/movies/popular"}>
          <span>Popular</span>
        </Link>

        <Link href={"/movies/upcoming"}>
          <span>Upcomings</span>
        </Link>

        <Link href={"/movies/top_rated"}>
          <span>Top Rated</span>
        </Link>
      </div>
      <div className="  gap-4 hidden lg:flex">
        <input type="text" className=" px-1 rounded-md" />
        <button className="bg-gray-500 p-1 rounded-lg">Search</button>
      </div>
      <div className="block sm:hidden" onClick={() => setfirst(!first)}>
        Menu
      </div>
      {first ? (
        <div className="absolute sm:hidden top-[8%] right-0 left-0 flex items-center justify-end gap-[10px] text-[20px]">
          <Link href={"/movies/popular"}>
            <span className="bg-gray-300 text-black rounded-lg p-1">
              Popular
            </span>
          </Link>

          <Link href={"/movies/upcoming"}>
            <span className="bg-gray-300 text-black rounded-lg p-1">
              Upcomings
            </span>
          </Link>

          <Link href={"/movies/top_rated"}>
            <span className="bg-gray-300 text-black rounded-lg p-1">
              Top Rated
            </span>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
