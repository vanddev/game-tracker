import styles from './SideMenu.module.css';
import { Link } from "react-router-dom"
import { useState, useEffect, use } from 'react';
import { sideMenuList } from '../../models/models';

const SideMenu = () => {
    const [activeMenu, setActiveMenu] = useState(0);
    const strokeWidth = 2;
    const iconSize = 16;

    const handleMenuClick = (menuActivated) => {
        setActiveMenu(menuActivated);
    }
    
    return (
        <aside className={styles.sideMenu}>
            <nav>
                <ul>
                    {sideMenuList.map((item, index) => (
                        <li key={index} className={activeMenu === index ? styles.active : ''} onClick={() => handleMenuClick(index)}>
                            <Link to={item.link} className='menu_button'>
                                <item.icon size={iconSize} strokeWidth={strokeWidth} />
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default SideMenu;