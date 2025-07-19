import React from "react";
import { useParams } from "react-router-dom";
import items from "../data/items";

const Menu = () => {
  const { slug } = useParams();

  const filteredItems = slug
    ? items.filter(item => item.categorySlug === slug)
    : items;

  function addToCart(itemId) {
    const selectedItem = items.find(item => item.id === itemId);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find(item => item.id === itemId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...selectedItem, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${selectedItem.name} added to cart`);
  }

  function addToWishlist(itemId) {
    const selectedItem = items.find(item => item.id === itemId);
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const existingItem = wishlist.find(item => item.id === itemId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      wishlist.push({ ...selectedItem, quantity: 1 });
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert(`${selectedItem.name} added to wishlist`);
  }

  return (
    <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-4 flex flex-col gap-2">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.price} EGP</p>
            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={() => addToCart(item.id)}
                className="bg-red-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-red-600 transition"
              >
                Add to Cart
              </button>

              <button
                onClick={() => addToWishlist(item.id)}
                className="text-red-600 hover:text-red-700 transition"
                aria-label="Add to Wishlist"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-7 h-7"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                    2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
                    4.5 2.09C13.09 3.81 14.76 3 
                    16.5 3 19.58 3 22 5.42 22 8.5c0 
                    3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
