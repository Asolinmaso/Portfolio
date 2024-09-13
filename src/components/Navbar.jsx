"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed w-full left-0 top-0 right-0 z-50 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 shadow-lg">
      <div className="flex justify-between items-center mx-auto px-6 py-4 max-w-screen-xl">
        <Link href="/" className="text-3xl md:text-5xl font-bold text-white">
          PORTFOLIO
        </Link>
        <div className="block md:hidden text-white">
          {!navbarOpen ? (
            <Bars3Icon className="h-8 w-8" onClick={() => setNavbarOpen(true)} />
          ) : (
            <XMarkIcon className="h-8 w-8" onClick={() => setNavbarOpen(false)} />
          )}
        </div>
        <div id="navbar" className="hidden md:block md:w-auto">
          <ul className="flex sm:flex-row md:space-x-12">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <NavLink href={navLink.href} title={navLink.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
