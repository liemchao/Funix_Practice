import { useState, useContext, useEffect } from 'react';

import classes from './AuthForm.module.css';
import TokenContext from '../../context-provider/use-context';
import { SIGN_IN_PASSWORD_API, SIGN_UP_API } from '../../config/RestApi';
import useHttp from '../../hook/use-http';
import { API_KEY } from '../../config/Variable';
import LoadingSpinner from '../Loading/LoadingSpinner';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useContext(TokenContext);

  const { sendRequest: sendRequestLogin,
    isLoading: isLoadingLogin, } = useHttp();

  const { sendRequest: sendRequestSignup,
    isLoading: isLoadingSignup, } = useHttp()

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setToLogin = () => {
    setIsLogin(true);
    setEmail("");
    setPassword("");
  }

  const submitForm = (e) => {
    e.preventDefault();
    if (isLogin) {
      sendRequestLogin({
        link: SIGN_IN_PASSWORD_API + API_KEY,
        method: "POST",
        headers: {
          "Content-type": "Application/json"
        },
        body: { "email": email, "password": password, "returnSecureToken": true }
      }, (data) => {
        login(data.idToken)
      })
    } else {
      sendRequestSignup({
        link: SIGN_UP_API + API_KEY,
        method: "POST",
        headers: {
          "Content-type": "Application/json"
        },
        body: { "email": email, "password": password, "returnSecureToken": true }
      }, null, setToLogin)

    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitForm}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' value={email} onChange={(e) => {
            setEmail(e.target.value.trim())
          }} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' value={password} onChange={(e) => {
            setPassword(e.target.value.trim())
          }} required />
        </div>
        <div className={classes.actions}>
          <button type='submit'>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
      {isLoadingSignup ? <LoadingSpinner /> : <></>}
      {isLoadingLogin ? <LoadingSpinner /> : <></>}
    </section>
  );
};

export default AuthForm;
