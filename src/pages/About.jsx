import React from "react";

function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-6 md:px-20 py-16 text-center max-w-4xl mx-auto">
      <h1 className="text-5xl font-extrabold text-red-600 mb-8">
        About Us
      </h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        <span className="font-semibold text-gray-900">Burger King</span> is
        known for serving high-quality, great-tasting, and affordable food.
        Founded in <span className="font-medium text-red-600">1954</span>,
        Burger King is the second largest fast food hamburger chain in the
        world.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        The original <span className="italic text-red-600">Home of the Whopper</span>,
        our commitment to premium ingredients, signature recipes, and
        family-friendly dining experiences is what has defined our brand for
        over <span className="font-bold text-red-600">70 successful years</span>.
      </p>
    </div>
  );
}

export default About;
