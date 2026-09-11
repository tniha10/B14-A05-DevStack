import Logo from "../assets/logo-text.png";
import Icon from "../assets/hamburger-icon.png";

const Nav = () => {
    return (
        <nav className="sticky flex items-center justify-between bg-white border-b border-gray-100 px-4 py-4 md:px-16"> {/*sticky is used so that the navbar stay put and md - show this normally but hide it when the screen reaches this.*/}

        {/*Mobile menu button*/}
           <div className="flex items-center justify-between w-full md:hidden"> 
                  
                  <div>
                    <img src={Icon} alt="Menu" />
                  </div>

                  <div>
                    <img src={Logo} alt="Logo" />
                  </div>

                  <div className="flex items-center gap-2">
                    <button className=" text-[#334155] text-xs font-medium">Sign In</button>
                    <button className=" bg-[#D91B7E] text-white text-xs font-medium py-2 px-3 rounded-full">Sign Up</button>
                  </div>
            </div>    

           
        {/*Desktop menu*/}
        <div className="hidden md:flex items-center"><img src={Logo} alt="Logo" /></div>

        <div className="hidden md:flex items-center gap-8"> {/* hidden md: flex - hide it on small screens but show it as flex from md and above*/}
            <a href="" className="text-[#DB2777] text-sm font-medium">Home</a>
            <a href="" className="text-[#475569] text-sm font-medium">Technologies</a>
            <a href="" className="text-[#475569] text-sm font-medium">Projects</a>
            <a href="" className="text-[#475569] text-sm font-medium">About</a>
            <a href="" className="text-[#475569] text-sm font-medium">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
            <button className=" text-[#334155] text-sm font-medium">Sign In</button>
            <button className="bg-[#D91B7E] text-white text-sm font-medium py-2 px-4 rounded-full">Sign Up</button>
        </div>

        </nav>
    );
};

export default Nav;