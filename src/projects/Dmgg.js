import React from 'react';
import {Link} from 'react-router-dom';

import MainHeader from '../components/MainHeader';

class Dmgg extends React.Component {
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
                        <h1>Dave Marsh glass and glazing</h1>
                        <p>
                           Created using wordpress with elementor.
                        </p>

                    
                    <div className="media-spacer">
                        <p>Link here to <a href="http://www.davemarshglassandglazing.co.uk/" className="contact-link" target="_target">Dave Marsh glass and glazing..</a></p>
                    </div>
                    </div>
                   
                </div>
            </div>
        );
    }
};

export default Dmgg;