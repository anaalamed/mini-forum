import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux"
import { clicked } from "../state/hello.slice"


const Hello = () => {
    const hello = useSelector(state => state.hello)
    const dispatch = useDispatch();
    return (
        <Box>
            <button onClick={() => dispatch(clicked('Hello There!'))}>Click Here!</button>
            <p>{hello}</p>
        </Box>
    );
};
export default Hello;



const Box = styled.div`
    display: flex;  
    justify-content: center;
    align-items: center;
`;
