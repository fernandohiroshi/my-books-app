"use client";

import { motion } from "framer-motion";
import { Variants } from "@/lib/utils";
import BooksList from "@/components/BooksList";
import Nav from "@/components/Nav";
import { ThemeToggle } from "./ThemeToggle";

export default function Home() {
  return (
    <>
      <motion.header
        initial="initial"
        animate="animate"
        variants={Variants}
        className="top-0 z-50 fixed flex justify-between items-center bg-zinc-100 dark:bg-zinc-950 shadow-lg px-4 lg:px-16 py-4 w-full dark:text-white"
      >
        <h1 className="font-semibold text-sm md:text-lg lg:text-xl uppercase tracking-widest">
          Hiroshi Books
        </h1>
        <Nav />
      </motion.header>
      <BooksList />
      <div className="right-4 bottom-4 fixed">
        <ThemeToggle />
      </div>
    </>
  );
}
