import { FaGithub, FaJava, FaGitAlt, FaAws} from "react-icons/fa6"
import {RiReactjsLine, RiNodejsLine, RiJavascriptLine, RiAngularjsLine} from "react-icons/ri"
import {SiMongodb, SiHtml5, SiTailwindcss, SiMysql, SiDocker, SiSpring} from "react-icons/si"
import { FcLinux, FcDebian } from "react-icons/fc";
import {BiLogoPostgresql} from "react-icons/bi";

const Technologies = () => {
  return (
    <div className="pb-24">
        <h2 className="my-20 text-center text-5xl">Skills & Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="p-4">
                <FaJava className="text-7xl text-red-600" />
            </div>
            <div className="p-4">
                <FaAws className="text-7xl " />
            </div>
            <div className="p-4">
                <SiHtml5 className="text-7xl text-orange-600" />
            </div>
            <div className="p-4">
                <SiTailwindcss className="text-7xl text-blue-400" />
            </div>
            <div>
                <RiJavascriptLine className="text-7xl text-yellow-400" />
            </div>
            <div>
                <RiAngularjsLine className="text-7xl text-red-600"/>
            </div>
            <div className="p-4">
                <SiSpring className="text-7xl text-green-600"/>
            </div>
            <div>
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>
            <div>
                <RiNodejsLine className="text-7xl text-green-500" />
            </div>
            <div>
                <BiLogoPostgresql className="text-7xl text-blue-600" />
            </div>
            <div className="p-4">
                <SiMongodb className="text-7xl text-green-600"/>
            </div>
            <div className="p-4">
                <SiMysql className="text-7xl "/>
            </div>
            <div className="p-4">
                < FaGitAlt className="text-7xl text-orange-700"/>
            </div>
            <div className="p-4">
                <FaGithub  className="text-7xl"/>
            </div>
            <div>
                <SiDocker className="text-7xl text-blue-500" />
            </div>
            <div className="p-4">
                <FcLinux className="text-7xl" />
            </div>
            <div className="p-4">
                <FcDebian className="text-7xl" />
            </div>
    </div>
    </div>
  )
}

export default Technologies