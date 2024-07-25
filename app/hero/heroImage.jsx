"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const HeroImage = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = ["/heroImage1.png", "/heroImage2.png", "/heroImage3.png"];
  const buttons = ["индивидуальные заказы", "оборудование", "техника"];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="border bg-cover rounded-[32px] px-2 py-4 h-[405px] w-full lg:px-10 lg:py-8 lg:min-h-[842px] my-8 lg:my-0"
      style={{ backgroundImage: `url(${images[activeImage]})` }}
    >
      <div className="sm:flex space-x-2 w-full">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`
              text-[12px] px-2 py-1 sm:px-4 rounded-full sm:py-2  text-blue-700 my-1
              ${activeImage === index ? "bg-blue-100" : "bg-white"}
              hover:bg-gray-100 transition-colors duration-200
            `}
            onClick={() => setActiveImage(index)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroImage;
