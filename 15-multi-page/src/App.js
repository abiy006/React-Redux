import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

const routerX = createBrowserRouter([
  { path: '/', element: <HomePage />  },
  { path: '/products', element: <ProductsPage />  },
])
function App() {
  return <RouterProvider router={routerX} />;
}

export default App;
