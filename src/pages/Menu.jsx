import React from "react";
import { useNavigate } from "react-router-dom";
import categories from "../data/categories"; 

const Menu = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (slug) => {
    navigate(`/menu/category/${slug}`);
  };

  return (
    <div className="px-5 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.slug}
            className="rounded-xl shadow-md cursor-pointer overflow-hidden transition hover:scale-105"
            onClick={() => handleCategoryClick(cat.slug)}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-60 object-cover mx-auto rounded-lg"
            />
            <div className="text-center p-2 font-semibold text-lg">
              {cat.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
