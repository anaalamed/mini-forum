import React from "react";
import styled from "styled-components";
import Home from "./Home.view";
import SignUp from "./SignUp.view";
import LogIn from "./LogIn.view";
import NoMatch from "./NoMatch.view";
import {colors} from "../styles/colors"

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


const Links = () => (
    <Nav>
        <li>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="wrong">Wrong</StyledLink>
        </li>
    </Nav>
);

const App = () => (
    <Router>
        <Box>
            <h1>Mini Forum</h1>
            <Menu>
                <Links />
                <Bar>
                    <StyledLink to="signup">SignUp</StyledLink>
                    <StyledLink to="login">LogIn</StyledLink>
                </Bar>
            </Menu>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={LogIn} />                
                <Route component={NoMatch} />
            </Switch>
        </Box>
    </Router>

);
export default App;

const Box = styled.div`
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
    color: black;
    background: white;
    padding 0.5rem;
    margin: 1rem;
    text-decoration: none;
    border-radius: 10%;
`;

const Menu = styled.div`
    display: flex;
    background: #0c0c27;
    justify-content: space-between;
`

const Bar = styled.div`
    display: flex;
`

const Nav = styled.ul`
  display: flex;
  list-style-type: none;
  font-family: "Yanone Kaffeesatz";
  font-weight: 400;
  font-size: 1.5rem;
  width: 15rem;
  justify-content: space-between;
`;