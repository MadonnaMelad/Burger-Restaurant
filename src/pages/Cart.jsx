import React, { useContext } from "react";
import { AppContext } from "../context/GlobalContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(AppContext);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold text-red-600 mb-6 text-center">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid gap-6">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white shadow-md rounded-lg p-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">{item.price} </p>
                  <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                </div>
              </div>

              <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                Remove
              </button>
            </div>
          ))}
          <div>
            <button  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                Check Out
              </button>
          </div>
        </div>

      )}
    </div>
  );
};

export default Cart;
