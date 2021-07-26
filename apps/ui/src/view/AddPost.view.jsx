import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPostAsync } from '../state/slices/posts.slice';
import { MdAdd } from 'react-icons/md';


const AddPost = ({ userId, username }) => {
    const [value, setValue] = useState("");

    const dispatch = useDispatch();

    const onSubmitForm = (event) => {
        event.preventDefault();
        // console.log(username);
        dispatch(addPostAsync({ content: value, user: userId, username }));
        setValue("");
    };


    return (
        <Main>
            <Form onSubmit={onSubmitForm}>
                {/* <label>Your Post</label> */}
                <Input
                    type="text"
                    placeholder="Add your post..."
                    onChange={(event) => setValue(event.target.value)}
                    value={value}>
                </Input>
                <Button type="submit" ><h2><MdAdd /></h2></Button>
            </Form>
        </Main>
    )
}

export default AddPost
    ;

const Main = styled.div`
    width: 55%;
    padding: 3rem 0;
    margin: 0 auto;
    /* border-radius: 1rem; */
`;

const Form = styled.form`
    display: flex;
`;


const Input = styled.input`
    width: 100%;
    padding-left: 2rem;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    ::placeholder {
        letter-spacing: 0.5rem;
    }

`;

const Button = styled.button`
    width: 10rem;
    margin-left: 0;
    margin: 0 auto;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    background-color: #0c0c27;
`;