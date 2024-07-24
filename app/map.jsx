import Image from "next/image";

const Map = () => {
  return (
    <section
      id="map"
      className="bg-bgBlue text-white p-2 lg:p-6 rounded-[32px] shadow-lg max-w-7xl h-[512px] lg:h-[727px] mx-auto my-16"
    >
      <div className="relative">
        <h2 className="mt-4 max-w-[653px] lg:text-3xl ml-6">
          Обеспечим полный цикл сделки, найдем и доставим любой товар попавший
          под санкции из любой точки мира.
        </h2>

        <div className="relative z-50">
          <div className="space-y-4 text-black sm:flex sm:space-y-0 sm:space-x-4 lg:flex-col lg:space-x-0 lg:space-y-4 items-stretch lg:absolute lg:right-8 lg:-top-16 mx-6 lg:mx-0 my-8">
            {[
              {
                number: "200",
                text: "рейсов ежемесячно",
                bgColor: "bg-yellow-400",
              },
              {
                number: "80+",
                text: "постоянных клиентов",
                bgColor: "bg-white",
              },
              {
                number: "12",
                text: "лет успешной работы",
                bgColor: "bg-white",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex sm:flex-col justify-center items-center ${item.bgColor} p-6 py-3 lg:p-4 rounded-lg lg:rounded-2xl w-[186px] h-fit lg:w-[200px] lg:h-[171px]`}
              >
                <h3 className="text-3xl sm:text-[56px] leading-[1.4] font-semibold">
                  {item.number}
                </h3>
                <p className="lg:text-lg text-sm text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className=" lg:block">
          <Image
            src="/map.png"
            alt="World Map"
            className="rounded-lg absolute lg:-left-12 top-24"
            width={1064}
            height={576}
          />
        </div>
      </div>
    </section>
  );
};

export default Map;
