import React from 'react';
import {Link} from 'react-router-dom';

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

                <div className="outer">  
                    <a href="http://www.davemarshglassandglazing.co.uk/"  target="_target">
                        <div className="project-box dmgg">
                            <h3>Dave Marsh Glass And Glazing</h3>
                            <br>
                            </br>
                            <h4>Wordpress/Elementor</h4>
                            <p>Small business website</p>
                        </div>
                    </a>
                </div>    

                <div className="outer">  
                    <a href="https://inquizitive-app-adm.herokuapp.com/"  target="_target">
                        <div className="project-box inquizitive">
                            <h3>InQuizitive</h3>
                            <br>
                            </br>
                            <h4>React-HTML5-CSS3-javascript</h4>
                            <p>Quiz web-app</p>
                        </div>
                    </a>
                </div>  

                <div className="outer">  
                    <a href="https://george-orwell-tribute-page-adm.herokuapp.com/"  target="_target">
                        <div className="project-box tribute">
                            <h3>Tribute Page</h3>
                            <br>
                            </br>
                            <h4>React-HTML5-CSS3-javascript</h4>
                            <p>React webpage</p>
                        </div>
                    </a>
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