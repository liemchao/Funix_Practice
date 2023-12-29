import { useDispatch } from 'react-redux';
import styles from './Auth.module.css';
import { useState } from 'react';
import { authActions } from '../store/slice/AuthSlice';


function Auth() {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if (!password) {
            alert('Please enter all filed!')
            return
        }
        setEmail('')
        setPassword('')
        dispatch(authActions.login({
            email: email,
            password: password
        }))

    }

    return (
        <div className={`${styles['auth']}`}>
            <form onSubmit={submitHandler} className={`${styles['control']}`}>
                <label>Email</label>
                <input type='email' placeholder='Email' value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} />
                <label>Password</label>
                <input value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }} type='password' placeholder='Password' />
                <button>Login</button>
            </form>
        </div>
    );
}

export default Auth;
