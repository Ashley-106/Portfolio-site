import React from 'react';
import {Link} from 'react-router-dom';

import MainHeader from '../components/MainHeader';

class Login extends React.Component {
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
        return(
            <div>
                <MainHeader />

                <div className={this.state.animate ? "move-in-from-bottom container" : undefined}>
                   <div className="box">
                        <h1>Login Page</h1>
                        <p>
                            Created with HTML5 CSS3 javascript using React with babel and webpack. 
                        </p>
                        
                        <div className="media-spacer">
                        <p>Link here to <a href="https://login-adm.herokuapp.com/"  className="contact-link" target="_target">My Login Page..</a></p>
                        <p>Link here to <a href="https://github.com/Ashley-106/Login-Page" className="contact-link" target="_target">This GitHub Repository..</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Login;