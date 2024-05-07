"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Variants } from "@/lib/utils";
import { cards } from "@/lib/card-datas";

const BookCard: React.FC = () => {
  return (
    <>
      <motion.p
        initial="initial"
        animate="animate"
        variants={Variants}
        className="mb-8 text-justify"
      >
        • Here I show my web development and programming books, most of them in
        Portuguese, but there may also be versions in English.
      </motion.p>
      <motion.div
        initial="initial"
        animate="animate"
        variants={Variants}
        className="flex flex-col gap-8"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="relative grid grid-cols-1 md:grid-cols-[30%_70%] bg-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 dark:bg-zinc-950 p-8 rounded-3xl dark:text-white duration-300 ease-in-out"
          >
            <Image
              src={card.image}
              alt={card.title}
              className="shadow-2xl mx-auto mb-8 md:mb-0 rounded-2xl w-[200px] object-cover"
            />
            <div className="flex flex-col justify-around md:ml-8">
              <h3 className="mb-2 md:mb-4 font-bold text-lg">{card.title}</h3>
              <p className="opacity-90 text-justify text-xs lg:text-sm">
                {card.description}
              </p>
              <Link
                href={card.link}
                target="_blank"
                className="flex justify-end mt-4 text-sm hover:text-pink-600 underline duration-500 ease-in-out"
              >
                Get book
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default BookCard;
