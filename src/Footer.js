import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p className="hint">Press space to inspire</p>
                <div className="credits">Made with love from <p className="spin"><a href="http://www.doodlepain.me/profile/">DoodlePain</a></p></div>
            </div >
        );
    }
}

export default Footer;