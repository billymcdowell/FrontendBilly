import React from "react";
import data from "../data.json";
import Link from "next/link";

function Work() {
  return (
    <section>
      {data.map((section, idx) => (
        <section
          key={idx}
          className="text-gray-600 body-font md:px-12 mb-28"
          id="work"
        >
          <div className="container mx-auto max-w-4xl md:items-center p-4">
            <div className="w-full flex flex-col sm:flex-row items-start mx-auto">
              <h2 className="title-font sm:text-2xl sm:text-center text-xl mb-4 font-small text-gray-900">
                {section.title}
              </h2>
            </div>
          </div>

          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-wrap w-full">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col w-full ${
                    idx === 1 || idx === 2 || idx === 4 || idx === 5
                      ? "md:w-1/2"
                      : "md:w-full"
                  }`}
                >
                  <div className="p-4 flex flex-col flex-grow">
                    <Link
                      className="flex flex-col flex-grow"
                      // className="h-100 flex flex-wrap w-full bg-gray-100 hover:bg-green-50 transition py-32 px-10 relative mb-4 rounded-lg overflow-hidden cursor-pointer"
                      href={item.link}
                    >
                      <div
                        style={{
                          backgroundImage: `url(${item.img})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        className="rounded overflow-hidden flex flex-col flex-grow"
                      >
                        <div
                          style={{
                            backgroundColor: "rgba(255,255,255,0.65",
                          }}
                          className="text-center relative z-10 w-full py-32 flex flex-col flex-grow items-center"
                        >
                          <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">
                            {item.title}
                          </h2>
                          <p className="leading-relaxed">{item.subtitle}</p>
                          <div className="mt-3 text-grey-600 inline-flex items-center rounded px-2 py-1 bg-green-100">
                            Check it out
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                            >
                              <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </section>
  );
}

export default Work;
