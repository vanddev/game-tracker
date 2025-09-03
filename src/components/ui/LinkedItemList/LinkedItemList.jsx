import { Link } from "react-router-dom"
import React from "react"
import styles from './LinkedItemList.module.css';


const LinkedItemList = ({ title, image, url, platforms }) => {
    return (
        <div className={styles.item}>
            <Link to={url} title={title}>
                <figure className={`${styles.figure} image is-3by4`}>
                    <img
                        src={image}
                        alt="Placeholder image"
                    />
                </figure>
            </Link>
            <div className={styles.content}>
                <Link to={url}><span>{title}</span></Link>
                {platforms && (
                    <div className={styles.platforms}>
                        {platforms.map((platform, index) => (
                            <React.Fragment key={index}>
                                <Link to={`platforms/${platform}`} className={styles.platform}>
                                    {platform}
                                </Link>
                                {index < platforms.length - 1 && <span>, </span>}
                            </React.Fragment>
                             

                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default LinkedItemList