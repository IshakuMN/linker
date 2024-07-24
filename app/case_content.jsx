"use client";

import Image from "next/image";
import { SiV } from "react-icons/si";
import { useEffect, useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";

const CaseContent = ({ activeImage, openCase, onClose }) => {
  const [openCs, setOpenCs] = useState(openCase);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeImg, setActiveImg] = useState(activeImage);

  const handleCloseCase = () => {
    onClose();
  };

  const cases = [
    {
      mainImage: "/case11.jpeg",
      title: "Измельчитель / Шредер гусеничного типа U-WS250",
      description:
        "Найти и доставить первичный бытовой измельчитель для смешанных отходов с двумя комплектами валов на дистанционном управлении",
      images: ["/case11.jpeg", "/case12.jpeg", "/case13.jpeg"],
      specs: {
        client: "Строительные компании",
        duration: "90 дней",
      },
    },
    {
      mainImage: "/case21.jpeg",
      title: "Мобильная дробилка Lindemann CR® 225 LT",
      description:
        "Необходимы термоголовки, которые устанавливаются на батареи и через систему умного дома контролируют температуру в помещении.",
      images: ["/case21.jpeg", "/case22.jpeg", "/case23.jpeg"],
      specs: {
        client: "Строительные компании",
        duration: "60 дней",
      },
    },
    {
      mainImage: "/case31.jpeg",
      title: "Сортировочная установка Terex Finlay 883+",
      description:
        "Необходимо устройство для притока свежего уличного воздуха в помещение с подогревом и с возможностью подключения к системе умного дома. Необходимо соответствие по ГОСТу и СНиПу, а так же исключить конфликт с системой общедомовой вытяжки.",
      images: ["/case31.jpeg", "/case32.jpeg", "/case33.jpeg"],
      specs: {
        client: "Строительные компании “Суварстроит",
        duration: "60 дней",
      },
    },
  ];

  const handleNextCurrentSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cases[activeImg]?.images.length);
  };

  const handlePrevCurrentSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + cases[activeImg]?.images.length) %
        cases[activeImg]?.images.length
    );
  };

  const handleNextCase = () => {
    setActiveImg((prev) => (prev + 1) % cases.length);
    // setOpenCase((prev) => (prev + 1) % cases.length)

    setCurrentSlide(0);
  };

  const handlePrevCase = () => {
    setActiveImg((prev) => (prev - 1 + cases.length) % cases.length);
    setCurrentSlide(0);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between">
        <button
          className="rounded-full px-4 py-2 bg-white flex items-center gap-x-2"
          onClick={handlePrevCase}
        >
          <HiArrowLongLeft /> Назад
        </button>
        <button
          className="rounded-full px-4 bg-white"
          onClick={handleCloseCase}
        >
          x
        </button>
      </div>
      <div className="md:flex justify-between gap-x-4  ">
        <h1 className="md:hidden text-lg my-4 px-2">
          {cases[activeImg].title}{" "}
        </h1>
        <div
          style={{
            backgroundImage: `url(${cases[activeImg]?.images[currentSlide]})`,
            backgroundSize: "cover",
          }}
          className="rounded-3xl relative h-[566px] w-[734px sm:h-[435px] sm:w-[696px]"
        >
          {" "}
          <div className="flex justify-between absolute bottom-0 left-4 right-4">
            <button className="rounded-full p-2 h-8 w-8 text-white bg-stone-900">
              <HiArrowLongLeft onClick={handlePrevCurrentSlide} />
            </button>{" "}
            <div className="text-3xl flex text-white ">
              <span className={currentSlide === 0 ? "text-blue-700" : ""}>
                .
              </span>
              <span className={currentSlide === 1 ? "text-blue-700" : ""}>
                .
              </span>
              <span className={currentSlide === 2 ? "text-blue-700" : ""}>
                .
              </span>
            </div>
            <button
              className="rounded-full p-2 h-8 w-8 bg-customYellow"
              onClick={handleNextCurrentSlide}
            >
              <HiArrowLongRight />
            </button>
          </div>
        </div>

        <div className="max-w-[523px] flex flex-col space-y-8 md:space-y-0 justify-between items-center mx-auto ">
          <h1 className="text-3xl text-stone-950 hidden md:block">
            {cases[activeImg]?.title}
          </h1>
          <div className="flex items-center w-full justify-between pr-8 md:pr-16">
            <div className="flex space-x-4">
              <hr className="border h-16 w-[0.5px] border-stone-300" />{" "}
              <div className="space-y-2">
                <span className="px-2 py-1 rounded-full bg-white text-blue-700">
                  Заказчик
                </span>
                <p className="text-stone-800">
                  {cases[activeImg]?.specs?.client}
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <hr className="border h-16 w-[0.5px] border-stone-300" />{" "}
              <div className="space-y-2">
                <span className="px-2 py-1 rounded-full bg-white text-blue-700">
                  Срок выполнения
                </span>
                <p className="text-stone-800">
                  {cases[activeImg]?.specs?.duration}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white px-6 py-4 rounded-xl max-w-[523px] space-y-4 ">
            <span className="px-2 py-1 rounded-full bg-stone-100 text-blue-700">
              Запрос
            </span>
            <p className="text-stone-600">{cases[activeImg]?.description}</p>
          </div>
          <button
            className="px-4 py-2 bg-stone-900 flex gap-x-4 items-center justify-center w-full text-white rounded-full"
            onClick={handleNextCase}
          >
            Следующий кейс <HiArrowLongRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseContent;
