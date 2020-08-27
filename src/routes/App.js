import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../containers/Home'
import Login from '../containers/login'
import Register from '../containers/register'
import NotFound from '../containers/NotFound'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default App;