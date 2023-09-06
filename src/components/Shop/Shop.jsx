import { useEffect, useState } from 'react';
import Nav from '../Nav/Nav.jsx';
import styles from './Shop.module.css';
import Card from '../Card/Card.jsx';

function Shop() {
    const [shopData, setShopData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                if(response.status >= 400) {
                    throw new Error('server error');
                }
                return response.json();
            })
            .then(response => setShopData(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    function Cards() {
        if (error) return <p>A network error occurred.</p>;
        if (loading) return <p>Loading...</p>;
        return shopData.map(item => {
            return (
                <Card key={item.id} title={item.title} price={item.price} imgsrc={item.image}/>
            )
        })
    }

    return (
        <>
            <Nav />
            <div className={styles.container}>
                <Cards />
            </div>
        </>
    );
}

export default Shop;