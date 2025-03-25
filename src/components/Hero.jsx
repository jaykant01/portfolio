import profilePic from "../assets/jaykantProfile.jpg"
import {FaInstagram, FaLinkedin} from "react-icons/fa";
import {FaGithub, FaSquareXTwitter} from "react-icons/fa6";
function Hero() {
  return (
    <div id="Hero" className="border-b border-neutral-900 pt-36 pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:p-8">
                    <img src={profilePic} alt="Jaykant Yadav" className="border
                    border-stone-900 rounded-full" />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:itmes-start mt-10">
                    <h1 className="text-4xl tracking-tighter lg:mt-16
                    lg:text-6xl ">Hello It&#39;s</h1>
                    <h2 className="pb-16 text-6xl tracking-tighter lg:mt-16
                    lg:text-8xl bg-gradient-to-r from-stone-300 via-slate-500
                     to-red-600 bg-clip-text tracking-tighter
                    text-transparent animate-bounce ">Jaykant Yadav</h2>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-500
                     to-purple-500 bg-clip-text text-4xl tracking-tight
                    text-transparent">Java & FullStack Developer</span>

                    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                        <a href="https://www.linkedin.com/in/jaykantyadav/"
                           target="_blank"
                           rel="noopener noreferrer"
                           label="Linkedin">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/jaykant01"
                           target="_blank"
                           rel="noopener noreferrer"
                           label="Github">
                            <FaGithub />
                        </a>
                        <a href="https://www.instagram.com/jaykant_02/"
                           target="_blank"
                           rel="noopener noreferrer"
                           label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://x.com/jaykant_02"
                           target="_blank"
                           rel="noopener noreferrer"
                           label="XTwitter">
                            <FaSquareXTwitter />
                        </a>
                    </div>

                    <a href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download 
                    className="bg-white rounded-full p-4 text-sm
                    text-stone-800 mb-10 ">
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero