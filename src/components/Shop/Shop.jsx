import Nav from '../Nav/Nav.jsx';
import styles from './Shop.module.css';
import Card from '../Card/Card.jsx';

function Shop({shopData, error, loading, cartCount, updateCart}) {
    function Cards() {
        if (error) return <p>A network error occurred.</p>;
        if (loading) return <p>Loading...</p>;
        return shopData.map(item => {
            return (
                <Card key={item.id} id={item.id} title={item.title} price={item.price} imgsrc={item.image} quantity={item.quantity} updateCart={updateCart} buttonName="Add"/>
            )
        })
    }

    return (
        <>
            <Nav cartCount={cartCount}/>
            <div className={styles.container}>
                <Cards />
            </div>
        </>
    );
}

export default Shop;