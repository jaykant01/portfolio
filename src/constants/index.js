import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";

export const LINKS = [
  { href: "#Hero", label: "Home" },
  { href: "#About", label: "About Me" },
  { href: "#Technologies", label: "Skills" },
  { href: "#Projects", label: "Projects" },
  { href: "#Contact", label: "Contact" },
];

export const ABOUT_TEXT = `Hi, I'm Jaykant, a passionate BTech Computer Science & Engineering student in 3rd year at GLA University. I have a strong background in software development and problem-solving, with a particular focus on Data Structures & Algorithms (JAVA) and Full Stack Development.
Completed Basics of AWS CLOUD COMPUTING - EC2, S3, VPC, IAM | and also looking forward to do more in cloud computing.
I’m passionate about exploring new technologies and building solutions that make a difference. Whether it's creating a responsive web app, optimizing backend performance, or integrating complex APIs, I thrive on tackling challenges head-on.
When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, or sharpening my problem-solving skills on platforms like LeetCode and Codeforces.
Also Exploring Linux & Debian for Knowledge purpose.
Like to play basket ball & Music
Let's connect and create something amazing together!`;

export const PROJECTS = [
  {
    title: "Address-Book Website",
    image: project1,
    description:
      "A fully functional website with features like Add, Delete, favourite contacts, and user authentication.",
    technologies: ["HTML", "Tailwind CSS", "Angular", "FireBase", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
        "A personal portfolio website showcasing projects, skills, Download resume,and contact information.",
    technologies: ["HTML", "Tailwind CSS", "React", "Vite"],
  },
  {
    title: "Angular Project Setup CLI",
    image: project3,
    description:
        "ng-setup is a simple and powerful CLI tool that helps developers set up an Angular project quickly with Tailwind CSS, Firebase, and different styling options.",
    technologies: ["Javascript"],
  },
];

export const CONTACT = {
  address: "GLA University Mathura ",
  phoneNo: "9112526004",
  email: "jaykanty24092004@gmail.com",
};
