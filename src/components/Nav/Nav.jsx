import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';
import styles from './Nav.module.css';

function Nav({cartCount}) { 
    const cartDisplay = (cartCount > 0) ? cartCount : '';
    return (
        <div className={styles.banner}>
            <nav> 
                <ul className={styles.navList}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                </ul>
            </nav>
            <Link to="/cart">
                <button className={styles.btn}>
                    <Icon path={mdiCartOutline} size={1} className={styles.svg} />
                    <div className={styles.cartItems}>{cartDisplay}</div>
                </button>
            </Link>
        </div>
    )
}

export default Nav;