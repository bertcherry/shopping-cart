import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';
import styles from './Nav.module.css';

function Nav({cartData}) {
    return (
        <div className={styles.banner}>
            <nav> 
                <ul className={styles.navList}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="shop">Shop</Link></li>
                </ul>
            </nav>
            <div className={styles.container}>
                <Icon path={mdiCartOutline} size={1} />
                <div className={styles.cartItems}>{cartData.items}</div>
            </div>
        </div>
    )
}

export default Nav;