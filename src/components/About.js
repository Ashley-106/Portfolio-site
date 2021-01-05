import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import MainHeader from './MainHeader';

class About extends React.Component  {
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
        return <div> 
        <div>
                <MainHeader />
        </div>
        <div className={this.state.animate ? "move-in-from-bottom container" : undefined}> 
            <div className="box">
                <h1>About me..</h1>

                <div className="about">
                <img className="profile-about" src="/media/profile.jpg" alt="profile"/>

                <p>
                    I am a Poole based aspiring web developer. Last year I decided to change my career from working as an electrician to seeking a role in web development and I.T. 
                    <br></br>
                    <br></br>
                    I have always had a strong interest in I.T and have worked with and on computers extensively. Last year I started a full stack web development course with the training room which I've recently completed. I decided to enroll on a web development course along side self learning to give myself a broader grasp of topics and hopefully better employment chances. 
                </p>
                </div>
                <p>
                I am seeking the opportunity to extend and improve on my current web development skills and knowledge from within a professional setting and team.
                </p>
                <h4>Thank you.</h4>
                
                <Link className="link" to="/contact">Get in touch</Link>
                
                    
               
                
                </div>
            </div>
        </div>
    }
};

export default About;