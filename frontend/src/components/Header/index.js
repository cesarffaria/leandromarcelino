import React from "react";
import { useQuery } from "@apollo/react-hooks";

import Navigation from "../Navigation";

import HEADER_QUERY from "../../queries/header/header.js";


const Header = () => {
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