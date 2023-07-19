import React from "react";

function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container max-w-7xl w-full mx-auto flex px-5 md:px-12 md:py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hey I'm Billy,
            <br />
          </h1>
          <h2 className="title-font sm:text-2xl text-xl mb-4 font-small text-gray-900">
            Experienced UX/UI designer & Frontend developer based in London
          </h2>
          <p className="mb-8 leading-relaxed">
            I design & build complex and data heavy digital experiences for
            various sectors, services & industries
          </p>
          <div className="flex justify-center">
            <a
              className="inline-flex text-black bg-green-300 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg transition"
              href="mailto:wilgemcdowell@gmail.com?subject=Lets%20have%20a%20chat"
            >
              Let's Chat
            </a>
            <a
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg transition"
              href="/CV/William_McDowell_2023_CV.pdf"
              rel={"noreferrer noopener"}
              target="_blank"
            >
              Check out CV
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 xs:w-5/6 order-first md:order-last pb-6">
          <img className="mx-auto" alt="hero" src="/img/Headshot.png" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
