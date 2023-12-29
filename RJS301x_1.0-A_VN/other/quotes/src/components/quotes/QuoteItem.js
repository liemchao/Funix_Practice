import { Link, useSearchParams } from 'react-router-dom';
import classes from './QuoteItem.module.css';

const QuoteItem = (props) => {

  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort")
  return (
    <li className={classes.item}>
      {/* <Link onClick={() => {
        setSearchParams('sort=asc')
      }}>
        asc
      </Link>
      <Link onClick={() => {
        setSearchParams('sort=desc')
      }}>
        desc
      </Link> */}
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
        {sort}
      </figure>
      <a className='btn'>
        View Fullscreen
      </a>
    </li>
  );
};

export default QuoteItem;
