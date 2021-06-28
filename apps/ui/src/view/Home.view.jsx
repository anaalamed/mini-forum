import React from "react";
import styled from "styled-components";
import Post from "./Post.view"
// import Hello from "./Hello.view"
// import {register} from '../api/auth.api';
import { useSelector } from "react-redux";

import { fpost } from "../api/posts.api" // fake



const Home = () => {
  const { data, isLoading } = useSelector(state => state.posts);

  if (isLoading) return <h1>Loading data...</h1>;

  return (
    <Box>
      {data.map((post) => (
        <Post key={post.id} {...post} />
      ))}

      {/* fake post */}
      {/* <Post {...fpost[0]} /> */}
    </Box>
  );

  const foo = (id) => {
    alert('clicked id: ', id);
  }
};
export default Home;

const Box = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

