import React from "react";
import Image from "next/image";

const Brands = () => {
  const brandImages = Array.from({ length: 7 }, (_, i) => i + 1);

  return (
    <section className="p-4 sm:p-0 max-w-7xl mx-auto">
      <div className="flex flex-wrap items-center justify-start sm:justify-between gap-4 sm:gap-0">
        {brandImages.map((brand) => (
          <div
            key={brand}
            className="w-[calc(33.333%-1rem)] sm:w-auto flex items-center justify-center"
          >
            <Image
              src={`/brands/brands${brand}.png`}
              alt={`brand${brand}`}
              width={76}
              height={17}
              className="max-w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
