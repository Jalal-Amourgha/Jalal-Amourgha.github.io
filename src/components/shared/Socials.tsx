import { FaLinkedinIn, FaGithub, FaCode } from "react-icons/fa";
const socials = [
  {
    id: 1,
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/jalal-amourgha/",
  },
  {
    id: 2,
    icon: <FaGithub />,
    href: "https://github.com/Jalal-Amourgha",
  },
  {
    id: 3,
    icon: <FaCode />,
    href: "https://www.codewars.com/users/Jalal_Amr",
  },
];
const Socials = () => {
  return (
    <div className="fixed bottom-0 right-10">
      <div className="flex flex-col items-center text-white">
        <div className="flex flex-row md:flex-col gap-2 mb-2">
          {socials.map((social) => (
            <a
              className="text-2xl hover:text-primary"
              href={social.href}
              target="_blank"
              key={social.id}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <hr className="h-14 bg-white w-[4px] hidden md:block" />
      </div>
    </div>
  );
};

export default Socials;
