import React from "react";
import Layout from "../components/layout/Layout.component";
import Header from "../components/header/Header.component";
import Counter from "../components/counter/Counter.component";
import SignupForm from "../components/signup-form/SignupForm.component";

import { SIGNUP_PAGE_ARTICLE } from "../data/article";
import Article from "../components/article/Article.component";

const Signup = () => {
  return (
    <Layout signup>
      <Header />
      <Article article={SIGNUP_PAGE_ARTICLE} signup />
      <Counter signup />
      <SignupForm signup />
    </Layout>
  );
};

export default Signup;
