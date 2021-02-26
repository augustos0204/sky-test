import styled from 'styled-components';

export const ContainerFooter = styled.div`
    width: 100%;
    min-height: 20px;
    height: auto;
    background-color: var(--background-dark);
    bottom: 0;
    border-top: 1px solid var(--color-gray);
`;

/* Container da barra com as redes sociais. */
export const SocialBar = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid var(--color-gray);
    margin-bottom: 20px;
`;

export const SkyGrayFigure = styled.figure`
    width: 100px;
    height: 40px;
    filter: invert(60%);
`;

export const ContainerSocialIcons = styled.div`
    width: 200px;
    height: 40px;
    margin-left: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const FigureSocialIcon = styled.figure`
    width: 40px;
    height: 40px;
    margin-left: 5px;
    margin-right: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px;
    filter: invert(30%);
`;

/* Container da barra com os links */
export const ContainerSobreBar = styled.div`
    width: 100%;
    min-height: 20px;
    height: auto;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const ContainerApp = styled.div`
    width: 300px;
    min-height: 150px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AnuncioApp = styled.div`
    width: 100%;
    min-height: 2px;
    height: auto;
    display: flex;
`;

export const LogoApp = styled.figure`
    width: 55px;
    height: 50px;
    margin-right: 20px;
`;

export const ContainerTitleApp = styled.div`
    width: 250px;
    min-height: 0px;
    height: auto;
    align-items: center;
    font-size: 1.1em;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    margin-bottom: 10px;
    filter: invert(30%);
`;

export const FigureAppStore = styled.figure`
    width: 160px;
    height: 60px;
    margin-bottom: 5px;
    filter: invert(30%);
`;

export const ContainerTopics = styled.div`
    max-width: 480px;
    min-height: 5px;
    height: auto;
    margin-left: auto;
    display: flex;
    flex-flow: row wrap;
`;

export const Topic = styled.div`
    width: 230px;
    min-height: 150px;
    margin-bottom: 20px;
`;

export const TitleTopic = styled.div`
    width: 100%;
    min-height: 1ch;
    height: auto;
    font-family: Arial, Helvetica, sans-serif;
    color: var(--color-gray);
    font-weight: bold;
    font-size: 1.1em;
    margin-bottom: 15px;
`;

export const LinksTopic = styled.div`
    width: 100%;
    min-height: 1ch;
    height: auto;
    font-family: Arial, Helvetica, sans-serif;
    color: var(--color-gray);
    font-size: 1.0em;
    margin-bottom: 15px;
`;

export const ContainerAtalhosRapidos = styled.div`
    width: 100%;
    height: 50px;
    font-size: 1.0em;
    background-color: var(--background-white);
`;

export const AtalhoRapido = styled.div`
    color: var(--color-gray);
    font-weight: bold;
    font-size: 1.0em;
    margin-left: 10px;
    margin-right: 10px;
`;

export const ContainerCopyright = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    color: var(--color-gray);
    font-size: 1.1em;
`;