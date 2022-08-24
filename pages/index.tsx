import type { NextPage } from "next";
import Layout from "../src/components/Layout";
import Hero from "../src/components/Hero";
import WorkSection from "../src/components/WorkSection";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <WorkSection />
      </Layout>
    </>
  );
};

export default Home;
