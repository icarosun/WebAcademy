import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ListMovies from "./Pages/ListMovies";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Recommendations from "./Pages/Recommendations";
import NavBarLayout from "./Layout/NavbarLayout";


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
  }
   
    ]
  }
  ]);

function App() {
  return <RouterProvider router={router} />; 
}

export default App;
