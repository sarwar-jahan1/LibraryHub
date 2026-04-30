import Link from "next/link";


const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow transition duration-300 hover:-translate-y-2 hover:shadow-xl group">
      
      {/* 🔷 Image */}
      <div className="overflow-hidden">
        <img
          src={book.image_url}
          alt={book.title}
          className="w-full h-56 object-cover transition duration-300 group-hover:scale-110"
        />
      </div>

      {/* 🔷 Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-1">
          {book.title}
        </h3>

        <p className="text-sm text-gray-500 mb-2">
          {book.author}
        </p>

        <p className="text-sm text-green-600 mb-3">
          Available: {book.available_quantity}
        </p>

        <Link
          href={`/books/${book.id}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm transition hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;