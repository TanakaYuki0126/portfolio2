"use client";

import { useTheme } from "next-themes";
import { FC } from "react";
import { CiDark, CiLight } from "react-icons/ci";

export const ThemeToggle: FC = (props) => {
  const { setTheme, theme } = useTheme();
  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const Icon = theme === "dark" ? CiLight : CiDark;
  return (
    <button onClick={handleClick} className="cursor-pointer">
      <Icon
        className="text-gray-500 hover:text-gray-700 dark:text-gray-300  dark:hover:text-gray-200 transition duration-300"
        size="1.4em"
      />
    </button>
  );
};
