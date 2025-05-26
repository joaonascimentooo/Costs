import {FaFacebook, FaLinkedin, FaInstagram} from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li className={styles.social_item}>
                    <FaFacebook />
                </li>
                <li className={styles.social_item}>
                    <FaLinkedin />
                </li>
                <li className={styles.social_item}>
                    <FaInstagram />
                </li>
            </ul>
            <p><span>Costs</span> &copy; 2024</p>
            </footer>
    )
}
export default Footer