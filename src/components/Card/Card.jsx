import styles from './Card.module.css';

function Card({ title, price, imgsrc }) {
    return (
        <div className={styles.card}>
            <div className={styles.container}><img src={imgsrc}/></div>
            <h2>{title}</h2>
            <div>${price}</div>
            <div className={styles.interactive}>
                <input type="number" aria-label='quantity'></input>
                <button className={styles.add}>Add</button>
            </div>
        </div>
    )
}

export default Card;