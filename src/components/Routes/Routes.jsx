import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../Header';
import Home from '../Home';
import News from '../News';
import History from '../History';
import Stadium from '../Stadium';
import Matches from '../Matches';
import Fans from '../Fans';

const Routes = () => {
    return (
        <div>
            <Route path='/' component={Header} />
            <Route exact path="/" render={() => <Redirect to='/home'/>} />
            <Route path='/home' component={Home} />            
            <Route path='/news' component={News} />
            <Route path='/creators' component={Header} />
            <Route path='/fans' component={Fans} />
            <Route path='/matches' component={Matches} />
            <Route path='/history' component={History} />
            <Route path='/stadium' component={Stadium} />
        </div>
    )
}

export default Routes;