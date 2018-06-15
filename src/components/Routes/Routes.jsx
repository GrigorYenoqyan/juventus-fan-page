import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../Header';
import Home from '../Home';
import News from '../News';
import History from '../History';
import Matches from '../Matches';
import Fans from '../Fans';
import Footer from '../Footer';
import Partners from '../Partners';
import Stadium from '../Stadium';
import Club from '../Club';

const Routes = () => {
    return (
        <div>
            <Route path='/' component={Header} />
            <Route exact path="/" render={() => <Redirect to='/home'/>} />
            <Route path='/home' component={Home} />            
            <Route path='/news' component={News} />
            <Route exact path='/club' component={Club} />            
            <Route path='/club/fans' component={Fans} />
            <Route path='/matches' component={Matches} />
            <Route path='/club/history' component={History} />
            <Route path='/club/stadium' component={Stadium} />
            <Route path='/' component={Partners} />
            <Route path='/' component={Footer} />
        </div>
    )
}

export default Routes;