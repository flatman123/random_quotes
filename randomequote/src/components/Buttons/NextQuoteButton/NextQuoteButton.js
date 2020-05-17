import React from 'react';

const nextQuoteButton = props => {
    return (
        <button onClick={props.getQuote}>Next Quote</button>
    )
};

export default nextQuoteButton;