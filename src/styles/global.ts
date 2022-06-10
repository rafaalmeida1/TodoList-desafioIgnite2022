import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #454545;

        --purple: #8284fa;
        --purple-dark: #5e60ce;
        --blue: #4ea8de;
        --blue-dark: #1e6f9f;

        --gray-700: #0d0d0d;
        --gray-600: #1a1a1a;
        --gray-500: #262626;
        --gray-400: #333333;
        --gray-300: #808080;
        --gray-200: #d9d9d9;
        --gray-100: #f2f2f2;

        --danger: #e25858;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body,html{
        font-family: 'Inter', sans-serif;
        font-size: 16px;
    }

    body {
        background: var(--gray-600);
    }

    h1,h2,h3,h4,h5,h6{
        font-family: 'Inter', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;