import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Hero from "@theme/Hero";

import styles from "./styles.module.scss";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { tagline } = siteConfig;

  return (
    <Layout description={tagline}>
      <Hero />
    </Layout>
  );
}

export default Home;
