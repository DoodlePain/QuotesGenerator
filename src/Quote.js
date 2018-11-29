import React, { Component } from 'react';
import anime from "animejs";

class Quote extends Component {
    render() {
        anime({
            targets: '.container',
            opacity: [0, 1],
            easing: 'linear',
            duration: 500
        });
        const { quote, author } = this.props.quote
        return (
            <div className="container">
                <p className="text">
                    " {quote} "
                </p>
                <p className="author">
                    - {author}
                </p>
            </div>
        );
    }
}

export default Quote;
