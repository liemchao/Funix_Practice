import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/page/HomePage/HomePage';
import ShopPage from './components/page/ShopPage/ShopPage';
import DetailPage from './components/page/DetailPage/DetailPage';
import CartPage from './components/page/CartPage/CartPage';
import CheckoutPage from './components/page/CheckoutPage/CheckoutPage';
import LoginPage from './components/page/LoginPage/LoginPage';
import RegisterPage from './components/page/RegisterPage/RegisterPage';
import Footer from './components/Layout/Footer/Footer';
import NavBar from './components/Layout/NavBar/NavBar';
import ProfilePage from './components/page/ProfilePage/ProfilePage';


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/shop' Component={ShopPage} />
        <Route path='/profile' Component={ProfilePage} />
        <Route path='/detail/:productId' element=<DetailPage /> />
        <Route path='/cart' element=<CartPage /> />
        <Route path='/checkout' element=<CheckoutPage /> />
        <Route path='/login' element=<LoginPage /> />
        <Route path='/register' element=<RegisterPage /> />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
