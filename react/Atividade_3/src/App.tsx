import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ListMovies from "./Pages/ListMovies";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Recommendations from "./Pages/Recommendations";


const router = createBrowserRouter([
  {
    path: "/",
    element: <ListMovies/>
  },
  {
    path: "/recommendations",
    element: <Recommendations />
  }
]);

function App() {
  return <RouterProvider router={router} />; 
}

export default App;
