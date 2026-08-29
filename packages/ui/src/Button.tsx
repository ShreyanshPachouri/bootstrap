"use client"

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="w-35 sm:w-40 h-15 sm:h-15 px-5 py-2 text-lg sm:text-xl rounded-xl shadow dark:bg-purple-700 bg-pink-700 font-semibold dark:hover:text-purple-800 hover:text-pink-700 text-white dark:hover:border-purple-900 hover:border-2 hover:border-pink-700 hover:bg-pink-50 dark:hover:bg-purple-50 hover:cursor-pointer hover:shadow-lg shadow-pink-900 dark:shadow-purple-800/30"
      onClick={onClick} >
      {children}
    </button>
  );
};