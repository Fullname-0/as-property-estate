import Head from "next/head";
import { FC } from "react";
import Cookie from "../components/ui/Cookie";
import Footer from "../components/ui/Footer";

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>AS | Nieruchomości</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <>{children}</>
      <Cookie />
      <Footer />
    </>
  );
};

export default MainLayout;
