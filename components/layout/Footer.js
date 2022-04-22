const Footer = () => {
    return (
        <div className="h-[255px] bg-[#0e1117] flex items-center text-[#C6C2CD]">
            <div className="basis-1/4 p-10"><img src='/logo.png' alt='logo' /></div>
            <div className="basis-2/4 text-center"><h4>&copy; 2022 TIU | MODELING All rights reserved.</h4></div>
            <div className="basis-1/4">
                <h1 className='text-[#C6C2CD]'>TIU <span className='text-[#BE1E28]'>|</span> MODELING</h1>
                <div>Architectural Modeling &#38; Solutions</div>
            </div>
        </div>
    );
};

export default Footer;