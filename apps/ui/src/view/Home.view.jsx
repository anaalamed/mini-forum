import React from "react";
import styled from "styled-components";
import Post from "./Post.view"
import Hello from "./Hello.view"


const Home = () => {
  return (
    <Box>
        <Post/>
        <Post/>
    </Box>
  );
};
export default Home;

const Box = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  `;

