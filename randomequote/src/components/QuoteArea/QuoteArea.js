import React from 'react';
import classes from './QuoteArea.module.css'

const QuoteArea = props => {
    return (
        <div className={classes.QuoteA}>
            Quote Area
            {props.children}
        </div>
    )
};

export default QuoteArea;