import logo from "../assets/jaykantYadavLogo.png"
import { useState } from "react"
import {LINKS} from "../constants/index.js";
import {RiCloseFill, RiMenu3Fill} from "react-icons/ri";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleLinkClick = () => {
        setMenuOpen(false)
    }

    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="backdrop-blur flex justify-between items-center max-w-7xl mx-auto
            md:my-2  md:rounded-xl ">
                <div className="text-white font-semibold text-lg uppercase">
                    <span >
                        <img src={logo} className="mx" width={120} height={70} alt="Logo" />
                    </span>
                </div>

                <div className="hidden md:flex space-x-8">
                    {LINKS.map((link, index) => (
                        <a href={link.href} key={index} className="text-white hover:text-stone-400 transition duration-300">
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}
                            className="text-white focus:outline-none" aria-label=
                                {menuOpen ? 'Close menu' : 'Open menu'}>
                        {menuOpen ? (
                            <RiCloseFill className="w-6 h-6" />
                            ) : (
                                <RiMenu3Fill className="w-6 h-6 mr-4" />
                            )}
                        </button>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden p-2 bg-stone-950/30 backdrop-blur rounded-xl flex flex-col space-y-4 max-w-6xl mx-auto">
                    {LINKS.map((link, index) => (
                        <a href={link.href} key={index} className="text-white hover:text-stone-400 transition duration-300" onClick={handleLinkClick}>
                            {link.label}
                        </a>
                    ))}
                </div>
            )}

        </nav>
    )
}

export default Navbar