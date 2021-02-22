import React from "react";
import {
    ContainerFooter,
    SkyGrayFigure,
    ContainerSocialIcons
} from "./style";

import graySkyLogo from "../../assets/logo-sky-white.svg";

const Footer = () => {
    return (
        <container>
            <ContainerFooter>
                <container className="container" style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <SkyGrayFigure>
                        <img src={graySkyLogo} alt="Gray Logo Sky" title="Gray Logo Sky"/>
                    </SkyGrayFigure>
                    <ContainerSocialIcons></ContainerSocialIcons>
                </container>
            </ContainerFooter>
        </container>
    );
}

export default Footer;