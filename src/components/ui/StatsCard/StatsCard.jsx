import styles from './StatsCard.module.css';
import Icon from '@mdi/react';
import { mdiCheckCircleOutline } from '@mdi/js';

const StatsCard = ({title, stats, description, iconPath}) => {
    return (
        <div className={ styles.card }>
            <div className={ styles.content }>
                <div>
                    <p className={ styles.title }>{ title }</p>
                    <p className={ styles.stats }>{ stats }</p>
                    {/* <p className={ styles.description }>{ description }</p> */}
                </div>
                <div className={ styles.icon }>
                    <Icon path={ iconPath } size={1.4} />
                </div>
            </div>
        </div>
    )
}

export default StatsCard