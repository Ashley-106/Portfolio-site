import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => {
    return <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={About} exact={true}/>
                        <Route path="/projects" component={Projects} exact={true}/>
                        <Route path="/contact" component={Contact}/>
                        <Route component={NotFoundPage}/>
                    </Switch>
                </div>
            </BrowserRouter>;
};

export default AppRouter;