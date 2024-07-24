import Image from "next/image";
import HeroCards from "./heroCards";
import HeroImage from "./heroImage";
import Link from "next/link";

const HeroText = () => {
  return (
    // <div className="max-w-[738px] md:border-[1.5px]   md:py-14 md:px-[44px] border-stone-300 rounded-[32px]">
    <div className="border-[1.5px] p-6 lg:p-0 lg:border-none rounded-3xl border-stone-300">
      <h1 className="text-4xl md:text-6xl font-semibold">
        Подбор и импорт товаров для бизнеса
      </h1>
      <div className="flex items-center space-x-4 mb-16 mt-12">
        <hr className="border-customBlack bg-customBlack w-0.5 sm:h-16 h-20 border " />{" "}
        <p className="max-w-[375px] text-stone-600">
          Подготовим рассчет по вашему запросу, найдем товар у производителя,
          доставим точно в срок.
        </p>
      </div>
      <div className="sm:flex-row flex flex-col space-y-2 sm:space-x-4 border">
        {" "}
        <Link
          href="/#cases"
          className="px-6 py-3 w-full sm:w-fit rounded-full flex items-center justify-center text-center bg-white hover:bg-gray-100 focus:bg-customBlack focus:text-white"
        >
          Смотреть кейсы
        </Link>
        <Link
          href="/#contact_form"
          className="px-6 py-3 w-full sm:w-fit flex justify-center text-center items-center rounded-full bg-customYellow hover:bg-yellow-400 focus:bg-customBlack focus:text-white"
        >
          Отправить заявку
        </Link>
      </div>
    </div>
  );
};

export default HeroText;
