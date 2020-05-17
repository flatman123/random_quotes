import React from 'react';
import classes from './QuoteArea.module.css'
import axios from 'axios';
import Buttons from '../../components/Buttons/Buttons';

class QuoteArea extends React.Component {
    state = {
        quoteUrl: 'http://quotes.stormconsultancy.co.uk/random.json',
        quote: null,
        author: null,
    }

    getNextQuote = () => {
        const request = true;

        if (request) {
            axios.get(this.state.quoteUrl)
            .then(data => {
                const copyOfState = {...this.state}
                copyOfState['author'] = data.data.author;
                copyOfState['quote'] = data.data.quote;

                this.setState({
                    quote: copyOfState.quote,
                    author: copyOfState.author
                })
            }); 
        }

        this.setState({
            quoteRequest: request
        })
    }

    componentDidMount() {
        axios.get(this.state.quoteUrl)
            .then(data => {
                const copyOfState = {...this.state}
                copyOfState['author'] = data.data.author;
                copyOfState['quote'] = data.data.quote;

                this.setState({
                    quote: copyOfState.quote,
                    author: copyOfState.author
                })
            });   
    };
    render (){
        return (
            <div className={classes.QuoteArea}>                
                <p>{this.state.quote}</p>
                <Buttons getQuote={this.getNextQuote} />
            </div>
        )
    }
};

export default QuoteArea;