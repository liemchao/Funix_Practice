import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuoteItem from "./components/quotes/QuoteItem";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import MainNavigation from "./components/layout/MainNavigation";
import QuoteForm from "./components/quotes/QuoteForm";
import QuoteList from "./components/quotes/QuoteList";
import NotFound from "./components/NotFound/NotFound";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     // loader: <LoadingSpinner />,
//     children: [
//       {
//         path: '/',
//         element: <MainNavigation />,
//         errorElement: <ErrorPage />,
//         children: [
//           {
//             index: true,
//             // path: "quotes/all-quotes",
//             element: <QuoteList />,
//             errorElement: <NotFound />,
//           },
//           {
//             path: "quotes/create",
//             element: <QuoteForm />,
//             errorElement: <ErrorPage />,
//           },

//         ]
//       },
//     ]
//   },

// ])


function App() {


  return (
    // <RouterProvider router={router} />
    <BrowserRouter>
      <MainNavigation />
      <Layout>
        <Routes>
          <Route path="*" element=<NotFound /> />
          <Route path="/" element=<QuoteList /> />
          <Route path="quotes/create" element=<QuoteForm /> />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
