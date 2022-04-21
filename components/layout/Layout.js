import MainNavigation from './MainNavigation';

function Layout(props) {
    return (
        <div className="bg-[#0f131c]">
            <MainNavigation />
            <main>{props.children}</main>
        </div>
    );
}

export default Layout;