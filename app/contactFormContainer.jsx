import Image from "next/image";
import ContactForm from "./contactForm";

const ContactFormContainer = () => {
  return (
    <section className="md:flex relative items-center px-10 md:px-20 py-6 md:py-10 max-w-7xl mx-auto rounded-[32px]  space-x-4 h-[592px] sm:bg-[url(/form_map.png)] bg-bgBlue bg-cover bg-center bg-no-repeat">
      <div className="text-white max-w-[462px] space-y-6">
        <Image src="/location.svg" width={20} height={20} alt="location" />
        <h2 className="text-4xl font-medium">Найдите решение прямо сейчас</h2>
        <div className="flex items-center space-x-4">
          <hr className=" bg-customBlack w-0.5 h-10 md:h-16 border " />
          <p className="text-sm sm:text-base font-light max-w-[343px]">
            Ищем поставщиков, контролируем качество, курируем сделку и
            доставляем до вашего склада
          </p>
        </div>
      </div>
      <div className=" absolute md:static sm:right-8 sm:left-4  bottom-0 right-0 -left-4">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactFormContainer;
