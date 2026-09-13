import Logo from "../assets/logo-text.png"
import githubIcon from "../assets/github.png";
import twitterIcon from "../assets/x.png";
import linkedinIcon from "../assets/linkedin.png"

const Footer = () => {
    return (
       <footer className="border-t border-[#F1F5F9] bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-12">
            <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-4 md:gap-12">

                {/*Logo and Brand*/}
                <div className="md:col-span-1">
                    <img src={Logo} alt="Dev Stack" className="h-8 w-auto object-contain"/>

                    {/*Description*/}
                    <p className="mt-4 max-w-xs text-sm text-[#64748B]">Curated tools, technologies, and resources for developers building modern software.</p>

                    {/*Social Links*/}
                    <div className="mt-5 flex items-center gap-5">
                        <a href="" className="flex items-center gap-2 text-sm text-[#475569]">
                         <img src={githubIcon} alt="Github" className="h-4 w-4"/> 
                          <span>Github</span>
                        </a>

                        <a href="" className="flex items-center gap-2 text-sm text-[#475569]">
                         <img src={twitterIcon} alt="Twitter" className="h-4 w-4"/> 
                          <span>Twitter</span>
                        </a>

                        <a href="" className="flex items-center gap-2 text-sm text-[#475569]">
                         <img src={linkedinIcon} alt="LinkedIn" className="h-4 w-4"/> 
                          <span>LinkedIn</span>
                        </a>
                    </div>
                </div>

                {/*Product*/}
                <div className="flex flex-col gap-3">
                    <h3 className="mb-1 text-xs font-bold text-[#0F172A]">PRODUCT</h3>
                    <a href="" className="text-sm text-[#64748B]">Home</a>
                    <a href="" className="text-sm text-[#64748B]">Technologies</a>
                    <a href="" className="text-sm text-[#64748B]">Projects</a>
                </div>

                {/*Company*/}
                <div className="flex flex-col gap-3">
                    <h3 className="mb-1 text-xs font-bold text-[#0F172A]">COMPANY</h3>
                    <a href="" className="text-sm text-[#64748B]">About</a>
                    <a href="" className="text-sm text-[#64748B]">Contact</a>
                    <a href="" className="text-sm text-[#64748B]">Careers</a>
                </div>

                {/*Legal*/}
                <div className="flex flex-col gap-3">
                    <h3 className="mb-1 text-xs font-bold text-[#0F172A]">LEGAL</h3>
                    <a href="" className="text-sm text-[#64748B]">Privacy Policy</a>
                    <a href="" className="text-sm text-[#64748B]">Terms of Service</a>
                </div>
            </div>

            <div className="flex min-h-14 flex-col items-start justify-between gap-3 border-t border-[#F1F5F9] py-4 sm:flex-row sm:items-center">
                <p className="text-xs text-[#94A3B8]">&copy; 2026 Dev Stack. All rights reserved.</p>
            </div>
        </div>
       </footer>
        
    );
};

export default Footer;