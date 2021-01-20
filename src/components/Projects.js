import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import Nav from './Nav';
import MainHeader from './MainHeader';

class Projects extends React.Component {
    constructor(props){
        super(props)
        // this.projectAnimate = this.projectAnimate.bind(this)
        this.state = {
            animate: false,
            animateProjectToggle: false
        }
    }

componentDidMount() {
        this.setState({
            animate: true
        })
} 

    render() {
    return <div>
                <div>
                <MainHeader />
                </div>
                
                <div className={this.state.animate ? "move-in-from-bottom container" : undefined}>
                <div className="box">
                    <h1>My projects..</h1>
                    <p>Here are a few of my current projects.</p>

                <div className="project-container">
            
                <div className="outer" >  
                    
                    <NavLink to="/projects/dmgg">
                        <div className="project-box dmgg">
                            <h4>Dave Marsh Glass and Glazing</h4>
                        </div>
                    </NavLink>
                </div>    

                <div className="outer">  
                    <NavLink to="/projects/inquizitive">
                        <div className="project-box inquizitive">
                            <h4>Inquizitive Quiz App</h4>
                        </div>
                    </NavLink> 
                </div>  

                <div className="outer">  
                    <NavLink to="/projects/tribute">
                        <div className="project-box tribute">
                            <h4>Tribute Page</h4>
                        </div>
                    </NavLink>
                </div> 

                <div className="outer">  
                    <NavLink to="/projects/login">
                        <div className="project-box login">
                            <h4>Login Page</h4>
                        </div>
                    </NavLink>    
                </div>
                    
                </div>

                <div className="media-spacer">
                    <p>Source code and more can be found at <a href="https://github.com/Ashley-106" className="contact-link" target="_target">my GitHub here..</a></p>
                </div>
                    
                </div>
                
                </div>
            </div>
    }
};

export default Projects;