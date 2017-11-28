/* eslint-disable react/require-default-props */

import React from "react";
import { css, StyleSheet } from "aphrodite";
import { Container } from "reactstrap";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  title: {
    fontFamily: "Apercu-Light",
    marginTop: "30px",
    marginBottom: "40px",
    color: "#333",
    textAlign: "center",
    fontSize: "2rem"
  }
});

const Page = ({ title, children }) => (
  <div>
    <Container>
      {!title ? null : <h1 className={css(styles.title)}>{title}</h1>}
      {children}
    </Container>
  </div>
);

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Page;
