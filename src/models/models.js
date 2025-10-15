import { mdiCheckBold } from '@mdi/js';
import { mdiHeart } from '@mdi/js';
import { mdiCancel } from '@mdi/js';
import { House, Library, LayoutGrid, Sparkles, ChartNoAxesColumn } from 'lucide-react';

const statusList = [
    { icon: mdiCheckBold, label: 'Finished', id: 'finished' },
    { icon: mdiHeart, label: 'Want to Play', id: 'wishlist' },
    { icon: mdiCancel, label: 'Dropped', id: 'dropped' },
]

const sideMenuList = [
    { link: "/", icon: House, label: 'Home'},
    { link: "/library", icon: Library, label: 'Library'},
    // { link: "/", icon: LayoutGrid, label: 'Explorer'},
    // { link: "/", icon: Sparkles, label: 'Suggested'},
    { link: "/statistics", icon: ChartNoAxesColumn, label: 'Statistics'},
]

const sideMenu = {
    home: { link: "/", icon: House, label: 'Home'},
    library: { link: "/library", icon: Library, label: 'Library'},
    explorer: { link: "/explorer", icon: LayoutGrid, label: 'Explorer'},
    // suggested: { link: "/", icon: Sparkles, label: 'Suggested'},
    statistics: { link: "/statistics", icon: ChartNoAxesColumn, label: 'Statistics'},
}

export { statusList, sideMenuList };