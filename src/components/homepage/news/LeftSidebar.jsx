import Link from "next/link";
import React from "react";

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <div className="w-full">
      <h2 className="font-bold text-xl text-gray-800 mb-6">All Categories</h2>
      <ul className="flex flex-col gap-2">
        {categories?.news_category?.map((category) => {
          const isActive = activeId === category.category_id;
          
          return (
            <li
              key={category.category_id}
              className={`
                rounded-lg transition-all duration-200 font-medium
                ${isActive 
                  ? "bg-purple-600 text-white shadow-md" 
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"}
              `}
            >
              <Link
                href={`/category/${category.category_id}`}
                className="block px-4 py-3"
              >
                {category.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;