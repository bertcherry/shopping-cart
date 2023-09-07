import Nav from '../Nav/Nav';
import Card from '../Card/Card';
import styles from './Cart.module.css';

function Cart({shopData, cartCount, cartTotal, updateCart}) {
    const cartRows = shopData.map(item => {
        if (item.quantity > 0) {
            return (
                <Card key={item.id} id={item.id} title={item.title} price={item.price} imgsrc={item.image} quantity={item.quantity} updateCart={updateCart} buttonName="Update"/>
            )
        }
    })

    return (
        <>
            <Nav cartCount={cartCount}/>
            <div className={styles.cart}>
                <h2>Shopping Cart</h2>
                {cartRows}
                <div>Total: ${cartTotal.toFixed(2)}</div>
            </div>
        </>
    )
}

export default Cart;