import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/About",
  },
  {
    title: "Contact",
    link: "/Contact",
  },
  {
    title: "Blog",
    link: "/BlogPage",
  },
];

const Footer = () => {
  return (
    <div className="text-white bg-[#343434] h-[80%] dark:bg-[#181E24] flex justify-center items-center">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-4 px-4">
          <p className="text-green-600 text-4xl font-bold mb-8 mt-4">Platter Palooza</p>
            <p>
            Its mission is to ensure nobody has a bad meal by helping people discover restaurants, building dining experiences, and enabling restaurants to create experiences.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <Link to={link.link}>
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <Link to={link.link}>
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaYoutube className="text-4xl hover:text-red-700" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-blue-600" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-sky-700" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Pune, Maharashtra</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+91 8700618589</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;