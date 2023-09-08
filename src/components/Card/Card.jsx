import styles from './Card.module.css';
import { useState } from 'react';

function Card({ id, title, price, quantity, imgsrc, updateCart, buttonName }) {
    const [quantityDisplay, setQuantityDisplay] = useState(quantity);
    const [disabledButton, setDisabledButton] = useState(true);

    function handleChange(e) {
        setDisabledButton(false);
        setQuantityDisplay(e.target.value);
    }

    function handleClick(e, id) {
        e.preventDefault();
        updateCart(id);
    }

    return (
        <div className={styles.card}>
            <div className={styles.container}><img src={imgsrc} className={styles.img}/></div>
            <h2 className={styles.h2}>{title}</h2>
            <div>${price.toFixed(2)}</div>
            <form className={styles.interactive}>
                <label>Quantity: <input name="quantity" type="number" min="0" id={id} className={styles.input} value={quantityDisplay} onChange={handleChange}/></label>
                <button type="submit" className={styles.btn} onClick={(e) => handleClick(e, id)} disabled={disabledButton}>{buttonName}</button>
            </form>
        </div>
    )
}

export default Card;