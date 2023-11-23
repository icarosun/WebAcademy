import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ListMovies from "./Pages/ListMovies";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Recommendations from "./Pages/Recommendations";
import NavBarLayout from "./Layout/NavbarLayout";
import ListFavoriteMovies from "./Pages/ListFavoriteMovies";


const router = createBrowserRouter([
  {
    element: <NavBarLayout />,
    children: [
      {
        path: "/",
        element: <ListMovies/>
      },
      {
        path: "/recommendations",
        element: <Recommendations />
      }, 
      {
        path: "/favorites",
        element: <ListFavoriteMovies />
      }
    ]
  }
  ]);

function App() {
  return <RouterProvider router={router} />; 
}

export default App;
