import Link from 'next/link';
import CrossIcon from '../icons/CrossIcon';
import InstagramIcon from '../icons/InstagramIcon';
import TwitterIcon from '../icons/TwitterIcon';

const Backdrop = (props) => {
    return (<div className='basis-3/5 bg-[#0e1117] opacity-60' onClick={props.onClick}></div>);
};

const MenuModal = (props) => {
    return (
        <div className='flex fixed top-0 left-0 right-0 bottom-0'>
            <Backdrop onClick={props.onClick} />
            <div className='relative basis-2/5 flex flex-col bg-[#0e1117] text-white items-center capitalize'>
                <span className='cursor-pointer basis-1/8 transition ease-linear hover:rotate-180' onClick={props.onClick}><CrossIcon /></span>
                <div className='basis-1/2 flex flex-col items-center font-semibold text-[1.75rem] justify-evenly'>
                    <Link href='/'><p onClick={props.onClick} className='cursor-pointer hover:text-[#BE1E28] transition ease-in-out'>home | əsas</p></Link>
                    <Link href='/about'><p onClick={props.onClick} className='cursor-pointer hover:text-[#BE1E28] transition ease-in-out'>about | haqqımızda</p></Link>
                    <Link href='/gallery'><p onClick={props.onClick} className='cursor-pointer hover:text-[#BE1E28] transition ease-in-out'>gallery | qalereya</p></Link>
                    <Link href='/contact'><p onClick={props.onClick} className='cursor-pointer hover:text-[#BE1E28] transition ease-in-out'>contact | əlaqə</p></Link>
                </div>
                <div className='basis-1/8 flex'>
                    <TwitterIcon />
                    <InstagramIcon />
                </div>
            </div>
        </div>
    );
};

export default MenuModal;