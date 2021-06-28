import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux"
// import { comment } from "../state/posts.slice"

const Comment = (post) => {
  // const dispatch = useDispatch();
  //onClick={() => dispatch(comment())}
  const { data, isLoading } = useSelector(state => state.posts);
  console.log(data);


  if (isLoading) return <h1>Loading data...</h1>;

  return (
    <>
      <Message>Comments</Message>
      <Box>
        {data.map((p) => (
          (p.comments)
        ))}
      </Box>
    </>

  );
};
export default Comment;


const Box = styled.div`
      width: 65%;
      background: #ebebf9;
      display: flex;
      flex-direction: column;
      justify-content: center;
      // align-items: center;
      border: 2px solid blue;
      border-radius:10px;
      &:hover {
        background: #c4c4ed;
        transition: 0.1s;
      }
      margin: 10px;
      margin-left: 17.5%;
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