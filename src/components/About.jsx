import {ABOUT_TEXT} from "../constants/index.js";
const About = () => {
  return (
    <div id="About" className="border-b border-neutral-900 pb-8">
        <h1 className="my-20 text-center text-6xl">
            About
            <span className="text-neutral-500"> Me</span>
        </h1>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-full">
                <div className="flex justify-center">
                    <p className="my-2 max-w-6xl py-6 text-lg tracking-widest leading-loose">
                        {ABOUT_TEXT}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About