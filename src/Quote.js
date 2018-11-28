import React, { Component } from 'react';

class Quote extends Component {
    render() {
        const { quote, author } = this.props.quote
        return (
            <div>
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