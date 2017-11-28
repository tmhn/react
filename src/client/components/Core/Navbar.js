/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
import { Collapse, Container, NavbarToggler, Navbar, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { css, StyleSheet } from "aphrodite";
import { Apercu_Light, Apercu_Medium } from "../Utils/fonts";

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#FFFFFF",
    fontFamily: [Apercu_Light],
    paddingTop: "16px",
    paddingBottom: "16px",
    marginBottom: 0,
    borderBottom: "1px solid rgba(37, 39, 41, .05)"
  },
  toggler: {
    borderColor: "transparent",
    ":focus": {
      outline: "none"
    }
  },
  brand: {
    fontFamily: [Apercu_Medium],
    color: "#505A6A",
    fontSize: 16,
    letterSpacing: 1,
    marginRight: 0,
    paddingRight: 8
  },
  link: {
    color: "#505a6a"
  }
});

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.collapseToggle = this.collapseToggle.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    this.state = {
      isOpen: false,
      windowWidth: 0
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ windowWidth: window.innerWidth });
  }

  collapseToggle() {
    if (this.state.windowWidth < 992 || this.state.isOpen) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }

  render() {
    return (
      <Navbar className={`navbar navbar-expand-lg navbar-light ${css(styles.navbar)}`}>
        <Container>
          <NavLink
            className={`navbar-brand ${css(styles.brand)}`}
            to="/"
            onClick={this.collapseToggle}
          >
            Apollo
          </NavLink>
          <NavbarToggler onClick={this.collapseToggle} className={css(styles.toggler)} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="navbar-nav mr-auto">
              <NavItem className="nav-item">
                <a href="" className={`nav-link ${css(styles.link)}`} onClick={this.collapseToggle}>
                  Launch
                </a>
              </NavItem>
            </Nav>
            <Nav className="navbar-nav ml-auto">
              <NavItem className="nav-item">
                <a href="" className={`nav-link ${css(styles.link)}`} onClick={this.collapseToggle}>
                  Blastoff
                </a>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
