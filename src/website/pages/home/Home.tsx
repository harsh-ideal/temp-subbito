import React from "react";
import Feature from "./Feature";
import Banner from "./Banner";
import Faq from "./Faq";
import Services from "./Services";
import Header from "../../components/Header/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <Feature />
      <Faq />
    </>
  );
};

export default Home;
