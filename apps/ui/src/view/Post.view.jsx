import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Row } from '../styles/global.styles';
import { deletePostAsync, getComments } from '../state/slices/posts.slice';
import { AiFillDelete } from 'react-icons/ai';
import { FiMoreVertical } from 'react-icons/fi';
import { navigate } from "hookrouter";
// import { getComments, deleteComment } from "../state/slices/comments.slice"


const Post = ({ postData, single }) => {
  const post = postData;
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.posts);
  const { comments } = useSelector(state => state.posts.posts.find(item => item._id === post._id));
  const { me } = useSelector(state => state.users);
  const link = 'post/' + post._id;

  useEffect(() => {
    dispatch(getComments(post._id));
  }, []);

  if (isLoading) return <h1>Loading data...</h1>;
  return (
    <Box>
      <Row>
        <Content>{post.content}</Content>
        <span>
          {(me._id === post.user) ?
            <Button onClick={() => dispatch(deletePostAsync({ _id: post._id, user: me._id }))}><AiFillDelete /></Button> :
            null
          }

          {(single !== true) ?
            (<Button onClick={() => navigate(`${link}`)}><FiMoreVertical /></Button>) :
            null}
        </span>
      </Row>

      <Row>
        <Author>{post.username}</Author>
        <p>{post.created.substring(0, 10)} {post.created.substring(11, 16)}</p>
      </Row>

      <Row>
        <div>
          <p>Comments: {comments?.length}</p>
          <p>Likes:</p>
        </div>
      </Row>

      {/* <Button>Comments: {post.comments?.length}</Button> */}
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
      /* align-items: center; */
      border: 2px solid blue;
      border-radius:10px;
      &:hover {
        background: #c4c4ed;
        transition: 0.1s;
      }
      margin: 10px;
  `;

const Button = styled.button`
  background-color: #0c0c27;
  color: white;
  border-radius: 0.5rem;  
  padding: 0.5rem;
  `


const Content = styled.p`
  font-size: 2rem;
  color: #242475;
  font-weight: bold;
  padding: 1rem;
  font-family: "Yanone Kaffeesatz";
   margin: 0;
  `;

const Author = styled.div`
font-size: 1rem;
padding-left: 1rem;
`;




