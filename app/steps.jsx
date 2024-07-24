"use client";

import Image from "next/image";
import ProgressBar from "./progressBar";
import { useState, useEffect } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";

const Steps = () => {
  const stepItems = [
    {
      step: 1,
      title: "Заявка на сайте",
      description:
        "Вы оставляете заявку на сайте, наш специалист связывается с вами и уточняет подробности заказа. После чего мы тщательно изучаем специфику продукции.",
      image: "/step1.png",
    },
    {
      step: 2,
      title: "Подбор фабрики",
      description: "Подбираем фабрику и заказываем образцы",
      image: "/step2.png",
    },
    {
      step: 3,
      title: "Технические решения",
      description: "Выбираем дизайн и уникальные технические решения продукции",
      image: "/step3.png",
    },
    {
      step: 4,
      title: "Заключение контрактов",
      description: "Заключаем контракты, размещаем заказ и инспектируем товар",
      image: "/step4.png",
    },
    {
      step: 5,
      title: "Документация и погрузка",
      description: "Оформляем экспортные документы и контролируем погрузку",
      image: "/step5.png",
    },
    {
      step: 6,
      title: "Доставка товара",
      description: "Подбираем оптимальный маршрут и передаем товар вам",
      image: "/step6.png",
    },
  ];

  const [displayedItem, setDisplayedItem] = useState(stepItems[0]);
  const [currentStep, setCurrentStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNextStep = () => {
    setIsTransitioning(true);
    if (currentStep < stepItems.length) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === stepItems.length) {
      setCurrentStep(1);
    }
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setDisplayedItem(stepItems[currentStep - 1]);
        setIsTransitioning(false);
      }, 300); // This should match the transition duration
      return () => clearTimeout(timer);
    }
  }, [currentStep, isTransitioning, stepItems]);

  return (
    <section id="steps" className="max-w-7xl mx-auto p-4 md:p-0">
      <div>
        <div className="md:flex space-y-2 items-end justify-between px-4">
          <div className="space-y-2">
            <span className="rounded-full border text-sm text-stone-600 border-stone-400 py-1 px-2">
              6 шагов к получению товара
            </span>
            <h1 className="text-xl md:text-3xl font-bold">
              Этапы сотрудничества
            </h1>
          </div>
          <ProgressBar progress={currentStep} />
        </div>
      </div>
      <div
        className="relative flex my-4 justify-between px-8 py-6 rounded-[32px] h-[537px] bg-cover bg-center bg-no-repeat transition-opacity duration-300 ease-in-out"
        style={{
          backgroundImage: `url(${displayedItem.image})`,
          opacity: isTransitioning ? 0 : 1,
        }}
      >
        <span className="flex space-x-4 items-start font-medium">
          <h2 className="w-10 h-10 px-4 md:w-12 md:h-12 rounded-full bg-yellow-500 text-center flex items-center justify-center md:text-xl font-bold">
            <span>{displayedItem.step}</span>
          </h2>
          <h2 className="text-white text-2xl">{displayedItem.title}</h2>
        </span>
        <div className="absolute bottom-4 right-4 py-6 px-8 space-y-6 bg-white rounded-3xl max-w-[270px] md:max-w-96 h-fit text-sm font-light">
          <p>{displayedItem.description}</p>
          <button
            onClick={handleNextStep}
            className="rounded-full space-x-2 bg-black text-white px-4 py-2 flex items-center"
          >
            <span>
              {currentStep === stepItems.length ? "Назад" : "Следующий этап"}
            </span>
            {currentStep === stepItems.length ? (
              <HiArrowLongLeft />
            ) : (
              <HiArrowLongRight />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Steps;
