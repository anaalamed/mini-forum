import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux"
// import { comment } from "../state/posts.slice"
import { fakePosts } from "../api/posts.api"
import postsSlice from "../state/posts.slice";




const Post = () => {
  const dispatch = useDispatch();
  // const {} = useSelector(state => posts.state);
  //onClick={() => dispatch(comment())}
  return (
      <Box>
          <Content>{fakePosts[0].content}</Content>
          <Data>
            <Author>{fakePosts[0].author}</Author>
            <span>{fakePosts[0].timeOfUpload}</span>
          </Data>

          <PostData>
            <Button>Likes: {fakePosts[0].likes}</Button>
            <Button>Comments: {fakePosts[0].comments.length}</Button>
          </PostData>

          <Comment>
              <input type="text" placeholder="Your comment..."/>
              <ComButton>Comment</ComButton>
          </Comment>
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

  const Content = styled.p`
  font-size: 2rem;
  color: #242475;
  font-weight: bold;
  padding: 1rem;
  font-family: "Yanone Kaffeesatz";
  margin: 0;
  `;

  const Data = styled.div`
  display: flex;
  justify-content: space-between;
  `;

const Author = styled.div`
font-size: 1rem;
padding-left: 1rem;
`;

const PostData = styled.div`
display: flex;
align-items: stretch;
`;


const Button = styled.button`
padding: 10px;
`

const Comment = styled.p`
width: 50%;
  padding: 10px;
  margin: 3px;
  background: #9d9de1;
  border: 1px solid #242475;
  &:hover {
    background: #FFFFFF;
    transition: 0.1s;
  }
  border-radius: 10px;
  font-family: "Yanone Kaffeesatz";
`;

const ComButton = styled.button`
padding: 10px;
margin: 0;
border: 1px solid #242475;
background: #242475;
color: white;
`

