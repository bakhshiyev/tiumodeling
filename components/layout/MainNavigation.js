import { useState } from 'react';
import { useRouter } from 'next/router';

import MenuModal from '../modals/MenuModal';

import SearchIcon from '../icons/SearchIcon';
import HamburgerIcon from '../icons/HamburgerIcon';

function MainNavigation() {
    const [showMenu, setShowMenu] = useState(false);
    const router = useRouter();

    const searchClickHandler = () => {
        console.log('');
    };

    const navClickHandler = () => {
        setShowMenu((prevState) => {
            return !prevState;
        });

        console.log(showMenu);
    };

    const closeMenuHandler = () => {
        setShowMenu(false);
    };

    const directHome = () => {
        router.push('/')
    };

    return (
        <div className='z-50 fixed top-0 left-0 right-0 h-[96px] flex items-center transition-colors ease-in-out hover:bg-[rgb(14,17,23,0.7)]'>
            <div className='basis-11/12'>
                {/* <img src='/logob.png' alt='logo' /> */}
                <h1 onClick={directHome} className='cursor-pointer text-white ml-4'>TIU <span className='text-[#BE1E28]'>|</span> MODELING</h1>
            </div>
            <div className='basis-1/12 flex justify-around'>
                <div onClick={searchClickHandler} className="cursor-pointer"><SearchIcon /></div>
                <div onClick={navClickHandler} className="cursor-pointer"><HamburgerIcon /></div>
                {showMenu && <MenuModal onClick={closeMenuHandler} />}
            </div>
        </div>
    );
}

export default MainNavigation;