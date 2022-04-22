import MainNavigation from './MainNavigation';
import Footer from './Footer';

function Layout(props) {
    return (
        <div className="bg-[#C6C2CD]">
            <MainNavigation />
            <main>{props.children}</main>
            <Footer />
        </div>
    );
}

export default Layout;