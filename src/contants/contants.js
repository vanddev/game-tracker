import { mdiCheckBold } from '@mdi/js';
import { mdiHeart } from '@mdi/js';
import { mdiCancel } from '@mdi/js';

const statusList = [
    { icon: mdiCheckBold, label: 'Finished', id: 'finished' },
    { icon: mdiHeart, label: 'Want to Play', id: 'wishlist' },
    { icon: mdiCancel, label: 'Dropped', id: 'dropped' },
]

const chartLabelColor = '#e6e6e6';

const chartDatasetLabelColor = '#e6e6e6';

const chartRulerColor = '#ffffff5e';

const chartGridColor = '#ffffff5e';


export { 
    statusList, 
    chartLabelColor,
    chartDatasetLabelColor,
    chartRulerColor,
    chartGridColor 
};