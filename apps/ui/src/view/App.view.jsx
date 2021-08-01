import React, { useEffect } from "react";
import { useRoutes, A } from 'hookrouter';
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { getComments } from '../state/slices/posts.slice'

import Home from "./pages/Home.view";
import Comments from "./Comments.view";
import SignUp from "./pages/SignUp.view";
import LogIn from "./pages/LogIn.view";
import NoMatch from "./NoMatch.view";
import Profile from "./pages/Profile.view";
import SinglePost from "./pages/SinglePost.view";
import Users from "./pages/Users.view";

const routes = {
    '/': () => <Home />,
    '/signup': () => <SignUp />,
    '/login': () => <LogIn />,
    '/me': (userId) => <Profile id={userId} />,
    '/users': () => <Users />,
    '/post/:postId': ({ postId }) => <SinglePost postId={postId} />,
    '/post/:postId/comments': ({ postId }) => <Comments postId={postId} />,
    '/user/:userId': ({ userId }) => <Profile id={userId} />
};


const App = () => {
    const dispatch = useDispatch();
    const routeResult = useRoutes(routes);
    const { loggedIn, me } = useSelector(state => state.users);
    const { posts, isLoading } = useSelector(state => state.posts);

    useEffect(() => {
        posts.map(post => dispatch(getComments(post._id)));
    }, []);


    return (
        <Router>
            <Box>
                <h1>Mini Forum</h1>
                <Menu>
                    <div>
                        <A href="/">Home</A>
                        <A href="/users">Users</A>
                    </div>

                    {(loggedIn === true) ?
                        <A href="/me">Hey, {me.firstName}</A> :
                        <div>
                            {/* <A href="/me">Me</A> */}
                            <A href="/me">Hey, guest</A>
                            <A href="/signup">Sign Up</A>
                            <A href="/login">Log In</A>
                        </div>
                    }
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

const Menu = styled.div`
    display: flex;
    background: #0c0c27;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
`



