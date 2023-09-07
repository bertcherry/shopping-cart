import styles from "./Home.module.css";
import Nav from "../Nav/Nav";
import clothing from "../../assets/Clothing.jpg";
import { Link } from "react-router-dom";

function Home({cartData}) {
    return (
        <>
            <Nav cartData={cartData}/>
            <div className={styles.hero}>
                <div className={styles.container}><img src={clothing} alt="A rack of clothes seen through a window" className={styles.img}/></div>
                <div className={styles.overlay}>
                    <p>Couture and electronics for the modern life</p>
                    <button><Link to="shop">Shop</Link></button>
                </div>
            </div>
        </>
        
    );
}

export default Home;