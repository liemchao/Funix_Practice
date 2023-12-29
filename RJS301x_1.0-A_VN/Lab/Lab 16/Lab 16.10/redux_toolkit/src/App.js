import { useSelector } from "react-redux";
import Auth from "./components/Auth/Auth";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import UserProfile from "./components/UserProfile/UserProfile";


function App() {

  const { isLogin } = useSelector(state => state.auth)

  return (
    <>
      <Header />
      {!isLogin && <Auth />}
      {
        isLogin && <div>
          <UserProfile />
          <Counter />
        </div>
      }
    </>
  );
}

export default App;
