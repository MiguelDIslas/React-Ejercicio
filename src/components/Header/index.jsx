import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

import logo from "../../image/logo.png";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to="/" className="navbar-brand">
          <img
            alt="logo-admin"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top logo-image"
          />{" "}
          Panel de Administrador
        </NavLink>

        <Nav className="me-auto">
          <NavLink to="/proyectos" className="nav-link">
            Proyectos
          </NavLink>

          <NavLink to="/tareas" className="nav-link">
            Tareas
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
