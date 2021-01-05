import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Nav from './Nav';


class MainHeader extends Component  {
    constructor() {
        super() 
        this.state = {
            animate: false
        }
    }

componentDidMount() {
        this.setState({
            animate: true
        })
}

    render() { 
        return <header className="mainHeader">
                <div className="wrapper">
                    <div className={this.state.animate ? "move-in-from-left hero" : undefined}>
                        
                        <h3>Hi, I'm</h3>
                        <h1>Ashley</h1>
                        <h3>Aspring Web Developer</h3>

                    </div>

                    <div className={this.state.animate ? "move-in-from-right profile-nav" : undefined}>

                    <Nav />

                    </div>  
                </div>    
            </header>
    }
};

export default MainHeader;