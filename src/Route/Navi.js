import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {ULogin} from '../component/Login';
import { SignUp } from '../component/SignUp';
import { Box } from 'grommet';
import { adminHome, AdminHome } from '../component/adminHome';
import adminAccept from '../component/adminAccept';
import AdminNews from '../component/AdminNews';
import ContainLogin from '../container/containsign';
import AdminAccept from '../component/adminAccept';
import Home from '../component/Home';





export function Navi(props) {
  return (
    <Box height='100vh'>
    <Switch>
    <Route exact path="/" component={Home} /> 
  <Route path="/Login" component={ContainLogin}></Route>
  <Route path="/Signup" component={SignUp}></Route>
  <Route path="/Admin" component={AdminHome}></Route>
 

  </Switch>
  </Box>
  );
}
