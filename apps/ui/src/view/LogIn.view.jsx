import React from "react";
import styled from "styled-components";

const LogIn = () => {
return (
    <Box> 
        <Message>Log In</Message>

        <form>
            <label for="email">Email: </label><input class="email" type="email"></input><br/>
            <label for="password">Password: </label><input class="password" type="password"></input><br/>
            <button class="submit">Log in</button>
        </form>


    </Box>
)
}

export default LogIn;

const Box = styled.div`
    width: 65%;
    background: #ebebf9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid blue;
    border-radius:10px;
    &:hover {
        background: #c4c4ed;
        transition: 0.1s;
    }
     margin-left: 17.5%;
`;

const Form = styled.form`

`;


const Message = styled.div`
  font-size:3rem;
`;