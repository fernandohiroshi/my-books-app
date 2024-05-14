"use client";

import { motion } from "framer-motion";
import { Variants } from "@/lib/utils";
import BooksList from "@/components/BooksList";
import { ThemeToggle } from "./ThemeToggle";

export default function Home() {
  return (
    <>
      <motion.header
        initial="initial"
        animate="animate"
        variants={Variants}
        className="top-0 z-50 fixed flex justify-between items-center bg-zinc-200/50 dark:bg-zinc-900/60 shadow-lg px-4 lg:px-16 py-4 w-full dark:text-white"
      >
        <a
          href="#"
          className="font-semibold text-sm md:text-lg lg:text-xl uppercase tracking-widest"
        >
          My Books
        </a>
        <a
          href="https://fernandohiroshi.vercel.app/"
          className="dark:bg-black/10 bg-white/40 text-black dark:text-white py-1 px-4 rounded-full shadow-md dark:shadow-white/20 shadow-black/20"
        >
          Contact
        </a>
      </motion.header>
      <BooksList />
      <div className="right-4 bottom-4 fixed">
        <ThemeToggle />
      </div>
    </>
  );
}
