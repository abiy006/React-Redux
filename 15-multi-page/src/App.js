import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

const routerX = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {
  // return <RouterProvider router={router} />;
  return <RouterProvider router={routerX} />;

}

export default App;
