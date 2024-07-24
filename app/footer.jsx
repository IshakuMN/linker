import Image from "next/image";
import Link from "next/link";

const Footer = ({ className = "" }) => {
  return (
    <section
      className={`mt-8 max-w-7xl mx-auto pb-8 px-4 flex flex-col sm:flex-row items-start lg:items-center justify-between text-left text-sm text-txt-secondary font-b3 ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[21px] mb-8 lg:mb-0">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <div className="self-stretch relative leading-[17px]">
          © 2024. Все права защищены
        </div>
        <div className="self-stretch relative space-y-3 leading-[120%]">
          <p className="m-0">OOO &quot;Линкор&quot;</p>
          <p className="m-0">ИНН: 1655469490</p>
          <p className="m-0">ЕГРН:1211600092329</p>
        </div>
      </div>
      <div className="flex -ml-2 sm:ml-0 flex-col lg:flex-row items-start lg:items-end justify-start gap-[30px] lg:gap-[83px] max-w-full">
        <div className="flex flex-col items-start justify-center gap-[16px]">
          <Link
            href="/#map"
            className="rounded-81xl py-1 px-2 hover:bg-stone-100"
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
            className="rounded-81xl py-1 px-2 hover:bg-stone-100"
          >
            Сотрудничество
          </Link>
        </div>
        <div className="flex flex-col items-start justify-end gap-[16px]">
          <div className="rounded-81xl py-1 px-2 hover:bg-stone-100">
            Политика конфиденциальности
          </div>
          <Link
            href="/#faq"
            className="rounded-81xl py-1 px-2 hover:bg-stone-100"
          >
            FAQ
          </Link>
          <div className="py-0 px-2">Круглосуточно: (495) 555-55-55</div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[23px]">
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <div className="h-8 w-8 relative min-h-[32px] flex items-center justify-center">
              <img
                className="h-full w-full object-contain absolute left-[4px] top-[2px] [transform:scale(2.5)]"
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
            <div className="relative leading-[17px]">{`Сайт разработан компанией Binorix `}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
