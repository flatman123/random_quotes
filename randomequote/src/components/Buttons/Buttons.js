import React from 'react';
import classes from './Buttons.module.css';
import NextQuoteButton from './NextQuoteButton/NextQuoteButton';

const buttons = props => (
    <div className={classes.Buttons}>
        <NextQuoteButton getQuote={props.getQuote} />
        Twitter Button
        Tumblr Button
    </div>
    
);

export default buttons;