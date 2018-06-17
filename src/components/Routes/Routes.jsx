import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../Header';
import Home from '../Home';
import News from '../News';
import History from '../History';
import Matches from '../Matches';
import Fans from '../Fans';
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
            <Route path='/creators' component={Header} />
            <Route path='/fans' component={Fans} />
            <Route exact path='/history' component={History} />
            <Route path='/matches' component={Matches} />
            <Route path='/stadium' component={Stadium} />
            <Route exact path='/history/1897-1971' render={() => <ArticlePage
                title={historyData[0][0].articleName}
                subtitle={historyData[0][0].quete}
                text={historyData[0][0].text}
            />} />
            <Route exact path='/history/1971-1989' render={() => <ArticlePage
                title={historyData[0][1].articleName}
                subtitle={historyData[0][1].quete}
                text={historyData[0][1].text}
            />} />
            <Route exact path='/history/1990-2004' render={() => <ArticlePage
                title={historyData[1][0].articleName}
                subtitle={historyData[1][0].quete}
                text={historyData[1][0].text}
            />} />
            <Route exact path='/history/2004-2010' render={() => <ArticlePage
                title={historyData[1][1].articleName}
                subtitle={historyData[1][1].quete}
                text={historyData[1][1].text}
            />} />
            <Route exact path='/history/2010-2015' render={() => <ArticlePage
                title={historyData[2][0].articleName}
                subtitle={historyData[2][0].quete}
                text={historyData[2][0].text}
            />} />
            <Route exact path='/history/2015-2017' render={() => <ArticlePage
                title={historyData[2][1].articleName}
                subtitle={historyData[2][1].quete}
                text={historyData[2][1].text}
            />} />
            <Route path='/' component={Footer} />
        </div>
    )
}

export default Routes;