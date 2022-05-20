import React from "react";
import { Link, useLocation } from "react-router-dom";

import logoWhite from "../../assets/logo_white.svg";
import burger from "../../assets/burger.svg";
import closedBurger from "../../assets/closedBurger.svg";



const Rigth = () => {
    const location = useLocation().pathname;
    return (
        <div id="rigthBar" className="rigthBar">
            <div className="sideInner">
                <div className="burger burger-desktop">
                    <Link to={location !== "/menu" ? `/menu` : `/`}>
                            <img alt="" src={location !== "/menu" ? burger : closedBurger} />
                    </Link>
                </div>
                <div><p>Powered by<br /><a  rel="noreferrer" href="https://terastudio.pt/" target="_blank" alt="TERASTUDIO"><img id="TERASTUDIO-brand" src={logoWhite} alt="TERASTUDIO"></img></a></p></div>
            </div>
        </div>

    );
};

export default Rigth;