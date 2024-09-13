import Link from "next/link";
import React from "react";

const NavLink = ({ href, title }) => {
  return (
    <Link
      className="py-2 px-4 text-white rounded-md hover:text-gray-300 transition-colors duration-300"
      href={href}
    >
      {title}
    </Link>
  );
};

export default NavLink;
