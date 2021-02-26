import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /*CSS GLOBAL DA PÁGINA*/

    :root{
        /* CORES PRIMÁRIAS */
        --primary: #EA5D5C;
        --primary-light: #FF8F89;
        --primary-dark: #B22932;

        --text-on-primary: #000000;
        --color-gray: #75767B;

        --background-dark: #F2F2FC;
        --background-white: #FFFFFF
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
    }

    img{
        width: 100%;
        height: 100%;
    }

    a{
        text-decoration: none;
        color: #FFFFFF;
    }

    .container{
        width: 1200px;
        min-height: 10px;
        height: auto;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
`;