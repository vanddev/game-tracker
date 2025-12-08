import { Link } from 'react-router-dom';
import styles from './Section.module.css';
import { ArrowRight } from 'lucide-react';

interface SectionProps {
    title: string;
    titleLink?: string;
    removeBackground?: boolean;
    children: React.ReactNode;
}

function Section(props: SectionProps) {

    const renderTitle = () => {
        if (props.titleLink) {
            return (
                <Link to={props.titleLink} className={styles.titleLink}>
                    <h3>{props.title} <ArrowRight className={styles.arrow} size={18}/></h3>
                </Link>
            );
        }

        return <h3>{props.title}</h3>;
    }

    return (
        <section className={`${styles.wrapper} ${ props.removeBackground ? '' : styles.dark_background + ' dark-border'}`}>
            <div  className={styles.title}>
                { renderTitle() }
            </div>
            { props.children }
        </section>
    )
}

export default Section