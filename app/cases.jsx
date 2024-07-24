"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import CaseContent from "./case_content";
import { HiArrowLongRight } from "react-icons/hi2";

const Cases = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [openCase, setOpenCase] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleOpenCase = (index) => {
    setActiveImage(index);
    setIsAnimating(true);
    setTimeout(() => {
      setOpenCase(true);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCloseCase = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setOpenCase(false);
      setIsAnimating(false);
    }, 300);
  };

  const cases = [
    {
      mainImage: "/case11.jpeg",
      title: "Измельчитель / Шредер гусеничного типа U-WS250",
      description:
        "Надежный и эффективный измельчитель для переработки древесных отходов и других органических материалов. Идеально подходит для лесозаготовительной и деревообрабатывающей промышленности.",
      images: ["/case11.jpeg", "/case12.jpeg", "/case13.jpeg"],
      specs: {
        Производительность: "до 250 м³/час",
        "Срок эксплуатации": "50 дней",
      },
    },
    {
      mainImage: "/case21.jpeg",
      title: "Мобильная дробилка Lindemann CR® 225 LT",
      description:
        "Высокопроизводительная мобильная дробилка для эффективного измельчения металлолома и других твердых материалов. Отличается компактностью и маневренностью.",
      images: ["/case21.jpeg", "/case22.jpeg", "/case23.jpeg"],
      specs: {
        Производительность: "до 225 т/час",
        "Срок эксплуатации": "45 дней",
      },
    },
    {
      mainImage: "/case31.jpeg",
      title: "Сортировочная установка Terex Finlay 883+",
      description:
        "Многофункциональная сортировочная установка для обработки различных материалов. Идеальна для строительства, горнодобывающей промышленности и переработки отходов.",
      images: ["/case31.jpeg", "/case32.jpeg", "/case33.jpeg"],
      specs: {
        Производительность: "до 600 т/час",
        "Срок эксплуатации": "60 дней",
      },
    },
  ];

  return (
    <section
      id="cases"
      className="max-w-7xl mx-auto my-8 relative overflow-hidden"
    >
      <div
        className={`transition-opacity duration-300 ${
          isAnimating ? "opacity-0" : "opacity-100"
        }`}
      >
        {openCase ? (
          <CaseContent
            activeImage={activeImage}
            openCase={openCase}
            onClose={handleCloseCase}
          />
        ) : (
          <div className="overflow-x-auto">
            <div className="flex gap-4 pb-4 min-w-max">
              {cases.map((caseItem, index) => (
                <div
                  key={index}
                  onClick={() => setActiveImage(index)}
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(42, 78, 164, 0.5) 0%, rgba(42, 78, 164, 0) 50%), url(${caseItem.mainImage})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    height: 435,
                    width: isSmallScreen
                      ? 305
                      : index === activeImage
                      ? 630
                      : 305,
                    borderRadius: 32,
                    transition: "width 0.3s ease-in-out",
                  }}
                  className={`flex flex-col justify-between px-8 py-[34px] cursor-pointer ${
                    index === activeImage ? "" : "relative"
                  }`}
                >
                  {index === activeImage ? (
                    <>
                      <div className="flex flex-col space-y-8 w-full">
                        <span className="text-white text-3xl font-semibold leading-tight break-words">
                          {caseItem.title}
                        </span>
                      </div>
                      <div>
                        {" "}
                        <button
                          className="flex items-center rounded-full px-6 py-2 bg-customYellow gap-x-2 w-fit mt-4"
                          onClick={() => handleOpenCase(index)}
                        >
                          Открыть кейс <HiArrowLongRight className="f" />
                        </button>
                        <div className="text-3xl flex text-white ">
                          <span className="text-blue-700">.</span>
                          <span>.</span>
                          <span>.</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="absolute inset-x-0 bottom-0 h-1/2 flex items-end px-8 py-6">
                      <p className="text-stone-800 font-medium text-lg leading-tight break-words">
                        {caseItem.title}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Cases;
