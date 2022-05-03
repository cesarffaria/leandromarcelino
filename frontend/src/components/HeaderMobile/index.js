import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link, NavLink , useLocation} from "react-router-dom";

import Navigation from "../Navigation";

import logoBlack from "../../assets/logo_black.svg";
import logoWhite from "../../assets/logo_white.svg";
import burger from "../../assets/burger.svg";
import closedBurger from "../../assets/closedBurger.svg";

import HEADER_QUERY from "../../queries/header/header.js";


const Header = () => {
  const location = useLocation().pathname;

  const { loading, error, data } = useQuery(HEADER_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const headerAttributes = data.header.data.attributes;
  const headerNome = headerAttributes.Nome;
  const headerLogoURL = process.env.REACT_APP_BACKEND_URL + headerAttributes.LogoMobile.data.attributes.url;

  return (
    <div id="header" className="header">
      <div className="header-mobile d-flex w-100">
        <NavLink to={{ pathname: "/" }} className="navbar-brand">
          <img
            alt={headerNome}
            src={headerLogoURL}
            className="d-inline-block align-top"
          />
        </NavLink>
        <div className="burger">
          <Link to={location != "/menu" ? `/menu` : `/`}>
            <img src={location != "/menu" ? burger : closedBurger} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;