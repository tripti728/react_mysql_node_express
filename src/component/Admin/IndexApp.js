import React, { Component } from 'react'

import { BrowserRouter as Router, Switch } from 'react-router-dom'

import { Box, Grommet } from 'grommet'
import {
  UserAdmin as AdminIcon,
  Analytics as statisticIcon,
  UserAdd as requestIcon,
} from 'grommet-icons/icons'

import { theme } from '../../theme'
import { Sidebar } from './Sidebar'
import { NewsList } from './NewsList'
import { MostReadNewsStat } from './MostReadNewsStat'
import UserRequests from './UserRequests'
import FullNews from './FullNews'
import { useSelector } from 'react-redux'
import { GuardProvider, GuardedRoute } from 'react-router-guards'
const items = [
  {
    label: 'Most Read News',
    Icon: statisticIcon,
    path: '/MostReadNewsStat',
  },
  {
    label: 'News Reporter Requests',
    Icon: requestIcon,
    path: '/UserRequests',
  },
]

export function IndexApp() {
  const islogged = useSelector((state) => state.islogged)
  const requireLogin = (to, from, next) => {
    if (to.meta.auth) {
      if (islogged) {
        next()
      }
      next.redirect('/Login')
    } else {
      next()
    }
  }

  return (
    <Router>
      <Grommet theme={theme} full>
        <Box direction='row' fill>
          <Sidebar
            appIcon={<AdminIcon></AdminIcon>}
            appName='Admin'
            items={items}
          />
          <Box flex>
            <GuardProvider guards={[requireLogin]}>
              <Switch>
                <GuardedRoute
                  path='/Admin/IndexApp'
                  exact
                  component={NewsList}
                  meta={{ auth: true }}
                />
                <GuardedRoute
                  path='/Admin'
                  exact
                  component={NewsList}
                  meta={{ auth: true }}
                />
                <GuardedRoute
                  path='/'
                  exact
                  component={NewsList}
                  meta={{ auth: true }}
                />
                <GuardedRoute
                  path='/MostReadNewsStat'
                  exact
                  component={MostReadNewsStat}
                  meta={{ auth: true }}
                />
                <GuardedRoute
                  path='/UserRequests'
                  exact
                  component={UserRequests}
                  meta={{ auth: true }}
                />
                <GuardedRoute
                  path='/FullNews/:id'
                  exact
                  component={FullNews}
                  meta={{ auth: true }}
                />
                <GuardedRoute
                  path='/FullNewsNoDelete'
                  exact
                  component={FullNews}
                  meta={{ auth: true }}
                />
              </Switch>
            </GuardProvider>
          </Box>
        </Box>
      </Grommet>
    </Router>
  )
}
