import React from 'react'
import { Menu, Article, Add, Home, Login,UserAdd, Logout} from 'grommet-icons';
import {
  Anchor,
  Box,
  Grommet,
  Header,
  Nav,
 
  ResponsiveContext,
  DropButton,
  Button,
} from 'grommet';
import { grommet } from 'grommet/themes';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLog } from '../action/action';
export default function AdminHeader() {
    let dispatch=useDispatch();
    let history=useHistory();
    const logout=()=>{
        sessionStorage.removeItem('user');
        
        dispatch(setLog(false));
        
        history.replace('/Login')
      }
    return (
        <Grommet theme={grommet}>
    <Header background="dark-1" pad="medium">
      <Box direction="row" align="center" gap="small">
        <Article />
      </Box>
      <ResponsiveContext.Consumer>
        {(responsive) =>
          responsive === "small" ? (
           
            <DropButton
            icon={<Menu />}
              dropAlign={{ top: "bottom", right: "right" }}
              dropContent={<Box pad="large" width="100vw" background="light" justify="center">
              
              <NavLink exact to='/Admin'  style={{ color: '#FFF', textDecoration: 'none' }} activeStyle={{fontWeight: "bold",color: "red"}}><Home></Home>Home</NavLink>
              {/* <NavLink exact onClick={logout}  style={{ color: '#FFF', textDecoration: 'none' }} activeStyle={{fontWeight: "bold",color: "red"}}><Logout></Logout>Logout</NavLink> */}
               <Button onClick={logout}><Logout></Logout>Logout</Button>
               
               
              </Box>}
            />
          ) : (
            <Nav direction="row">
                <NavLink exact to='/Admin' title='Home' ><Home></Home></NavLink>
                <Button onClick={logout}><Logout></Logout></Button>
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  </Grommet>
    )
}
