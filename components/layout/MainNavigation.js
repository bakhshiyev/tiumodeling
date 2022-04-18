import { useState } from 'react';
import SearchIcon from '../icons/SearchIcon';
import HamburgerIcon from '../icons/HamburgerIcon';

import styles from './MainNavigation.module.css';
import MenuModal from '../modals/MenuModal';

function MainNavigation() {
    const [showMenu, setShowMenu] = useState(false);

    const navClickHandler = () => {
        setShowMenu((prevState) => {
            return !prevState;
        });

        console.log(showMenu);
    };

    const searchClickHandler = () => {
        console.log('');
    };

    return (<div className={styles.nav}>
        <div className={styles.logo}>TiuModeling</div>
        <div>
            <span onClick={searchClickHandler}><SearchIcon /></span>
            <span onClick={navClickHandler}><HamburgerIcon /></span>
            {showMenu && <MenuModal />}
        </div>
    </div>);
}

export default MainNavigation;