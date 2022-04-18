import Link from 'next/link';
import CrossIcon from '../icons/CrossIcon';

import styles from './MenuModal.module.css';

const MenuModal = () => {
    return (<div className={styles.nav}>
        <span><CrossIcon /></span>
        <Link href='/about'>about | haqqımızda</Link>
        <Link href='/gallery'>gallery | qalereya</Link>
        <Link href='/contact'>contact | əlaqə</Link>
    </div>);
};

export default MenuModal;