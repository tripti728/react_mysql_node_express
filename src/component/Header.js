import React from 'react';
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

const Header = (props) => (
  
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
              
              <Anchor alignSelf="center" margin={"top","1vh"} title="Home" href="/" ><Home></Home>Home</Anchor>
              <Anchor alignSelf="center"  margin={"top","1vh"} title="Login" href="/Login" ><Login></Login>LogIn</Anchor>
              <Anchor alignSelf="center"  margin={"top","1vh"}  title="Signup" href="/Signup"><UserAdd></UserAdd>SignUp</Anchor>
               
              </Box>}
            />
          ) : (
            <Nav direction="row">
              <Anchor href="/" title="Home"><Home></Home></Anchor>
              <Anchor href="/Login" title="Login" ><Login></Login></Anchor>
              <Anchor href="/Signup" title="Signup"  ><UserAdd></UserAdd></Anchor>
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
 
);
