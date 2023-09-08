import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from './Home/Home';
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';

function Router() {
    const [cartData, setCartData] = useState({
        items: null,
        total: 0,
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

    function updateCart(itemId) {
        const quantity = Number(document.getElementById(itemId).value);
        console.log(quantity);
        const shopItem = shopData.find(item => {
            if (item.id === itemId) {
                return item;
            }
        });
        setShopData(shopData.map(item => {
            if (item.id === itemId) {
                return {
                    ...item,
                    quantity: quantity,
                } 
            } else {
                    return item;
                }
        }));
        //update to return the correct number
        setCartData({
            items: Number(cartData.items) + quantity,
            total: Number(cartData.total) + quantity * shopItem.price,
        });
    }

    function countCart() {
        let cartCount = 0;
        if (!error && !loading) {
            shopData.forEach(item => {
                if (item.quantity > 0) {
                    cartCount = cartCount + item.quantity;
                }
            });
        }
        return cartCount;
    }

    function totalCart() {
        let cartTotal = 0;
        if (!error && !loading) {
            shopData.forEach(item => {
                if (item.quantity > 0) {
                    cartTotal = cartTotal + (item.price * item.quantity);
                }
            });
        }
        return cartTotal;
    }

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home cartCount={countCart()}/>,
        },
        {
          path: "shop",
          element: <Shop shopData={shopData} error={error} loading={loading} cartCount={countCart()} updateCart={updateCart} />,
        }, 
        {
          path: "cart",
          element: <Cart shopData={shopData} cartCount={countCart()} cartTotal={totalCart()} updateCart={updateCart}/>
        }
    ]);

    return <RouterProvider router={router} />;
}

export default Router;