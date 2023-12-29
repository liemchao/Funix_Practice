import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NewQuote from './components/quotes/NewQuotes';
import ErrorPage from './components/quotes/ErrorPage';
import QuoteList from './components/quotes/QuoteList';
import QuoteItem from './components/quotes/QuoteItem';
import { useNavigate } from 'react-router-dom';
import Home from './components/quotes/Home';
const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "new-quotes",
    element: <NewQuote />,
    errorElement: <ErrorPage />,
  },
  {
    path: "quotes",
    element: <QuoteList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "quotes/:quoteId",
    element: <QuoteItem />,
    errorElement: <ErrorPage />,
  },
])

function App() {

  return (
    <div className='quotes_app' >

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
