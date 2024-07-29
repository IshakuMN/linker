import { Section } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SlSocialSkype } from "react-icons/sl";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  return (
    <section className="max-w-7xl mx-auto flex justify-between items-end p-4 lg:p-0 ">
      <div className="space-y-4">
        <Logo />
        <div className="flex justify-between items-center sm:hidden">
          <Section1 />
          <Section2 />
        </div>
        <hr className="w-full border-1 border-gray-300 sm:hidden" />
        <div className="flex flex-row items-center justify-between sm:flex-col sm:justify-start sm:items-start sm:space-y-4 md:block">
          <Year />
          <Detials />
        </div>
        <div className="lg:hidden">
          <Social />
        </div>
      </div>
      <div className="lg:flex flex-col hidden sm:block lg:justify-between lg:flex-row items-start justify-start md:items-center">
        <Section1 />
        <Section2 />
      </div>

      <div className="hidden lg:block mt-4 sm:m-0">
        <Social />
      </div>
    </section>
  );
};

export default Footer;

export const Section1 = () => {
  return (
    <div className="flex flex-col items-start gap-2 sm:gap-[16px] text-sm sm:text-base">
      <Link
        href="/#map"
        className="rounded-81xl py-1 px-2 hover:bg-stone-100 rounded-full"
      >
        О компании
      </Link>
      <Link
        href="/#cases"
        className="rounded-81xl bg-stone-100 py-1 px-2 text-blue-700 rounded-full"
      >
        Наши кейсы
      </Link>
      <Link
        href="/#steps"
        className="rounded-81xl py-1 px-2 hover:bg-stone-100 rounded-full"
      >
        Сотрудничество
      </Link>
    </div>
  );
};

export const Section2 = () => {
  return (
    <div className="flex flex-col items-start justify-start text-sm sm:text-base  gap-2 sm:gap-[16px]">
      <Link
        href={"/privacy_policy.pdf"}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-81xl sm:py-1 px-2 hover:bg-stone-100 rounded-full"
      >
        Политика конфиденциальности
      </Link>
      <Link
        href="/#faq"
        className="rounded-81xl sm:py-1 px-2 hover:bg-stone-100 rounded-full"
      >
        FAQ
      </Link>
      <div className="py-0 px-2">Круглосуточно: (495) 555-55-55</div>
    </div>
  );
};

export const Social = () => {
  return (
    <div className="flex flex-row sm:flex-col items-start justify-start gap-[23px]">
      <div className="flex flex-row items-center justify-start gap-[16px]">
        <div className="h-8 w-8 relative min-h-[32px] flex items-center justify-center">
          <img
            className="min-h-8 min-w-8 object-contain absolute left-[4px] top-[2px] [transform:scale(2.5)]"
            loading="lazy"
            alt=""
            src="/telegram.svg"
          />
        </div>
        <img
          className="h-8 w-8 relative min-h-[32px]"
          loading="lazy"
          alt=""
          src="/wApp.svg"
        />
      </div>
      <div className="flex flex-row items-center justify-start gap-[8px]">
        <img
          className="h-[18px] w-[18px] relative min-h-[18px]"
          loading="lazy"
          alt=""
          src="/biLogo.svg"
        />
        <a
          href={"https://binorix.com/ru/"}
          target="_blank"
          rel="noopener noreferrer"
          className="relative text-sm sm:text-base  hover:underline"
        >{`Сайт разработан br компанией Binorix `}</a>
      </div>
    </div>
  );
};

export const Detials = () => {
  return (
    <div className="flex flex-col items-start justify-start text-sm">
      <p className="m-0">OOO &quot;Линкор&quot;</p>
      <p className="m-0">ИНН: 1655469490</p>
      <p className="m-0">ЕГРН:1211600092329</p>
    </div>
  );
};

export const Year = () => {
  return (
    <div className="text-sm w-fit mr-2 sm:m-0">© 2024. Все права защищены</div>
  );
};

export const Logo = () => {
  return (
    <Image
      src="/logo.svg"
      alt="logo"
      width={80}
      height={40}
      className="md:!w-[240px] md:!h-[120px]"
    />
  );
};
