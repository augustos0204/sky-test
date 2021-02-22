import React from "react";
import { useHistory, useEffect } from "react-router-dom";
import { 
    ContainerHeader,
    FigureLogo,
    ContainerHeaderButtons,
    ContainerPlayButton,
    FigurePlayButton,
    ContainerLogin,
    FigureIconLogin,
    FigureSearchButton
 } from "./style";
import skyLogo from "../../assets/logo-sky.svg";
import darkModeLogo from "../../assets/dark-mode.svg";
import playIcon from "../../assets/play-button.svg";
import userIcon from "../../assets/user.svg";
import searchIcon from "../../assets/loupe.svg";

const Header = () => {
    const History = useHistory();

    const redirectHome = () => {
        History.push("/");
    }

    return (
        <container>
            <ContainerHeader>
                <container className="container" style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <FigureLogo id="FigureLogo" onClick={redirectHome}>
                        <img src={skyLogo} alt="Sky Logotipo" title="Sky Logotipo"/>
                    </FigureLogo>
                    <ContainerHeaderButtons>
                        <img src={darkModeLogo} alt="Dark-mode icon" title="Dark-mode icon"/>
                    </ContainerHeaderButtons>
                    <ContainerHeaderButtons>
                        A-
                    </ContainerHeaderButtons>
                    <ContainerHeaderButtons>
                        A+
                    </ContainerHeaderButtons>
                    <ContainerPlayButton>
                        <FigurePlayButton>
                            <img src={playIcon} alt="Search Icon" title="Search icon"/>
                        </FigurePlayButton>
                        Play
                    </ContainerPlayButton>
                    <ContainerLogin>
                        <FigureIconLogin>
                            <img src={userIcon} alt="User Icon" title="User Icon"/>
                        </FigureIconLogin>
                        Entrar
                    </ContainerLogin>
                    <FigureSearchButton>
                        <img src={searchIcon} alt="Search Icon" title="Search Icon"/>
                    </FigureSearchButton>
                </container>
            </ContainerHeader>
        </container>
    );
}

export default Header;