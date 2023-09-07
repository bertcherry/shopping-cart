import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from './Home/Home';
import Shop from './Shop/Shop';

function Router() {
    const [cartData, setCartData] = useState({
        items: null,
        total: null,
    });
    const [shopData, setShopData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                if(response.status >= 400) {
                    throw new Error('server error');
                }
                return response.json();
            })
            .then(response => setShopData(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    function addItem(itemId) {
        const quantity = Number(document.getElementById(itemId).value);
        console.log(quantity);
        const shopItem = shopData.map(item => {
            if (item.id === itemId) {
               return item; 
        }});
        setCartData({
            items: Number(cartData.items) + quantity,
            total: Number(cartData.total) + (quantity * shopItem.price),
        });
    }

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home cartData={cartData}/>,
        },
        {
          path: "shop",
          element: <Shop shopData={shopData} error={error} loading={loading} cartData={cartData} addItem={addItem} />,
        }
    ]);

    return <RouterProvider router={router} />;
}

export default Router;