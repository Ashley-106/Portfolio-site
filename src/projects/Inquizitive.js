import React from 'react';
import {Link} from 'react-router-dom';

import MainHeader from '../components/MainHeader';

class Inquizitive extends React.Component {
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
                        <h1>InQuizitive Quiz App</h1>
                        <p>
                           Created with HTML5 CSS3 javascript using React with babel and webpack.
                        </p>
                        
                        <div className="media-spacer">
                        <p>Link here to <a href="https://inquizitive-app-adm.herokuapp.com/" className="contact-link" target="_target">InQuizitive app..</a></p>
                        <p>Link here to <a href="https://github.com/Ashley-106/InQuizitive-React-app" className="contact-link" target="_target">This GitHub Repository..</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Inquizitive;