import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ListMovies from "./Pages/ListMovies";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <ListMovies/>
  }, 
]);

function App() {
  return <RouterProvider router={router} />; 
}

export default App;
