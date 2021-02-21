import React from "react";
import { 
    ContainerHeader,
    FigureLogo
 } from "./style";

 import skyLogo from "../../assets/skyLogo.png";

const Header = () => {
    return (
        <container>
            <ContainerHeader>
                <container className="container">
                    <FigureLogo>
                        <img src={skyLogo} alt="Sky Logotipo" tile="Sky Logotipo"/>
                    </FigureLogo>
                </container>
            </ContainerHeader>
        </container>
    );
}

export default Header;