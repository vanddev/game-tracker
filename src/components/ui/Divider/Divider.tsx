import styles from './Divider.module.css';

interface DividerProps {
    marginTop?: string;
    marginBottom?: string;
}

function Divider({ marginTop, marginBottom }: DividerProps) {
    const dividerStyle = {
        marginTop: marginTop || '0',
        marginBottom: marginBottom || '0'
    };
    return (
        <hr className={styles.divider} style={{'marginTop': dividerStyle.marginTop, 'marginBottom': dividerStyle.marginBottom}} />
    );
}

export default Divider;