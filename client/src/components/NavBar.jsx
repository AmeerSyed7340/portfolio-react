import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "experience" },
    { id: 4, link: "portfolio" },
    { id: 5, link: "contact" },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-myName ml-2">Ameer</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        {/* <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>Home</li> */}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="md:hidden cursor-pointer pr-4 text-gray-500 hover:text-white"
      >
        {nav ? (
          <FaTimes size={20} />
        ) : (
          <FaBars size={20} onClick={() => setNav(!nav)} />
        )}
      </div>

      {nav && (
        <ul className="md:hidden absolute top-20 left-0 w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-800">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-6 cursor-pointer capitalize text-2xl text-gray-500 hover:scale-105 hover:text-white duration-200"
            >
              <Link
                to={link}
                smooth
                duration={500}
                onClick={() => setNav(!nav)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
