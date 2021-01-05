import React from 'react';

import Nav from './Nav';
import MainHeader from './MainHeader';

class Contact extends React.Component {
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
            <h1>Contact me..</h1>
            <div className="contact">

                <p>You can reach me at any of the below any time.</p>

                <p>Email: <a className="contact-link" href="mailto:ashleydavidmarsh@icloud.com">Ashleydavidmarsh@icloud.com</a></p>

                <p>Phone: <a className="contact-link" href="tel:07523959751">07523 959751</a></p> 

                <p>LinkedIn: <a className="contact-link" target="_target" href="https://www.linkedin.com/in/ashley-david-marsh-6822181a0/">Ashley David Marsh</a></p>

                <p>GitHub: <a className="contact-link" target="_target" href="https://github.com/Ashley-106">My GitHub</a></p>

                <p>My C.V: <a className="contact-link" href="/public/files/C.V.pdf" download>Download</a></p>

            </div>
            </div>
        </div>
        
        </div>
    }
    
};

export default Contact;