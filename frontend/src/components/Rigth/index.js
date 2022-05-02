import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Container, Row, Col, FormLabel } from "react-bootstrap";
import { Link } from "react-router-dom";

import logoBlack from "../../assets/logo_black.svg";
import logoWhite from "../../assets/logo_white.svg";
import burger from "../../assets/burger.svg";
import closedBurger from "../../assets/closedBurger.svg";



const Rigth = () => {
    const [menuStatus, setMenuStatus] = useState("closed");

    const hamburger = () => {
        //console.log("before: " + menuStatus);
        menuStatus == "open" ? setMenuStatus("closed") : setMenuStatus("open");

        //console.log("before: " + menuStatus);
    }
    return (
        <div id="rigthBar" className="rigthBar">
            <div className="sideInner">
                <div className="burger">
                    <Link to={menuStatus == "closed" ? `/menu` : `/`}>
                        <button className='burger-button' onClick={hamburger}>
                            <img src={menuStatus == "closed" ? burger : closedBurger} />
                        </button>
                    </Link>
                </div>
                <div><p>Powered by<br /><a href="https://terastudio.pt/" target="_blank" alt="TERASTUDIO"><img id="TERASTUDIO-brand" src={logoWhite} alt="TERASTUDIO"></img></a></p></div>
            </div>
        </div>

    );
};

export default Rigth;