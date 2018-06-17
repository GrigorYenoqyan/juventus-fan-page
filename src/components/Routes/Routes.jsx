import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../Header';
import Home from '../Home';
import News from '../News';
import History from '../History';
import Matches from '../Matches';
import Fans from '../Fans';
import Team from '../Team';
import Footer from '../Footer';
import Stadium from '../Stadium';
import ArticlePage from '../ArticlePage';
import { historyData } from '../../data';

const Routes = () => {
    return (
        <div>
            <Route path='/' component={Header} />
            <Route exact path="/" render={() => <Redirect to='/home' />} />
            <Route path='/home' component={Home} />
            <Route path='/news' component={News} />
            <Route path='/players' component={Team} />
            <Route path='/creators' component={Header} />
            <Route path='/fans' component={Fans} />
            <Route exact path='/history' component={History} />
            <Route path='/matches' component={Matches} />
            <Route path='/stadium' component={Stadium} />
            <Route path='/history/:date' render={(props) => {
                const data = historyData.find((el) => el.date === props.match.params.date);
                return (<ArticlePage data={data} />)
            }
            } />
            <Route path='/' component={Footer} />
        </div>
    )
}

export default Routes;