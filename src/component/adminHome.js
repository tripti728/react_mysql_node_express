import React, { useState } from 'react';


import { Avatar, Button, Box, grommet, Grommet, Nav, Sidebar ,Text, Anchor} from 'grommet';

import {
  Analytics,
  Chat,
  Clock,
  Configure,
  Help,
  Projects,
  StatusInfoSmall,
  UserAdmin,
  Article,
  UserNew,
  
} from 'grommet-icons';
import { Tip } from 'grommet/components/Tip';
import AdminNav from '../Route/AdminNav';
import { Navi } from '../Route/Navi';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Circle = ({ ...rest }) => (
    <Box
      animation={['fadeIn', 'pulse']} // double animation
      round="full"
      background="linear-gradient(102.77deg, #FD6FFF -9.18%, #ffdde2 209.09%)"
      {...rest}
    />
  );

let role=localStorage.getItem('role');
const SidebarHeader = () => (
  <Avatar
    border={{ size: 'small', color: 'accent-2' }}
    background="white"
    flex={false}
  >
    
    <Tip
          plain
          dropProps={{ align: { left: 'right' } }}
          content={
            <Box align="start" margin={{ bottom: 'xlarge' }} pad="xsmall">
              <Circle margin={{ left: 'large' }} pad="small">
                Admin
              </Circle>
              <Circle margin={{ left: 'medium' }} pad="small" />
              <Circle pad="xsmall" />
            </Box>
          }
        >
          <Button icon={<UserAdmin color="accent-1" size="large" />} />
        </Tip>
    
  </Avatar>
);

// const SidebarFooter = () => (
//   <Nav gap="small">
//     <Button icon={<Chat />} />
//     <Button icon={<Help />} />
//   </Nav>
// );

const MainNavigation = () => (
  <Nav gap="small">
    
   <Link to='/Admin/AdminNews'><Article /></Link>
  <Link to='/Admin/accept'><UserNew /></Link>
    <Box pad="small" border={{ color: 'white', side: 'bottom' }} />
    <Box gap="small" pad={{ vertical: 'medium' }}>
      <Button icon={<Analytics />} />
      <Button icon={<Configure />} />
    </Box>
  </Nav>
);


export const AdminHome = () => {
  let selector=useSelector(state=>state.islogged);
  let history=useHistory();
  console.log(selector)
  if(selector===true)
  {
    return(
      <Box direction="row" height={{ min: '100%' }}>
      <Sidebar
        background="accent-1"
        header={<SidebarHeader />}
      //   footer={<SidebarFooter />}
      >
        <MainNavigation />
      </Sidebar>
      <AdminNav></AdminNav>
    </Box>
    )
  }
  else{
    history.replace('/Login')
  }
  
};
