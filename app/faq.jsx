"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqData = [
    {
      question: "Что из себя представляет компания Linkor Logistics?",
      answer:
        "Linkor Logistics является ведущим поставщиком комплексных логистических решений. Мы стремимся предоставлять эффективные, надежные и экономически эффективные логистические услуги.",
    },
    {
      question: "Как Linkor Logistics может помочь моему бизнесу?",
      answer:
        "Мы можем оптимизировать вашу цепочку поставок, снизить затраты и повысить эффективность. Наш опыт позволяет нам оптимизировать ваши логистические процессы, обеспечить своевременную доставку и минимизировать риски.",
    },
    {
      question: "В какой отрасли Вы обслуживаете?",
      answer:
        "Мы обслуживаем широкий спектр отраслей. Наш опыт позволяет нам адаптировать наши решения для удовлетворения конкретных потребностей каждой отрасли.",
    },
    {
      question: "Каковы преимущества работы с нами?",
      answer:
        "Благодаря партнерству с Linkor Logistics, вы получаете выгоду от: оперативности решений, качества обслуживания и ответственному отношению к работе.",
    },
    {
      question: "Какие услуги предлагает компания?",
      answer:
        "Услуги компании: поиск поставщиков, доставка из Китая, доставка из Европы, доставка из другой страны, сборные грузы, сопровождение сделки, аутсорсинг ВЭД, консалтинговые услуги, логистика.",
    },
    {
      question:
        "Какие типы логистических услуг предлагает логистика Linkor logistics?",
      answer:
        "Linkor Logistics предоставляет комплексный набор логистических услуг, включая: международные грузовые перевозки: Воздух, океан, железные дороги и дорожные грузовые перевозки для внутренних и международных поставок.",
    },
  ];

  return (
    <section id="faq" className="max-w-7xl mx-auto px-4 py-8">
      <span className="text-xl font-extralight text-stone-700 rounded-full px-4 py-1 border">
        FAQ
      </span>
      <h2 className="text-2xl font-bold text-gray-900 my-6">Частые вопросы</h2>
      <div className=" items-center w-full grid grid-cols-1 md:grid-cols-2 gap-x-6">
        {faqData.map((item, index) => (
          <Accordion type="single" collapsible key={index}>
            <AccordionItem value="item-1" сlassName="rounded-3xl">
              <AccordionTrigger className="text-start text-stone-800 hover:text-bgBlue">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="rounded-3xl text-sm bg-stone-100 px-12 py-4 mb-2 text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
