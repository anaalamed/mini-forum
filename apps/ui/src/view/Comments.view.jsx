import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux"
// import { comment } from "../state/posts.slice"


const Post = (post) => {
    // const dispatch = useDispatch();
    // const {} = useSelector(state => posts.state);
    //onClick={() => dispatch(comment())}
    return (
        <Box>
            <Message>Comments</Message>
        </Box>

    );
};
export default Post;


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
  `;

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
  `