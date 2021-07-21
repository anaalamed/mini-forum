import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux"
// import { comment } from "../state/posts.slice"

const Comments = ({ id }) => {
  // const dispatch = useDispatch();
  //onClick={() => dispatch(comment())}
  const { data, isLoading } = useSelector(state => state.posts);
  const post = data.find(post => post._id === id);
  // console.log(post);

  if (isLoading) return <h1>Loading data...</h1>;

  return (
    <>
      <Message>Comments</Message>
      {post.comments.map((p) => (
        <Comment>{(p)}</Comment>
      ))}
    </>

  );
};
export default Comments;


const Comment = styled.div`
      width: 65%;
      padding: 1rem;
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