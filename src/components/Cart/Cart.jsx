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
    });

    function CartDisplay() {
        if (cartCount < 1) {
            return <div>Shopping cart is empty</div>
        } else {
            return (
                <>
                    <div className={styles.rows}>
                        {cartRows}
                    </div>
                    <div className={styles.checkout}>
                        <div className={styles.total}>Total: ${cartTotal.toFixed(2)}</div>
                        <button disabled>Checkout</button>
                    </div>
                    
                </>
            );
        }
    }

    return (
        <>
            <Nav cartCount={cartCount}/>
            <div className={styles.cart}>
                <h2>Shopping Cart</h2>
                <CartDisplay />
            </div>
        </>
    )
}

export default Cart;