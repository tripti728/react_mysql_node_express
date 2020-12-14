import React from 'react'
import { Menu, Article, Add, Home, Login,UserAdd} from 'grommet-icons';
import {
  Anchor,
  Box,
  Grommet,
  Header,
  Nav,
 
  ResponsiveContext,
  DropButton,
} from 'grommet';
import { grommet } from 'grommet/themes';
import { NavLink } from 'react-router-dom';

function ReporterHeader() {
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
                  
                  <NavLink exact to='/'  style={{ color: '#FFF', textDecoration: 'none' }} activeStyle={{fontWeight: "bold",color: "red"}}><Home></Home>Home</NavLink>
                <NavLink exact to='/Login' style={{ color: '#FFF', textDecoration: 'none' }} activeStyle={{fontWeight: "bold",color: "red"}}><Login></Login>Login</NavLink>
                <NavLink exact to='/Signup' style={{ color: '#FFF', textDecoration: 'none' }}  activeStyle={{fontWeight: "bold",color: "red"}}><UserAdd></UserAdd>Signup</NavLink>
                   
                  </Box>}
                />
              ) : (
                <Nav direction="row">
                    <NavLink exact to='/' title='Home' ><Home></Home></NavLink>
                <NavLink exact to='/Login' title='Login'><Login></Login></NavLink>
                <NavLink exact to='/Signup' title='Signup'><UserAdd></UserAdd></NavLink>
                </Nav>
              )
            }
          </ResponsiveContext.Consumer>
        </Header>
      </Grommet>
    )
}

export default ReporterHeader
