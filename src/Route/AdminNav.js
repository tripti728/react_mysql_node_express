 import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AdminNews from '../component/AdminNews'

import { Box } from 'grommet'
import AdminAccept from '../component/adminAccept'



const AdminNav = () => {
    return (
       <Box>
            <Switch>
            <Route exact path="/Admin" render={() => (<Redirect to="/Admin/AdminNews" />)} /> 
                <Route path='/Admin/AdminNews' component={AdminNews}></Route>
                <Route path='/Admin/accept' component={AdminAccept}></Route>
            </Switch>
            </Box>
    )
}

export default AdminNav
