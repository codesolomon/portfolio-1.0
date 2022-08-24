import React from "react";
import styles from "../styles/Layout.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Meta from "./Meta";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Meta title={"CodeSolomon"} />
      <div className={styles.container}>
        <div className={styles.main}>
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
