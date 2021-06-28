import React from "react";
import styled from "styled-components";

const LogIn = () => {
    return (
        <Box>
            <Message>Log In</Message>
            <br></br>

            <Form>
                <label>Email: </label>
                <Input
                    name="email"
                    placeholder="Email"
                ></Input>
                <br></br>

                <label>Password: </label>
                <Input
                    name="password"
                    type='password'
                    placeholder="Password"
                ></Input>
                <br></br>
            </Form>



        </Box>
    )
}

export default LogIn;

const Box = styled.div`

`;

const Form = styled.form`
  width: 65%;
  margin-left: 17.5%;
  background: #EDFFEF;
  padding: 2rem;
  border-radius: 1rem;
  border: 3px solid midnightblue;
  &:hover {
        /* filter: brightness(90%); */
        background: #FFFFFF;
        transition: 0.1s;
    }
`;


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

const Input = styled.input`
  background: ${({ error_styled }) => (error_styled ? "pink" : "white")};
  width: 100%;
  font-size: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  font-family: Arial;
`;

const Button = styled.button`
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