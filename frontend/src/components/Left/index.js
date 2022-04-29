import React from "react";
import { NavLink} from 'react-router-dom'

import { useQuery } from "@apollo/react-hooks";
import { Container, Row, Col } from "react-bootstrap";

import HEADER_QUERY from "../../queries/header/header.js";


const Left = () => {
    const { loading, error, data } = useQuery(HEADER_QUERY)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
   
  
    const headerAttributes = data.header.data.attributes;
    const headerNome = headerAttributes.Nome;
    const headerLogoURL = process.env.REACT_APP_BACKEND_URL + headerAttributes.Logo.data.attributes.url;

    return (
        <div id="leftBar" className="leftBar">
            <div>
                <div>
                    <NavLink to={{ pathname: "/" }} className="navbar-brand">
                        <img
                            alt={headerNome}
                            src={headerLogoURL}
                            className="d-inline-block align-top"
                        />
                    </NavLink>
                </div>
                <div>94627 - PUB</div>
                <div><p>©Leandro Marcelino 2022.<br />Todos os direitos reservados.</p></div>
            </div>
        </div>
    );
};

export default Left;