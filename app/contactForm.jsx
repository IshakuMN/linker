import React from "react";

const ContactForm = () => {
  return (
    <section
      id="contact_form"
      className="bg-white px-4 sm:px-8 py-2 sm:py-4 rounded-t-xl md:rounded-2xl md:max-w-[591px] w-full"
    >
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold my-3 sm:my-6">
        Заполните форму для связи
      </h1>
      <form className="space-y-2 sm:space-y-4">
        <div className="flex flex-col">
          <span className="mb-1">Укажите ваше имя</span>
          <input
            type="text"
            placeholder="Пётр"
            className="border rounded-full w-full py-1 sm:py-2 px-2 sm:px-4"
          />
        </div>
        <div className="flex flex-col">
          <span className="mb-1">Номер телефона</span>
          <input
            type="text"
            placeholder="+7 _ _ _    _ _ _   _ _   _ _"
            className="border rounded-full w-full py-1 sm:py-2 px-2 sm:px-4"
          />
        </div>
        <div className="flex flex-col">
          <span className="mb-1">Ваш E-mail</span>
          <input
            type="text"
            placeholder="logistic@mail.ru"
            className="border rounded-full w-full py-1 sm:py-2 px-2 sm:px-4"
          />
        </div>
        <button className="rounded-full bg-yellow-500 text-white px-4 py-1 sm:py-2 w-full mt-3 sm:mt-6">
          Отправить заявку
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
