import { Link, Form } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import TokenContext from '../../context-provider/use-context';

const MainNavigation = () => {
  const { token, isLogin } = useContext(TokenContext);
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {isLogin ?
            <>
              <li>
                <Link to='/profile'>Profile</Link>
              </li>
              <li>
                <form action='/logout'>
                  <button>Logout</button>
                </form>
              </li>
            </> : <li>
              <Link to='/auth'>Login</Link>
            </li>
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
