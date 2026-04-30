"use client";

import { useEffect, useState } from "react";
import BookCard from "@/components/book/BookCard";

export default function AllBooks() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // fetch data
  useEffect(() => {
    fetch("https://library-hub-three.vercel.app/books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  // filter
  const filteredBooks = books.filter((book) => {
    const matchSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || book.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <section className="max-w-6xl mx-auto px-4">

        {/* 🔷 Title */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            All Books
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Browse and find your favorite books
          </p>
        </div>

        {/* 🔍 Search */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-md">

            

            <input
              type="text"
              placeholder="Search books..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-4 w-full pl-9 pr-9 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
              >
                ✕
              </button>
            )}

          </div>
        </div>

        {/* 🏷️ Category Filter (stable version) */}
        <div className="flex justify-center gap-4 flex-wrap mb-10">

          <button
            onClick={() => setCategory("All")}
            className={`px-4 py-2 rounded-full ${
              category === "All"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setCategory("Story")}
            className={`px-4 py-2 rounded-full ${
              category === "Story"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Story
          </button>

          <button
            onClick={() => setCategory("Tech")}
            className={`px-4 py-2 rounded-full ${
              category === "Tech"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Tech
          </button>

          <button
            onClick={() => setCategory("Science")}
            className={`px-4 py-2 rounded-full ${
              category === "Science"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Science
          </button>

        </div>

        {/* 📚 Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No books found
            </p>
          )}
        </div>

      </section>
    </div>
  );
}