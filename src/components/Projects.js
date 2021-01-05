import React from 'react';

import Nav from './Nav';
import MainHeader from './MainHeader';

const onEventOver = (e) => {
    e.target.style.color = 'red';
};

class Projects extends React.Component {
    constructor(){
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
    return <div>
                <div>
                <MainHeader />
                </div>
                
                <div className={this.state.animate ? "move-in-from-bottom container" : undefined}>
                <div className="box">
                    <h1>My projects..</h1>
                    <p>Here are a few of my current projects.</p>

                    <a href="http://www.davemarshglassandglazing.co.uk/" className="contact-link" target="_target">Dave Marsh Glass and Glazing</a>
                    <br></br>
                    <br></br>
                    <a href="https://inquizitive-app-adm.herokuapp.com/" className="contact-link" target="_target">InQuizitive</a>
                    <br></br>
                    <br></br>
                    <p>More on the way.</p>
                    <p>Source code and more can be found at <a href="https://github.com/Ashley-106" className="contact-link" target="_target">my GitHub here..</a></p>
                </div>
                
                </div>
            </div>
    }
};

export default Projects;