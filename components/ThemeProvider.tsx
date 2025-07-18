"use client";

import { ThemeProvider as NextTHemesProvider } from "next-themes";

import type { ThemeProviderProps } from "next-themes";
import { FC } from "react";

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  return (
    <NextTHemesProvider attribute={"class"} {...props}>
      {props.children}
    </NextTHemesProvider>
  );
};
