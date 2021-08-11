import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    overflow: scroll;
    overflow-x: hidden;
  }

  body {
	margin: 0;
	padding: 0;
	font-family: "Poppins", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
  background: ${(props: any) => props.theme.backgroundColor};
  overflow-x: hidden;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  input,
  button,
  a {
    color: ${(props: any) => props.theme.mainTextColor};
  }

  .field-error {
    position: absolute;
    color: red;
    width: 100%;
    font-size: 10px;
    text-align: right;
    padding-top: 2px;
    text-transform: capitalize;
  }
`;

export default GlobalStyle;
export { GlobalStyle };
