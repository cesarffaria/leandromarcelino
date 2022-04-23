import React from "react";
import { NavLink} from 'react-router-dom'

import {  Navbar, Container, Nav,  } from "react-bootstrap";


const Navigation = ({ name, url }) => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <NavLink to={{pathname: "/"}} className="navbar-brand">
          <img
            alt={name}
            src={url}
            className="d-inline-block align-top"
          />{' '}
        </NavLink>
        <Nav className="mr-auto">
          <NavLink to={{pathname: "/"}} className="nav-link" >Inicio</NavLink>
          <NavLink to={{pathname: "/servicos"}}  className="nav-link">Serviços</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;