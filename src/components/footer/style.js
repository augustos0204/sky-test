import styled from 'styled-components';

export const ContainerFooter = styled.div`
    width: 100%;
    min-height: 20px;
    height: auto;
    background-color: var(--background-dark);
    bottom: 0;
    border-top: 1px solid var(--color-gray);
`;

export const SocialBar = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const SkyGrayFigure = styled.figure`
    width: 100px;
    height: 40px;
    filter: invert(60%);
`;

export const ContainerSocialIcons = styled.div`
    width: 200px;
    height: 40px;
    background-color: red;
    margin-left: auto;
`;