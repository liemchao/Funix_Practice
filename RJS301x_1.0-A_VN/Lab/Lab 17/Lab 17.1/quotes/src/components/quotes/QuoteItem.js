import { useParams } from 'react-router-dom';


const QuoteItem = (props) => {

  const { quoteId } = useParams();

  return (
    <div>
      <h1>Quote Detail Page</h1>
      <h1>quote {quoteId}</h1>
    </div>
  );
};

export default QuoteItem;
