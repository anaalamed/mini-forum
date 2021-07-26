import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux"
import { deleteComment } from "../state/slices/posts.slice"
import { Title, Button, Row } from '../styles/global.styles';
import AddComment from './AddComment.view';
import { AiFillDelete } from 'react-icons/ai';



const Comments = ({ postId }) => {
  const dispatch = useDispatch();
  // const { comments, isLoading } = useSelector(state => state.comments);
  const { comments } = useSelector(state => state.posts.posts.find(post => post._id === postId));
  console.log(comments);

  const { me, loggedIn } = useSelector(state => state.users);

  // useEffect(() => {
  //   dispatch(getComments(postId));
  // }, [postId]);

  // if (isLoading) return <h1>Loading data...</h1>;

  return (
    <>
      {/* <Title>Comments</Title> */}
      {(loggedIn) ? (<AddComment postId={postId} />) : null}

      {(comments?.map(comment =>
        <Comment>
          <Row>
            <h3>{comment.content}</h3>

            {(comment.user === me._id) ?
              (<p onClick={() => dispatch(deleteComment({ id: comment._id, user: me._id, postId }))}><AiFillDelete /></p>) : null
            }
          </Row>
          <Row>
            <p>{comment.username}</p>
            <p>{comment.created.substring(0, 10)} {comment.created.substring(11, 16)}</p>
          </Row>

        </Comment>
      ))}

    </>

  );
};
export default Comments;


const Comment = styled.div`
      width: 55%;
      padding: 1rem;
      background: #ebebf9;
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      // align-items: center;
      border: 2px solid blue;
      border-radius:10px;
      &:hover {
        background: #c4c4ed;
        transition: 0.1s;
      }
      margin: 10px;
      /* margin-left: 17.5%; */
  `;

// const Row = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   `;

