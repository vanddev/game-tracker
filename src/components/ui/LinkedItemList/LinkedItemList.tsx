import { Link } from "react-router-dom"
import React from "react"
import styles from './LinkedItemList.module.css';
import type { Platform } from "../../../types";

interface LinkedItemListProps {
    title: string;
    image: string;
    url: string;
    platforms?: Platform[];
}

function LinkedItemList({ title, image, url, platforms }: LinkedItemListProps) {
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
                                <Link to={`/games/platforms/${platform}`} className={styles.platform}>
                                    {platform.name}
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