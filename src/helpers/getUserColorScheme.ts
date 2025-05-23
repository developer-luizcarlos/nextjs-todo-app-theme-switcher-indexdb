import { Theme } from "@/types/theme.types";

export const getUserColorScheme = (): Theme => {
  const isMatchColorScheme = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;

  return isMatchColorScheme ? "light" : "dark";
};
