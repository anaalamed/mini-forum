import React from "react";
import styled from "styled-components";
import Home from "./Home.view";
import Comments from "./Comments.view";
import SignUp from "./SignUp.view";
import LogIn from "./LogIn.view";
import NoMatch from "./NoMatch.view";
import Profile from "./Profile.view";

import { colors } from "../styles/colors";
import { useRoutes } from 'hookrouter';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Post from "./Post.view";
import SinglePost from "./SinglePost.view";


const routes = {
    '/': () => <Home />,
    '/post/:postId': ({ postId }) => <SinglePost id={postId} />,
    '/post/:postId/comments': ({ postId }) => <Comments id={postId} />,
    // '/comments': () => <Comments />,
    '/signup': () => <SignUp />,
    '/login': () => <LogIn />,
    '/me': () => <Profile />
};


const App = () => {
    const routeResult = useRoutes(routes);

    return (
        <Router>
            <Box>
                <h1>Mini Forum</h1>

                <Menu>
                    <A href="/">Home</A>
                    <A href="/me">Me</A>
                    <A href="signup">Sign Up</A>
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
    text-decoration: none;
    background: linear-gradient(to bottom, midnightblue 0%, thistle 100%);
    padding: 1rem;
    color: white;
    font-family: cursive;
    font-size: 1rem;
    border-radius: 1rem;
`;

const Menu = styled.div`
    display: flex;
    background: #0c0c27;
    justify-content: space-between;
    padding: 1rem;
`



