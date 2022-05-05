import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roleway, sans-serif;
  }

  h1 {
    color:  ${props => props.theme.colors.text};
    font-family: 'Playfair Display', serif;
    font-size: 4.44rem;
    width: 600px;
  }

`;
