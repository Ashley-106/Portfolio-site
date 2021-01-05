import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const Nav = () => {
    return <div>
                <NavLink className="navItem" to="/" activeClassName="is-active" exact={true}>About</NavLink>
                <NavLink className="navItem" to="/projects" activeClassName="is-active" exact={true}>Projects</NavLink>   
                <NavLink className="navItem" to="/contact" activeClassName="is-active">Contact</NavLink>      
            </div>
};

export default Nav;