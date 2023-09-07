import styles from './Card.module.css';
import { addItem } from '../Cart';

function Card({ title, price, imgsrc }) {
    return (
        <div className={styles.card}>
            <div className={styles.container}><img src={imgsrc}/></div>
            <h2>{title}</h2>
            <div>${price}</div>
            <form className={styles.interactive}>
                <label>Quantity: <input name="quantity" type="number" min="0"/></label>
                <button type="submit" className={styles.add} onClick={(e) => addItem(e, quantity.value)}>Add</button>
            </form>
        </div>
    )
}

export default Card;