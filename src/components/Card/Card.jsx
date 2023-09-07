import styles from './Card.module.css';

function Card({ id, title, price, imgsrc, addItem }) {
    function handleClick(e, id) {
        e.preventDefault();
        addItem(id);
    }

    return (
        <div className={styles.card}>
            <div className={styles.container}><img src={imgsrc}/></div>
            <h2>{title}</h2>
            <div>${price.toFixed(2)}</div>
            <form className={styles.interactive}>
                <label>Quantity: <input name="quantity" type="number" min="0" id={id}/></label>
                <button type="submit" className={styles.add} onClick={(e) => handleClick(e, id)}>Add</button>
            </form>
        </div>
    )
}

export default Card;