import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { navigate } from "hookrouter";
import { AiFillDelete, AiFillLike, AiOutlineComment } from 'react-icons/ai';
import { FiMoreVertical } from 'react-icons/fi';
import { Row } from '../styles/global.styles';
import { deletePostAsync, getComments, addLike, deleteComment } from '../state/slices/posts.slice';


const Post = ({ postData, single }) => {
  const post = postData;
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.posts);
  const { comments, likes } = useSelector(state => state.posts.posts.find(item => item._id === post._id));
  const { me } = useSelector(state => state.users);
  const link = 'post/' + post._id;

  // delete all comments of the post and then delete the post! 
  const handleDelete = () => {
    post.comments.map(comment => dispatch(deleteComment({ id: comment._id, user: me._id, postId: post._id })));
    dispatch(deletePostAsync({ _id: post._id, user: me._id }));
  }

  const handleLike = () => {
    console.log('VOOO');
    dispatch(addLike({ id: post._id, likes: post.likes, user: me._id }));
  }

  if (isLoading) return <h1>Loading data...</h1>;
  return (
    <Box>
      <Row>
        <Content>{post.content}</Content>
        <span>
          {(me._id === post.user) ?
            <Button onClick={handleDelete}><AiFillDelete /></Button> :
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

      <div>
        <span onClick={handleLike}><AiFillLike /> {likes}</span>
        <AiOutlineComment /> {comments?.length}
      </div>

      <br></br>
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




