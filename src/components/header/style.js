import styled from 'styled-components';

export const ContainerHeader = styled.div`
  width: 100%;
  height: 70px;
  background-color: var(--background-dark);
  border-bottom: 1px solid var(--color-gray);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FigureLogo = styled.figure`
    width: 100px;
    height: 40px;
    cursor: pointer;
    margin-right: 50px;
`;

export const ContainerHeaderButtons = styled.div`
  width: 28px;
  height: 28px;
  background-color: var(--background-white);
  border-radius: 100%;
  margin-right: 8px;
  margin-left: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 0.9em;
  font-weight: bold;
  letter-spacing:-1px;
  color: var(--color-gray);
  padding: 5px;
  cursor: pointer;
`;

export const ContainerPlayButton = styled.div`
  width: 80px;
  height: 28px;
  margin-left: 60px;
  display:flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.1em;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: var(--color-gray);
  cursor: pointer;
`;

export const FigurePlayButton = styled.div`
  width: 28px;
  height: inherit;
  margin-right: 5px;
  padding: 5px;
`;

export const ContainerLogin = styled.div`
  width: 90px;
  height: 28px;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1em;
  margin-right: 10px;
  cursor: pointer;
`;

export const FigureIconLogin = styled.figure`
  width: 28px;
  height: 28px;
  margin-right: 10px;
  padding: 2px;
`;

export const FigureSearchButton = styled.figure`
  width: 28px;
  height: 28px;
  padding: 2px;
  cursor: pointer;
`;