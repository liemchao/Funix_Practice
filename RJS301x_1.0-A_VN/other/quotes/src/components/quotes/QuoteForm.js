import { useRef } from 'react';
import Card from '../UI/Card';
// import { quoteActions } from '../store/quotes/quotesSlice'
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';
// import { useDispatch } from 'react-redux';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  // const dispatch = useDispatch()

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here
    // props.onAddQuote({ author: enteredAuthor, text: enteredText });
    // dispatch(quoteActions.onAddQuote({ sauthor: "Tung", text: "Perfect" }))
    fetch('https://quotes-f2182-default-rtdb.firebaseio.com/quotes.json', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ author: "Tung", text: "Perfect" })
    })
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
