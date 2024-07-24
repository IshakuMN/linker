import Image from "next/image";
import Link from "next/link";

const Footer = ({ className = "" }) => {
  return (
    <section
      className={`mt-8 max-w-7xl mx-auto pb-8 flex flex-row items-center justify-between  text-left text-sm text-txt-secondary font-b3 lg:flex-wrap `}
    >
      <div className="flex flex-col items-start justify-start gap-[21px]">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <div className="self-stretch relative leading-[17px] ">
          © 2024. Все права защищены
        </div>
        <div className="self-stretch relative leading-[120%] ">
          <p className="m-0">OOO “Линкор”</p>
          <p className="m-0">ИНН: 1655469490</p>
          <p className="m-0">ЕГРН:1211600092329</p>
        </div>
      </div>
      <div className="flex flex-row items-end justify-start gap-[83px] max-w-full mq450:gap-[21px] mq1050:flex-wrap mq1050:gap-[41px]">
        <div className="flex flex-col items-start justify-center gap-[16px]">
          <div className="rounded-81xl flex flex-row items-center justify-center py-1 px-2">
            <Link
              href="/#map"
              className="relative leading-[17px] inline-block min-w-[82px]"
            >
              О компании
            </Link>
          </div>
          <div className="rounded-81xl bg-hover-grey flex flex-row items-center justify-center py-1 px-2 whitespace-nowrap text-darkslateblue">
            <Link
              href="/#cases"
              className="relative leading-[17px] inline-block min-w-[84px] bg-stone-100 rounded-full px-2 py-1 text-blue-700"
            >
              Наши кейсы
            </Link>
          </div>
          <div className="rounded-81xl flex flex-row items-center justify-center py-1 px-2">
            <Link
              href="/#steps"
              className="relative leading-[17px] inline-block min-w-[114px]"
            >
              Сотрудничество
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start justify-end pt-[75px] px-0 pb-0 gap-[16px]">
          <div className="rounded-81xl flex flex-row items-center justify-center py-1 px-2">
            <div className="relative leading-[17px]">
              Политика конфиденциальности
            </div>
          </div>
          <div className="rounded-81xl flex flex-row items-center justify-center py-1 px-2">
            <Link
              href="/#faq"
              className="relative leading-[17px] inline-block min-w-[27px]"
            >
              FAQ
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center py-0 px-2">
            <div className="relative leading-[17px]">
              Круглосуточно: (495) 555-55-55
            </div>
          </div>
        </div>
        <div className="w-[306px] flex flex-col items-start justify-start gap-[23px]">
          <div className="h-8 flex flex-row items-center justify-start gap-[16px]">
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
          <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
            <img
              className="h-[18px] w-[18px] relative min-h-[18px]"
              loading="lazy"
              alt=""
              src="/biLogo.svg"
            />
            <div className="flex-1 relative leading-[17px]">{`Сайт разработан компанией Binorix `}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
