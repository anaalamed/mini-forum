import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
// import { comment } from "../state/posts.slice"


const SinglePost = ({ id }) => {
  // const dispatch = useDispatch();
  const { data, isLoading } = useSelector(state => state.posts);
  // let params = useParams();
  // console.log(id);
  // console.log(params);

  const post = data.find(post => post._id === id);
  // console.log(post);
  //onClick={() => dispatch(comment())}

  if (isLoading) return <h1>Loading data...</h1>;

  return (
    <Box>
      <Post>
        <Content>{post.content}</Content>
        {/* <p>{post._id}</p> */}

        <Data>
          <Author>{post.author}</Author>
          <span>{String(post.created).substr(0, 10) + '\xa0\xa0\xa0\xa0' + String(post.created).substr(11, 5)}</span>
        </Data>

        <PostData>
          <Button>Likes: {post.likes}</Button>
          <Button>
            <A href="/comments">Comments: {post.comments?.length}</A>

          </Button>
        </PostData>

        <Comment>
          <input type="text" placeholder="Your comment..." />
          <ComButton>Comment</ComButton>
        </Comment>
      </Post>
    </Box>

  );
};
export default SinglePost;


const A = styled.a`
    text-decoration: none;
    /* background: linear-gradient(to bottom, midnightblue 0%, thistle 100%); */
    /* padding: 1rem; */
    /* color: white; */
    /* font-family: cursive; */
    font-size: 1rem;
    /* border-radius: 1rem; */
`;

const Box = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

const Post = styled.div`
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
/* width: 50%; */
width: auto;
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

