import React from 'react';
import './DisplayQuote.css';

function DisplayQuote({simpson}) {
  return (
    <div className="QuoteCard-QuoteCard">
        <figure className="QuoteCard">
            <img src={simpson.image} alt={simpson.character}/>
            <cite>{simpson.character}</cite>
            <blockquote>{simpson.quote}</blockquote>
        </figure>
    </div>
  );
};


export default DisplayQuote;
