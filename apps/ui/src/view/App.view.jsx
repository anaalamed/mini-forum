import React from "react";
import styled from "styled-components";
import Home from "./Home.view";
import Comment from "./Comments.view";
import SignUp from "./SignUp.view";
import LogIn from "./LogIn.view";
import NoMatch from "./NoMatch.view";
import { colors } from "../styles/colors";
import { useRoutes } from 'hookrouter';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Post from "./Post.view";

const routes = {
    '/': () => <Home />,
    '/post/:postId': (postId) => <Post id={postId} />,
    '/post/:postId/comments': () => <Comment />,
    '/signup': () => <SignUp />,
    '/login': () => <LogIn />
};


const App = () => {
    const routeResult = useRoutes(routes);

    return (
        <Router>
            <Box>
                <h1>Mini Forum</h1>

                {/* <Post id={postId}/> */}

                <Menu>
                    <A href="/">Home</A>
                    <A href="/api/me">Me</A>
                    {/* <A href=""></A> */}
                    {/* <A href=""></A> */}

                    <A href="signup">SignUp</A>
                    <A href="login">Log In</A>

                </Menu>
            </Box>
            {routeResult || <NoMatch />}
        </Router>

    )

};
export default App;

const Box = styled.div`
  justify-content: center;
  align-items: center;
`;

const A = styled.a`
    color: black;
    background: white;
    padding: 0.5rem;
    margin: 1rem;
    text-decoration: none;
    border-radius: 10%;
`;

const Menu = styled.div`
    display: flex;
    background: #0c0c27;
    justify-content: space-between;
`



