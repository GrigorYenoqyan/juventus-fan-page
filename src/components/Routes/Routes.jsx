import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../Header';
import Home from '../Home';
import News from '../News';
import History from '../History';

const Routes = () => {
    return (
        <div>
            <Route path='/' component={Header} />
            <Route exact path="/" render={() => <Redirect to='/home'/>} />
            <Route path='/home' component={Home} />            
            <Route path='/news' component={News} />
            <Route path='/creators' component={Header} />
            <Route path='/team' component={Header} />
            <Route path='/matches' component={Header} />
            <Route path='/history' component={History} />
            <Route path='/stadium' component={Header} />
        </div>
    )
}

export default Routes;