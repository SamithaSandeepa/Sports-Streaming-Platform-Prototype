import Link from "next/link";
import { SPORTS_CATEGORIES } from "@/lib/data";

const SportsCategories = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {SPORTS_CATEGORIES.map((category) => (
        <Link
          key={category.id}
          href={`/category/${category.id}`}
          className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg p-4 flex flex-col items-center justify-center text-center"
        >
          <span className="text-3xl mb-2">{category.icon}</span>
          <span className="font-medium">{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default SportsCategories;
