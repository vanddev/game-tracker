import { Link } from 'react-router-dom';
import styles from './Section.module.css';
import { ArrowRight } from 'lucide-react';

const Section = ({ title, titleLink, removeBackground, children }) => {

    const renderTitle = () => {
        if (titleLink) {
            return (
                <Link to={titleLink} className={styles.titleLink}>
                    <h3>{title} <ArrowRight className={styles.arrow} size={18}/></h3>
                </Link>
            );
        }

        return <h3>{title}</h3>;
    }

    return (
        <section className={`${styles.wrapper} ${ removeBackground ? '' : styles.dark_background + ' dark-border'}`}>
            <div  className={styles.title}>
                { renderTitle() }
            </div>
            { children }
        </section>
    )
}

export default Section