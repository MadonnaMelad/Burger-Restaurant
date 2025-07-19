import React from "react";
import heroImage from '../assets/pic4.jpg';
import aboutImage from '../assets/pic5.jpg';
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section id="home" className="min-h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 bg-white">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">Discover a world of flavor.</h1>
          <p className="text-2xl py-4 text-gray-700 mb-6">Where great taste meets comfort. Eat well, feel good.</p>
          <div className="py-10">
            <Link to="/menu" className="bg-red-600 text-white px-6 py-3 rounded-md w-fit hover:bg-red-700 transition">
              See Menu
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-[200px] md:h-auto relative">

          <img src={heroImage} alt="Burger" className="w-full h-full object-cover"/>
        </div>
      </section>

      <section id="about" className="min-h-screen flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2 h-[200px] md:h-[800px] relative">
          <img src={aboutImage} alt="عن المطعم" className="w-full h-full object-cover"/>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 bg-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Who Are We?</h2>
          <p className="text-xl py-4 text-gray-700 mb-6">We’re Burger King – your go-to place for flame-grilled perfection! Since 1954, we’ve been serving up bold flavors, iconic Whoppers, and a whole lot of attitude. We believe in real food, real fire, and real people. Whether you're here for a quick bite or your guilty pleasure, we’ve got your cravings covered. Welcome to our kingdom – where taste is king!</p>
          <div className="py-10">
            <Link to="/about" className="bg-red-600 text-white px-6 py-3 rounded-md w-fit hover:bg-red-700 transition">
              Know More 
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
