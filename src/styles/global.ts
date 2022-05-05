import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
    font: 400 16px Roleway, sans-serif;
  }


  input, button {
    font-family: 'Roleway', sans-serif;
    font-size: 1.32rem;
  }

  button {
    cursor: pointer;
    border: none;
  }

  h1 {
    color:  ${props => props.theme.colors.text};
    font-family: 'Playfair Display', sans-serif;
    font-size: 4.44rem;
  }

  img {
    width: 100%;
  }

  ul {
    list-style: none;
  }

  a {
    color:  ${props => props.theme.colors.text};
    text-decoration: none;
  }

  button.contained {
    font-family: Raleway, sans-serif;
    font-size: 1.312rem;
    font-weight: 900;
    line-height: 1.56rem;

    padding: 1.25rem;
    color: ${theme.colors.primary};
    background-color: ${theme.colors.secondary};
  }

  button.outlined {
    font-family: Raleway, sans-serif;
    font-size: 1.312rem;
    font-weight: 900;
    line-height: 1.56rem;

    padding: 1.25rem;
    color: ${theme.colors.secondary};
    border: 2px solid ${theme.colors.secondary};
    background-color: ${theme.colors.primary};
  }

`;
