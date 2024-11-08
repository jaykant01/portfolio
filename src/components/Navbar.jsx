import { FaInstagram, FaLinkedin } from "react-icons/fa"
import logo from "../assets/jaykantYadavLogo.png"
import { FaGithub, FaSquareInstagram, FaSquareXTwitter, FaTwitter } from "react-icons/fa6"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src={logo} className="mx-2" width={140} height={100} alt="Logo" />
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/jaykantyadav/"
            target="_blank" 
            rel="noopener noreferrer" 
            arial-label="Linkedin">
                <FaLinkedin />
            </a>
            <a href="https://github.com/jaykant01"
            target="_blank" 
            rel="noopener noreferrer" 
            arial-label="Github">
                <FaGithub />
            </a>
            <a href="https://www.instagram.com/jaykant_02/"
            target="_blank" 
            rel="noopener noreferrer" 
            arial-label="Instagram">
                <FaInstagram />
            </a>
            <a href="https://x.com/jaykant_02"
            target="_blank" 
            rel="noopener noreferrer" 
            arial-label="XTwitter">
                <FaSquareXTwitter />
            </a>
        </div>
    </nav>
  )
}

export default Navbar