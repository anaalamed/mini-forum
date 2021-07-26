import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Title, Button } from '../../styles/global.styles';
import { logout } from '../../state/slices/users.slice'

const Profile = () => {
  const { me } = useSelector(state => state.users);
  const dispatch = useDispatch();
  return (
    <Box>
      <Title>My Profile</Title>

      {(Object.keys(me).length === 0) ?
        (<a href="/login">Log In</a>) :
        (<Section>
          <label>Name:</label>
          <h3>{me.firstName} </h3>

          <label>Last Name:</label>
          <h3>{me.lastName}</h3>
          {/* <br></br> */}

          <label>Email: </label>
          <h3>{me.email}</h3>
          {/* <br></br> */}

          <label>Role: </label>
          <h3>{me.role}</h3>
          {/* <br></br> */}

          <Button>Edit Profile... ? </Button>
          <Button onClick={() => dispatch(logout())}>Log Out</Button>
        </Section>)
      }
    </Box>
  )
}

export default Profile;

const Box = styled.div`

`;

const Section = styled.div`
  background-color: #EDFFEF;
  width: 65%;
  margin-left: 17.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 1rem;

    h3 {
      color: midnightblue;
      padding: 1rem;

    }

`;





