import React from "react";
import { css, StyleSheet } from "aphrodite";
import Page from "../Core/Page";
import { Apercu_Light } from "../Utils/fonts";

const styles = StyleSheet.create({
  title: {
    fontFamily: [Apercu_Light]
  }
});

const Home = () => (
  <Page>
    <h1 className={css(styles.title)}>
      React Template{" "}
      <span aria-label="rocket" role="img">
        🚀
      </span>
    </h1>
  </Page>
);

export default Home;
