import Link from "next/link";
import BookCard from "@/components/book/BookCard";

export default async function Home() {
  // 🔥 Fetch data from API
  const res = await fetch("https://library-hub-three.vercel.app/books.json", {
    cache: "no-store",
  });

  const books = await res.json();

  // 🔥 Top 4 books
  const featuredBooks = books.slice(0, 4);

  return (
    <div>
      {/* 🔷 Hero Section */}
      <section className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Find Your Next Read
            </h1>

            <p className="text-gray-600 mb-6">
              Explore thousands of books and borrow your favorite ones anytime,
              anywhere.
            </p>

            <Link
              href="/books"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Browse Now
            </Link>
          </div>

          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
              alt="books"
              className="w-full rounded-lg shadow"
            />
          </div>
        </div>
      </section>

      {/* 🔷 Marquee */}
      <div className="bg-blue-600 text-white py-2 marquee-container">
        <p className="marquee-text text-sm font-medium">
          <span className="mr-8">📚 New Arrivals:</span>
          <span className="mr-8">Atomic Habits</span>
          <span className="mr-8">Clean Code</span>
          <span className="mr-8">The Alchemist</span>
          <span className="mr-8">Deep Work</span>
          <span className="mr-8">Sapiens</span>
          <span className="mr-8">Special Discount </span>
        </p>
      </div>

      {/* 🔥 Featured Books */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Featured Books
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}
