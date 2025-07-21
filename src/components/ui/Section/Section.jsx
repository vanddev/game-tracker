import styles from './Section.module.css';

const Section = (props) => {
    return (
        <section className={`${styles.wrapper} ${ props.remove_background ? '' : styles.dark_background + ' dark-border'}`}>
            <h3 className={styles.title}>{ props.title }</h3>
            {props.children}
        </section>
    )
}

export default Section