import React from "react";
import styled from "styled-components";

const SignUp = () => {
return (
    <Message>Sign Up</Message>
)
}

export default SignUp;


const Message = styled.div`
  background: #EDFFEF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size:3rem;
  align-items:center;
  border: 2px solid pink;
  &:hover {
    background: #FFFFFF;
    transition: 0.1s;
  }
`;