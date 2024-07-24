import Image from "next/image";
import Nav from "./nav";
import Hero from "./hero/hero";
import Map from "./map";
import Cases from "./cases";

import Steps from "./steps";
import ContactForm from "./contactFormContainer";
import FAQ from "./faq";
import Footer from "./footer";
import Brands from "./brands";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <div className="p-4 bg-bgGrey sm:py-16 rounded-b-xl sm:rounded-b-2xl md:rounded-b-3xl lg:rounded-b-[100px] mb-12">
        <Hero />
        <Map />
        <Cases />
      </div>
      <Steps />
      <Brands />
      <ContactForm />

      <FAQ />
      <div
        style={{
          backgroundImage: `linear-gradient(to top, rgba(42, 78, 164, 0.5) 0%, rgba(42, 78, 164, 0) 100%)`,
        }}
      >
        {/* <Footer /> */}
      </div>
    </main>
  );
}
