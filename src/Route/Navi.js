import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { SignUp } from '../component/User/SignUp'
import { Box } from 'grommet'
import { IndexApp } from '../component/Admin/IndexApp'
import ContainLogin from '../container/containsign'
import Home from '../component/User/Home'
import ReporterHome from '../component/Reporter/ReporterHome'
import AddNews from '../component/Reporter/AddNews'
import News from '../component/User/News'
import ReporterViewNews from '../component/Reporter/ReporterViewNews'
import ReporterProfile from '../component/Reporter/ReporterProfile'
import { useSelector } from 'react-redux'
import { GuardProvider, GuardedRoute } from 'react-router-guards'
export function Navi(props) {
  let islogged = useSelector((state) => state.islogged)
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
    <Box style={{ 'padding-bottom': '2.5rem' }}>
      <GuardProvider guards={[requireLogin]}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Login' component={ContainLogin}></Route>
          <Route path='/Signup' component={SignUp}></Route>
          <GuardedRoute
            path='/Admin/IndexApp'
            component={IndexApp}
            meta={{ auth: true }}
          />
          <GuardedRoute
            path='/Reporter/Profile'
            component={ReporterProfile}
            meta={{ auth: true }}
          />
          <GuardedRoute
            path='/Admin'
            component={IndexApp}
            meta={{ auth: true }}
          />
          <GuardedRoute
            path='/Reporter'
            exact
            component={ReporterHome}
            meta={{ auth: true }}
          />
          <GuardedRoute
            path='/Reporter/AddNews'
            exact
            component={AddNews}
            meta={{ auth: true }}
          />
          <GuardedRoute path='/news/:id' exact component={News} />
          <GuardedRoute
            path='/Reporter/news/:id'
            exact
            component={ReporterViewNews}
            meta={{ auth: true }}
          />
        </Switch>
      </GuardProvider>
    </Box>
  )
}
