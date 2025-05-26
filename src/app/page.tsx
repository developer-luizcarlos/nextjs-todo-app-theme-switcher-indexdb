"use client";

import { ThemeContext } from "@/context/ThemeContext/ThemeProvider";
import { startDatabase } from "@/database/database";
import Image from "next/image";
import { useContext } from "react";

const Home: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext)!;

  startDatabase();

  const toggleTheme = () =>
    setTheme((previousTheme) => (previousTheme === "light" ? "dark" : "light"));

  return (
    <>
      <header
        className={`h-96 ${
          theme === "light"
            ? "bg-[url('/images/bg-mobile-light.jpg')] md:bg-[url('/images/bg-desktop-light.jpg')]"
            : "bg-[url('/images/bg-mobile-dark.jpg')] md:bg-[url('/images/bg-desktop-dark.jpg')]"
        } bg-center bg-cover flex items-center justify-center`}
      ></header>
      <main
        className={`min-h-dvh ${
          theme === "light" ? "bg-very-light-grayish-blue" : "bg-very-dark-blue"
        }`}
      ></main>
      <article className="absolute top-36 left-1/2 -translate-1/2 w-1/2 max-w-[500px] min-w-[250px]">
        <header className="flex items-baseline justify-between">
          <h1 className="text-5xl uppercase font-extrabold text-very-light-gray">
            todo
          </h1>
          <Image
            src={`${
              theme === "light" ? "images/icon-moon.svg" : "images/icon-sun.svg"
            }`}
            alt="Change theme"
            height={30}
            width={30}
            className="cursor-pointer"
            role="button"
            onClick={toggleTheme}
          />
        </header>
      </article>
    </>
  );
};

export default Home;
