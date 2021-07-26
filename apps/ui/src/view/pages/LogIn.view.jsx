import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useForm } from 'react-hook-form';
import { navigate } from "hookrouter";
import { login } from '../../state/slices/users.slice';
import { Title, Button } from '../../styles/global.styles';


const LogIn = () => {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector(state => state.users);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    dispatch(login(data));
  }

  return (
    <Box>
      <Title>Log In</Title>
      <br></br>

      <Form onSubmit={handleSubmit(onSubmit)} >
        <label>Email: </label>
        <Input
          name="email"
          placeholder="Email"
          {...register('email', { required: true, minLength: 8 })}
        ></Input>
        <br></br>

        <label>Password: </label>
        <Input
          name="password"
          type='password'
          placeholder="Password"
          {...register('password', { required: true, minLength: 6 })}
        ></Input>
        <br></br>
        <Button>Log In</Button>
      </Form>

      {(loggedIn) ? (navigate('/me')) : null}
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


const Input = styled.input`
  background: ${({ error_styled }) => (error_styled ? "pink" : "white")};
  width: 100%;
  font-size: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  font-family: Arial;
`;

