import { useState } from "react";
import shopData from './Shop/Shop';

function Cart() {
    const [cartData, setCartData] = useState({
        items: null,
        total: null,
    });

    function addItem(e, quantity) {
        e.preventDefault();
        const itemId = e.target.id;
        const shopItem = shopData.map(item => {
            if (item.id === itemId) {
               return item; 
        }});
        setCartData({
            items: cartData.items + quantity,
            total: cartData.total + (quantity * shopItem.price),
        });
    }

    return { cartData, addItem }
}

export { Cart }