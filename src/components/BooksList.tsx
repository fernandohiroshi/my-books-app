import React from "react";
import BookCard from "./BookCard";

const BooksList = () => {
  return (
    <section className="mx-auto mt-32 mb-16 px-4 md:px-8 w-full max-w-[1024px] h-full">
      <div className="gap-8 grid">
        <BookCard />
      </div>
    </section>
  );
};

export default BooksList;
