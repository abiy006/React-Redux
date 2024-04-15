import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";

const routerX = createBrowserRouter([
  { path: '/', element: <HomePage />  },
])
function App() {
  return <RouterProvider router={routerX} />;
}

export default App;
