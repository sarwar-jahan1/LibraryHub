import Link from "next/link";

export default async function BookDetails({ params }) {
  const { id } = await params;

  const res = await fetch("https://library-hub-three.vercel.app/books.json", {
    cache: "no-store",
  });

  const books = await res.json();
  const book = books.find((b) => String(b.id) === String(id));

  // ❌ Not Found
  if (!book) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-xl font-bold">Book not found</h2>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen py-10 bg-gray-100">
      {/* 🔥 CARD */}
      <div className="bg-white rounded-lg shadow-md w-[320px] overflow-hidden">
        {/* 🔷 Image */}
        <img
          src={book.image_url}
          alt={book.title}
          className="w-full h-56 object-cover"
        />

        {/* 🔷 Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1">{book.title}</h3>

          <p className="text-sm text-gray-500 mb-2">{book.author}</p>

          <p className="text-green-600 text-sm mb-3">
            Available: {book.available_quantity}
          </p>

          <p className="text-gray-700 text-sm mb-4">{book.description}</p>

          {/* 🔥 Buttons */}
          <div className="flex gap-2">
            <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
              Borrow
            </button>

            <Link
              href="/books"
              className="px-3 py-1 border rounded hover:bg-gray-100 transition"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
