import styles from './StatsCard.module.css';
import Icon from '@mdi/react';
import { useResponsiveContext } from '../../../context/ResponsiveContext';

const StatsCard = ({title, stats, iconPath}) => {
    
    const { isMobile } = useResponsiveContext()

    return (
        <div className={ styles.card }>
            <div className={ styles.content }>
                <div>
                    <p className={ styles.title }>{ title }</p>
                    <p className={ styles.stats }>{ stats }</p>
                </div>
                <div className={ styles.icon }>
                    <Icon path={ iconPath } size={ isMobile ? 1.2 : 1.4} />
                </div>
            </div>
        </div>
    )
}

export default StatsCard