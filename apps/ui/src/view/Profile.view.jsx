import React from "react";
import styled from "styled-components";

const NoMatch = () => {
    return (
        <Message>My Profile</Message>
    )
}

export default NoMatch;


const Message = styled.div`
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
    /* background: #FFFFFF; */
    transition: 0.1s;
  }
`;

