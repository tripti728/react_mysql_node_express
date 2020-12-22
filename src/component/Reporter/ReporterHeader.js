import React from 'react'
import { Menu, Article, Add, Home, Logout, User } from 'grommet-icons'
import {
  Box,
  Grommet,
  Header,
  Nav,
  ResponsiveContext,
  DropButton,
  Button,
  Heading,
} from 'grommet'
import { grommet } from 'grommet/themes'
import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLog } from '../../action/action'

function ReporterHeader() {
  let dispatch = useDispatch()
  let history = useHistory()

  const logout = () => {
    sessionStorage.removeItem('user')

    dispatch(setLog(false))

    history.replace('/Login')
  }

  return (
    <Grommet theme={grommet}>
      <Header background='dark-1' pad='small'>
        <Box direction='row' align='center' gap='small'>
          <Article />
          <Heading size='small' level='4'>E-News</Heading>
        </Box>
        <ResponsiveContext.Consumer>
          {(responsive) =>
            responsive === 'small' ? (
              <DropButton
                icon={<Menu />}
                dropAlign={{ top: 'bottom', right: 'right' }}
                dropContent={
                  <Box
                    pad='large'
                    width='100vw'
                    background='light'
                    justify='center'
                  >
                    <NavLink
                      exact
                      to='/Reporter'
                      style={{ color: '#FFF', textDecoration: 'none' }}
                      activeStyle={{ fontWeight: 'bold', color: 'red' }}
                    >
                      <Home></Home>Home
                    </NavLink>
                    <NavLink
                      exact
                      to='/Reporter/AddNews'
                      style={{ color: '#FFF', textDecoration: 'none' }}
                      activeStyle={{ fontWeight: 'bold', color: 'red' }}
                    >
                      <Add></Add>Add News
                    </NavLink>
                    <NavLink
                      exact
                      to='/Reporter/Profile'
                      style={{ color: '#FFF', textDecoration: 'none' }}
                      activeStyle={{ fontWeight: 'bold', color: 'red' }}
                    >
                      <User></User>Profile
                    </NavLink>
                    <Button onClick={logout}>
                      <Logout></Logout>Logout
                    </Button>
                  </Box>
                }
              />
            ) : (
              <Nav direction='row'>
                <NavLink exact to='/Reporter' title='Home'>
                  <Home></Home>
                </NavLink>
                <NavLink exact to='/Reporter/AddNews'>
                  <Add></Add>
                </NavLink>
                <NavLink exact to='/Reporter/Profile'>
                  <User></User>
                </NavLink>
                <Button onClick={logout}>
                  <Logout></Logout>
                </Button>
              </Nav>
            )
          }
        </ResponsiveContext.Consumer>
      </Header>
    </Grommet>
  )
}

export default ReporterHeader
