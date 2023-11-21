import Head from "next/head";
import Header from "./Header";
import CTA from "./CTA";
import Footer from "./Footer";

export default function MdxCaseStudyLayout({ children }) {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://frontendbilly.netlify.app/img/favicon.png"
        />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Y7DYRJ7WR1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-Y7DYRJ7WR1');
                `,
          }}
        ></script>
      </Head>
      <div className="font-body">
        <Header />
        <main className="m-auto max-w-4xl sm:mt-36 mt-4">
          <div className="sm:mx-4 mx-2 flex flex-col gap-6">{children}</div>
        </main>
        <CTA />
        <Footer />
      </div>
    </>
  );
}
