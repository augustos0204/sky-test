import React from "react";
import {
    ContainerFooter,
    SkyGrayFigure,
    ContainerSocialIcons,
    FigureSocialIcon,
    SocialBar,
    ContainerSobreBar,
    ContainerApp,
    AnuncioApp,
    LogoApp,
    ContainerTitleApp,
    FigureAppStore,
    ContainerTopics,
    Topic,
    TitleTopic,
    LinksTopic,
    ContainerAtalhosRapidos,
    AtalhoRapido,
    ContainerCopyright
} from "./style";

import graySkyLogo from "../../assets/logo-sky-white.svg";
import facebookLogo from "../../assets/facebook.svg";
import twitterLogo from "../../assets/twitter.svg";
import youtubeLogo from "../../assets/youtube.svg";
import instagramLogo from "../../assets/instagram.svg";
import skyAppLogo from "../../assets/LogoAppSKY.png";
import appStoreAppLogo from "../../assets/app-store.svg";
import googlePlayAppLogo from "../../assets/google-play.svg";

const Footer = () => {
    return (
        <container>
            <ContainerFooter>
                <SocialBar>
                    <container className="container" style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <SkyGrayFigure>
                            <img src={graySkyLogo} alt="Gray Logo Sky" title="Gray Logo Sky"/>
                        </SkyGrayFigure>
                        <ContainerSocialIcons>
                            <FigureSocialIcon>
                                <img src={facebookLogo} alt="Facebook Logo" title="Facebook Logo"/>
                            </FigureSocialIcon>
                            <FigureSocialIcon>
                                <img src={twitterLogo} alt="twitter Logo" title="twitter Logo"/>
                            </FigureSocialIcon>
                            <FigureSocialIcon>
                                <img src={youtubeLogo} alt="Youtube Logo" title="Youtube Logo"/>
                            </FigureSocialIcon>
                            <FigureSocialIcon>
                                <img src={instagramLogo} alt="Instagram Logo" title="Instagram Logo"/>
                            </FigureSocialIcon>
                        </ContainerSocialIcons>
                    </container>
                </SocialBar>
                <ContainerSobreBar>
                    <container className="container" style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <ContainerApp>
                            <AnuncioApp>
                                <LogoApp>
                                    <img src={skyAppLogo} alt="Sky App Mobile Logo" title="Sky App Mobile Logo"/>
                                </LogoApp>
                                <ContainerTitleApp>
                                    Baixe no seu celular o app Minha SKY e divirta-se.
                                </ContainerTitleApp>
                            </AnuncioApp>
                            <FigureAppStore>
                                <img src={appStoreAppLogo} alt="App Store Link" title="App Store Link"/>
                            </FigureAppStore>
                            <FigureAppStore>
                                <img src={googlePlayAppLogo} alt="Google Play Link" title="Google Play Link"/>
                            </FigureAppStore>
                        </ContainerApp>
                        <ContainerTopics>
                            <Topic>
                                <TitleTopic>
                                    Sobre
                                </TitleTopic>
                                <LinksTopic>
                                    Nossa História
                                </LinksTopic>
                                <LinksTopic>
                                    Imprensa
                                </LinksTopic>
                                <LinksTopic>
                                    Prêmios Conquistados
                                </LinksTopic>
                                <LinksTopic>
                                    Credenciamento
                                </LinksTopic>
                                <LinksTopic>
                                    Trabalhe Conosco
                                </LinksTopic>
                                <LinksTopic>
                                    Promoção
                                </LinksTopic>
                            </Topic>
                            <Topic>
                                <TitleTopic>
                                    Nossas Responsabilidades
                                </TitleTopic>
                                <LinksTopic>
                                    Conselho aos usuários.
                                </LinksTopic>
                                <LinksTopic>
                                    Pesquisa Anatel
                                </LinksTopic>
                                <LinksTopic>
                                    Relatórios de transparência
                                </LinksTopic>
                                <LinksTopic>
                                    Acessibilidade
                                </LinksTopic>
                            </Topic>
                            <Topic>
                                <TitleTopic>
                                    Ajuda
                                </TitleTopic>
                                <LinksTopic>
                                    Central de ajuda
                                </LinksTopic>
                                <LinksTopic>
                                    Manuais
                                </LinksTopic>
                            </Topic>
                            <Topic>
                                <TitleTopic>
                                    SKY Empresas
                                </TitleTopic>
                            </Topic>
                        </ContainerTopics>
                    </container>
                </ContainerSobreBar>
                <ContainerAtalhosRapidos>
                    <container className="container" style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "15px 0"
                    }}>
                        <AtalhoRapido>Inicio</AtalhoRapido> |
                        <AtalhoRapido>Política de Privacidade</AtalhoRapido> |
                        <AtalhoRapido>Contratos gerais</AtalhoRapido> |
                        <AtalhoRapido>Contratos Pré-pago</AtalhoRapido> |
                        <AtalhoRapido>Cancelamento</AtalhoRapido> |
                        <AtalhoRapido>Ouvidoria</AtalhoRapido> |
                        <AtalhoRapido>Consumidor.gov</AtalhoRapido>
                    </container>
                </ContainerAtalhosRapidos>
                <ContainerCopyright>
                    <container className="container" style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}>
                        ® Todos os direitos reservados 2020. Todas as marcas SKY e qualquer propriedade intelectual inserida nelas são de propriedade da SKY Internacional AG e usadas pela SKY Serviços de Banda Larga LTDA. mediante licença.
                    </container>
                </ContainerCopyright>
            </ContainerFooter>
        </container>
    );
}

export default Footer;