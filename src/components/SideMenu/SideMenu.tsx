import styles from './SideMenu.module.css';
import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from 'react';

interface SideMenuProps {
    items: {
        link: string;
        icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
        label: string;
        routes?: string[];
    }[];
}

function SideMenu({ items } : SideMenuProps) {
    const [activeMenu, setActiveMenu] = useState(0);
    const location = useLocation();
    const strokeWidth = 2;
    const iconSize = 16;

    function handleMenuClick (menuActivated: number) {
        setActiveMenu(menuActivated);
    }

    useEffect(() => {
        const currentPath = location.pathname;
        const foundIndex = items.findIndex(item => {
            if (currentPath === '/' && item.link === '/') return true;
            if (item.routes) {
                return item.routes.some(route => currentPath.includes(route));
            }
            return currentPath.includes(item.link) && item.link !== '/'
        });
        if (foundIndex !== -1) {
            setActiveMenu(foundIndex);
        }
    }, [location]);
    
    return (
        <aside className={styles.sideMenu}>
            <nav>
                <ul>
                    {items.map((item, index) => (
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