import React from "react";

function CTA() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
            If you like what your seeing, drop me a line.
          </h1>
          <a
            className="flex-shrink-0 text-black transition bg-green-300 border-0 py-2 px-8 focus:outline-none hover:bg-green-500 rounded text-lg mt-10 sm:mt-0"
            href="mailto:wilgemcdowell@gmail.com?subject=Lets%20have%20a%20chat"
          >
            Hit me up!
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
