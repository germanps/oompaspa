import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route
} from 'react-router-dom'
import { DetaillView } from '../components/DetaillView/DetaillView';
import { MainView } from '../components/MainView/MainView';
import { Navbar } from '../components/Navbar/Navbar'

export const AppRouter = () => {
    return (
        <Router>
            <div className="oompa-spa">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={MainView} />
                    <Route exact path="/oompa/:id" component={DetaillView} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    );
}
