import { Fragment, useState } from 'react';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
import LoadingSpinner from '../UI/LoadingSpinner';

const QuoteList = (props) => {
  const [quotes, setQuotes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  fetch('https://quotes-f2182-default-rtdb.firebaseio.com/quotes.json').then((response) => {
    const data = response.json();
    return data
  }).then((data) => {
    const listQuotes = [];
    for (const key in data) {
      const quote = {
        id: key,
        author: data[key].author,
        text: data[key].text,
      }
      listQuotes.push(quote)
    }
    setIsLoading(false);
    setQuotes(listQuotes)
  })


  return (
    <Fragment>
      <ul className={classes.list}>
        {isLoading ? <LoadingSpinner /> : quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
