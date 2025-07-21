import { Link } from "react-router-dom"
import styles from './LinkItemList.module.css';


const LinkItemList = ({title, image, url}) => {
    return (
        <Link to={url}>
            <div className={styles.item}>
                <figure className={`${styles.figure} image is-3by4`}>
                    <img
                        src={image}
                        alt="Placeholder image"
                    />
                </figure>
                <span>{title}</span>
            </div>
        </Link>
    )
}

export default LinkItemList