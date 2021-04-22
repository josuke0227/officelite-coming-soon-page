import React from "react";
import Layout from "../components/layout/Layout.component";
import Header from "../components/header/Header.component";
import Hero from "../components/hero/Hero.component";
import Pricing from "../components/pricing/Pricing.component";
import Counter from "../components/counter/Counter.component";

import { homePageArticle } from "../data/article";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Hero article={homePageArticle} />
      <Pricing />
      <Counter />
    </Layout>
  );
};

export default Home;
