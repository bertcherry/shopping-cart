import styles from "./Home.module.css";
import Nav from "../Nav";
import clothing from "../../assets/Clothing.jpg";

function Home() {
    return (
        <>
            <Nav />
            <div className={styles.container}><img src={clothing} alt="A rack of clothes seen through a window"/></div>
        </>
        
    );
}

export default Home;