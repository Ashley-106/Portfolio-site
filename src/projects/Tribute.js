import React from 'react';
import {Link} from 'react-router-dom';

import MainHeader from '../components/MainHeader';

class Tribute extends React.Component {
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
                        <h1>Tribute Page</h1>
                        <p>
                            Created with HTML5 CSS3 using React with babel and webpack.
                        </p>
                       
                        <div className="media-spacer">
                        <p>Link here to <a href="https://george-orwell-tribute-page-adm.herokuapp.com/" className="contact-link" target="_target">My Tribute Page..</a></p>
                        <p>Link here to <a href="https://github.com/Ashley-106/Tribute-Page" className="contact-link" target="_target">This GitHub Repository..</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Tribute;