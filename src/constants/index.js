import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const ABOUT_TEXT = `BTech Computer Science & Engineering | 3rd year Student at GLA University | Data Structures & Algorithms(JAVA) | Currently Learning FullStack-development 

Trying My Problem Solving Skill on LeetCode | CodeForces.

Completed Basics of AWS CLOUD COMPUTING - EC2, S3, VPC, IAM | and also looking forward to do more in cloud computing.

Exploring Linux & Debian for Knowledge purpose.

Like to play basket ball & Music`;

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
];

export const CONTACT = {
  address: "GLA University Mathura ",
  phoneNo: "9112526004",
  email: "jaykanty24092004@gmail.com",
};
