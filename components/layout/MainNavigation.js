import { useState } from 'react';

import MenuModal from '../modals/MenuModal';

import SearchIcon from '../icons/SearchIcon';
import HamburgerIcon from '../icons/HamburgerIcon';

function MainNavigation() {
    const [showMenu, setShowMenu] = useState(false);

    const searchClickHandler = () => {
        console.log('');
    };

    const navClickHandler = () => {
        setShowMenu((prevState) => {
            return !prevState;
        });

        console.log(showMenu);
    };

    return (
        <div className='fixed top-0 left-0 right-0 h-[64px] bg-[#0e1117] flex items-center'>
            <div className='basis-11/12'> 
                <img src='/logo.png' alt='logo' />
            </div>
            <div className='basis-1/12 flex justify-around'>
                <div onClick={searchClickHandler}><SearchIcon /></div>
                <div onClick={navClickHandler}><HamburgerIcon /></div>
                {/* {showMenu && <MenuModal />} */}
            </div>
        </div>
    );
}

export default MainNavigation;