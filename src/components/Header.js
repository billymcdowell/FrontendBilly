import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link
            className="border-0 py-1 px-3 focus:outline-none hover:bg-gray-100 transition cursor-pointer rounded text-base mt-4 md:mt-0"
            href="/#work"
          >
            Work
          </Link>
          <a
            className="border-0 py-1 px-3 focus:outline-none hover:bg-gray-100 transition cursor-pointer rounded text-base mt-4 md:mt-0"
            href="mailto:wilgemcdowell@gmail.com?subject=Lets%20have%20a%20chat"
          >
            Contact
          </a>
        </nav>
        <Link
          href="/"
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center sm:mb-4 md:mb-0"
        >
          <span className="sm:ml-3 text-xl">FrontendBilly</span>
        </Link>
        <div className="lg:w-2/5 inline-flex lg:justify-end sm:ml-5 lg:ml-0">
          <Link
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 transition rounded text-base mt-4 md:mt-0"
            href="/CV"
          >
            Check Out CV
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
