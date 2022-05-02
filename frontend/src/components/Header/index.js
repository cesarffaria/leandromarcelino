import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link, NavLink } from "react-router-dom";

import Navigation from "../Navigation";

import logoBlack from "../../assets/logo_black.svg";
import logoWhite from "../../assets/logo_white.svg";
import burger from "../../assets/burger.svg";
import closedBurger from "../../assets/closedBurger.svg";

import HEADER_QUERY from "../../queries/header/header.js";



const Header = () => {
  const [menuStatus, setMenuStatus] = useState("closed");

  const { loading, error, data } = useQuery(HEADER_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>


  const headerAttributes = data.header.data.attributes;
  const headerNome = headerAttributes.Nome;
  const headerLogoURL = process.env.REACT_APP_BACKEND_URL + headerAttributes.Logo.data.attributes.url;

  return (
    <div id="header" className="header">
      <Navigation name={headerNome} url={headerLogoURL} />
    </div>
  );
};

export default Header;