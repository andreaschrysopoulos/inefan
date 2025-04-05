'use client'
// import { Link, Link } from "react-router-dom";
import Link from "next/link";
import { links } from "../assets/siteMap";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {

  const pathname = usePathname()

  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const burgerIconRef = useRef(null); // Initialize with null
  // const burgerIconDarkRef = useRef(null); // Initialize with null
  const burgerMenuRef = useRef(null); // Initialize with null

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!showBurgerMenu) return;

      if (
        burgerIconRef.current && // Check if element is available
        burgerMenuRef.current && // Check if element is available
        !burgerIconRef.current.contains(e.target) &&
        !burgerMenuRef.current.contains(e.target)
      ) {
        // burgerIconRef.current.classList.add("hidden")
        setShowBurgerMenu(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener("click", handleClickOutside);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showBurgerMenu]);

  return (
    <nav
      id="nav"
      className="bg-stone-50/80 backdrop-blur-xl saturate-180 dark:bg-stone-900/80 fixed z-10 top-0 left-0 flex flex-col items-center w-full border-b dark:border-b-stone-800 border-b-stone-200 px-5 translate-3d"
    >
      {/* Container */}
      <div className="flex max-w-5xl justify-between items-center w-full gap-5">
        {/* 1. Logo */}
        <Link href="/">
          {/* 1.1 Light Logo */}
          <img
            className="py-3 cursor-pointer team2:max-w-28 max-w-22 block dark:hidden opacity-80 hover:opacity-100 active:opacity-100"
            src="/inefanLogo-light-B.png"
            alt="inefan logo"
            title="Homepage"
          ></img>

          {/* 1.2 Dark Logo */}
          <img
            className="py-3 cursor-pointer team2:max-w-28 max-w-22 hidden dark:block"
            src="/inefanLogo-dark-W.png"
            alt="inefan logo"
            title="Homepage"
          ></img>
        </Link>

        {/* 2. Horizontal Navigation Bar  */}
        <div
          className={`hidden team2:flex w-fit justify-end items-center text-sm gap-5 ${showBurgerMenu && "hidden!"}`}
        >
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.to}
            >
              <span className={`font-stretch-103% flex text-black dark:text-white w-max text-end cursor-pointer py-1 ${pathname.includes(link.to) ? "opacity-100" : "opacity-50 hover:opacity-100 active:opacity-100"}`}>
                {link.pageName}
              </span>
            </Link>
          ))}

          {/* Button Membership */}
          <div className="bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 active:bg-blue-600 dark:hover:bg-blue-600 dark:active:bg-blue-600 rounded-full py-1 px-3 text-white font-medium cursor-pointer ease-in-out transition-all duration-200 hover:scale-[1.03] active:scale-[1.03] will-change-transform">
            Join now
          </div>
        </div>

        {/* 3. Bars Icon */}
        <div
          className={`team2:hidden flex justify-end items-center ${showBurgerMenu && "flex!"}`}
          onClick={() => setShowBurgerMenu((prevState) => !prevState)}
          ref={burgerIconRef}
        >
          <img
            src={showBurgerMenu ? "/close-burger-light.svg" : "/menu-light.svg"}
            className="cursor-pointer w-6 min-w-6 opacity-50 hover:opacity-90 active:opacity-90 block dark:hidden"
          ></img>
          <img
            src={showBurgerMenu ? "/close-burger-dark.svg" : "/menu-dark.svg"}
            className="cursor-pointer w-6 min-w-6 opacity-70 hover:opacity-100 active:opacity-100 hidden dark:block"
          ></img>
        </div>
      </div>

      {/* Mobile/Vertical Navigation Bar */}
      <div
        ref={burgerMenuRef}
        className={`transition-all ease-in-out duration-500 flex-col w-full max-w-5xl text-2xl ${showBurgerMenu
          ? "flex py-3 max-h-100 pointer-events-auto"
          : "max-h-0 py-0 pointer-events-none"
          }`}
      >
        {links.map((link) => (
          <Link
            key={link.key}
            href={link.to}
            onClick={() => setShowBurgerMenu(false)}
            className={`flex justify-end ${pathname.includes(link.to) ? "opacity-100" : "opacity-50 hover:opacity-100 active:opacity-100"}`}
          >
            <span
              className={`font-stretch-103% flex text-black dark:text-white w-max text-end cursor-pointer py-2 ${showBurgerMenu ? "transition-all ease-in-out duration-600 opacity-100" : "opacity-0 transition-all ease-in-out duration-300"}`}
            >
              {link.pageName}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
