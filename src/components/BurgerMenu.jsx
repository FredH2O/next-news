"use client";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import Link from "next/link";

const paths = [
  { name: "Home", path: "/" },
  { name: "Global", path: "/global-news" },
  { name: "Sports", path: "/sports-news" },
  { name: "Political", path: "/political-news" },
];

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex place-content-end items-center mr-3">
      <nav className="hidden md:flex">
        <ul className="flex gap-4">
          {paths.map((path, index) => (
            <li key={index}>
              <Link
                href={path.path}
                className="py-2 px-4 bg-stone-700 hover:bg-stone-600 hover:text-white rounded"
              >
                {path.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className="md:hidden text-white p-2"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-zinc-600 bg-opacity-50 z-40"
            onClick={toggleMenu}
          ></div>

          <nav className="fixed top-0 right-0 w-64 h-full bg-zinc-900 shadow-lg z-50 transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center p-4 border-b border-zinc-700">
              <h2 className="text-white text-lg font-semibold">Menu</h2>
              <button onClick={toggleMenu} className="text-white">
                <X size={28} />
              </button>
            </div>
            <ul className="flex flex-col mt-4 space-y-4 p-4">
              {paths.map((path, index) => (
                <li key={index}>
                  <Link
                    href={path.path}
                    className="block py-2 px-4 text-white rounded hover:bg-zinc-700"
                    onClick={toggleMenu}
                  >
                    {path.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
};

export default BurgerMenu;
