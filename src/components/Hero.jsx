import profilePic from "../assets/jaykantYadavProfile.jpg"
import { HERO_CONTENT } from "../constants"
function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:p-8">
                    <img src={profilePic} alt="Jaykant Yadav" className="border
                    border-stone-900 rounded-3xl" />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:itmes-start mt-10">
                    <h1 className="pb-16 text-6xl tracking-tighter lg:mt-16
                    lg:text-8xl">Jaykant Yadav</h1>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-500
                     to-purple-500 bg-clip-text text-4xl tracking-tight
                    text-transparent">Computer Engineer & Developer</span>
                    <p className="my-2 max-w-lg py-6 text-xl leading-relaxed
                    tracking-tighter">
                        {HERO_CONTENT}
                    </p>
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