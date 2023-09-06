import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home/Home';
import Shop from './Shop/Shop';

function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "shop",
          element: <Shop />,
        }
    ]);

    return <RouterProvider router={router} />;
}

export default Router;