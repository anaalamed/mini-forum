import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
  background: #252574
  }

  h1 {
    color: white;
    text-align: center;
    margin: 1rem;
  font-family: cursive;
  font-size: 3rem;

  }

  button {
    margin: 1rem;
  }

  input { 
    width: 80%;
    margin-right: 1rem;
    padding: 0.6rem;
    // border-radius: 1rem;
  }
`;

export default GlobalStyles;
