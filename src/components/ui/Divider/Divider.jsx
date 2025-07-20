import styles from './Divider.module.css';

const Divider = ({margin, marginTop, marginBottom}) => {
    const dividerStyle = {
        marginTop: marginTop || '0',
        marginBottom: marginBottom || '0'
    };
    return (
        <hr className={styles.divider} style={{'marginTop': dividerStyle.marginTop, 'marginBottom': dividerStyle.marginBottom}} />
    );
}

export default Divider;