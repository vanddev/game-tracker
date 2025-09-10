import styles from './SideMenu.module.css';
import { House, Library, Sparkles, ChartNoAxesColumn,LayoutGrid  } from 'lucide-react';
import { Link } from "react-router-dom"
const SideMenu = () => {
    
    const strokeWidth = 2;
    const iconSize = 16;
    
    return (
        <aside className={styles.sideMenu}>
            <nav>
                <ul>
                    <li><Link href="/" className='menu_button'><House size={iconSize} strokeWidth={strokeWidth} /><span>Home</span></Link></li>
                    <li><Link href="/" className='menu_button'><Library size={iconSize} strokeWidth={strokeWidth} /><span>Library</span></Link></li>
                    <li><Link href="/" className='menu_button'><LayoutGrid size={iconSize} strokeWidth={strokeWidth} /><span>Explorer</span></Link></li>
                    <li><Link href="/" className='menu_button'><Sparkles size={iconSize} strokeWidth={strokeWidth} /><span>Suggested</span></Link></li>
                    <li><Link href="/" className='menu_button'><ChartNoAxesColumn  size={iconSize} strokeWidth={strokeWidth} /><span>Statistics</span></Link></li>
                    {/* Add more menu items as needed */}
                </ul>
            </nav>
        </aside>
    );
};

export default SideMenu;