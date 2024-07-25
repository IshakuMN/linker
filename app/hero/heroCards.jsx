import Image from "next/image";

const HeroCards = () => {
  const items = [
    {
      text: "Авиа, авто, ЖД и морская доставка",
      imageUrl: "/train.svg",
    },
    {
      text: "45 представительств по всему миру",
      imageUrl: "/globe.svg",
    },
    {
      text: "Собственный автопарк (цифра)",
      imageUrl: "/bus.svg",
    },
    {
      text: "15 складов по всему миру",
      imageUrl: "/house.svg",
    },
    {
      text: "250 собственных контейнеров",
      imageUrl: "containers.svg",
    },
    {
      text: "Поиск поставщиков и товаров",
      imageUrl: "/search.svg",
    },
  ];
  return (
    <div className="max-w-full mx-auto mt-12 border-2 overflow-x-auto">
      <div className="flex flex-nowrap gap-4 pb-4 md:justify-start lg:grid lg:grid-cols-3 lg:gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white px-5 py-4 border border-transparent hover:shadow-lg hover:border-stone-300 flex flex-col justify-center items-start h-[124px] lg:h-[112px] min-w-[200px] md:min-w-[250px] lg:min-w-0 transition-all duration-300"
          >
            <Image
              src={item.imageUrl}
              alt={item.text}
              width={26}
              height={26}
              className="bg-gray-100 p-2 rounded-full mb-2"
            />
            <p className="lg:text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCards;
