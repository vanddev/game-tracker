import { mdiCheckBold } from '@mdi/js';
import { mdiHeart } from '@mdi/js';
import { mdiCancel } from '@mdi/js';

const statusList = [
    { icon: mdiCheckBold, label: 'Finished', id: 'finished' },
    { icon: mdiHeart, label: 'Want to Play', id: 'wishlist' },
    { icon: mdiCancel, label: 'Dropped', id: 'dropped' },
]

export { statusList };