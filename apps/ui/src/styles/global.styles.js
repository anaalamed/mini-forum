import styled from "styled-components";
import { createGlobalStyle} from "styled-components";

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

  h2 {
    color: white;
    font-size: 3rem;
  }

  button {
    margin: 1rem;
  }

  input { 
    /* width: 50%; */
    /* margin-right: 1rem; */
    padding: 0.6rem;
    /* border-radius: 1rem; */
  }

  A {
    color: white;
    letter-spacing: 0.2rem;
    text-decoration: none;
    text-transform: uppercase;
    /* font-size: 1.3rem; */
    padding: 1rem;
    &:hover {
      color: coral;
      transition: 1s;
    }
  }

  span {
    padding: 1rem;
  }

  .icon {
    &:hover {
      color: coral;
      transition: 1s;
    }
  }

`;

export default GlobalStyles;

export const Title = styled.div`
    background: #EDFFEF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    border: 2px solid midnightblue;
    font-size: 3rem;
    color: midnightblue;
    text-shadow: 2px 2px 10px;
    font-family: cursive;
    &:hover {
      background: #FFFFFF;
      transition: 0.1s;
    }
`;

export const Button = styled.button`
  background: linear-gradient(to bottom, midnightblue 0%, thistle 100%);
  padding: 1rem;
  color: white;
  font-family: cursive;
  font-size: 2rem;
  border-radius: 1rem;
  margin: 0;
  position: relative;
  left: 50%;
  transform: translate(-50%, 15%);
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;