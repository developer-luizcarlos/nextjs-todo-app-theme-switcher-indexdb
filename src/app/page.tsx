"use client";

import { ThemeContext } from "@/context/ThemeContext/ThemeProvider";
import { useContext } from "react";

const Home: React.FC = () => {
  const { theme } = useContext(ThemeContext)!;

  return (
    <>
      <header
        className={`h-96 ${
          theme === "light"
            ? "bg-[url('/images/bg-mobile-light.jpg')] md:bg-[url('/images/bg-desktop-light.jpg')]"
            : "bg-[url('/images/bg-mobile-dark.jpg')] md:bg-[url('/images/bg-desktop-dark.jpg')]"
        } bg-center bg-cover flex items-center justify-center`}
      ></header>
    </>
  );
};

export default Home;
