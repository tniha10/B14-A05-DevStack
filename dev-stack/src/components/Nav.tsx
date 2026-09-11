import Logo from "../assets/logo-text.png";

const Nav = () => {
    return (
        <nav className="sticky flex items-center justify-between bg-white border-b border-gray-100 px-16 py-4"> {}
           <div className="flex items-center"> <img src={Logo} alt="Logo" /></div>

        <div className="flex items-center gap-8">
            <a href="" className="text-[#DB2777] text-sm font-medium">Home</a>
            <a href="" className="text-[#475569] text-sm font-medium">Technologies</a>
            <a href="" className="text-[#475569] text-sm font-medium">Projects</a>
            <a href="" className="text-[#475569] text-sm font-medium">About</a>
            <a href="" className="text-[#475569] text-sm font-medium">Contact</a>
        </div>

        <div className="flex items-center gap-4">
            <button className=" text-[334155] text-sm font-medium">Sign In</button>
            <button className="bg-[#D91B7E] text-white text-sm font-medium py-2 px-4 rounded-full">Sign Up</button>
        </div>

        </nav>
    );
};

export default Nav;