import { BrowserRouter, Routes, Switch, Route, useNavigate } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import Logout from './components/Logout/Logout';
import { useContext, useEffect, useState } from 'react';
import TokenContext from './context-provider/use-context';

function App() {
  // useState
  const { isLogin } = useContext(TokenContext)
  // console.log("token: ", token)
  // const navigate = useNavigate()
  // const token = localStorage.getItem("tung")
  // useEffect(() => {
  //   // const setExpire = setTimeout(() => {
  //   //   if (localStorage.getItem('tung')) {
  //   //     localStorage.removeItem('tung')
  //   //     navigate('/logout')
  //   //   } else {

  //   //   }
  //   // }, 10000)
  //   // return () => {
  //   //   clearTimeout(setExpire)
  //   // }
  //   console.log(token)
  // }, [token])

  return (
    <Layout>
      <Routes>
        <Route path='/' element=<HomePage /> />
        <Route path='/auth' element={
          isLogin ? <HomePage /> : <AuthPage />
        } />
        <Route path='/profile' element={
          isLogin ? <UserProfile /> : <AuthPage />
        } />
        <Route path='/logout' element={
          isLogin ? <Logout /> : <AuthPage />
        } />
      </Routes>
    </Layout>
  );
}

export default App;
