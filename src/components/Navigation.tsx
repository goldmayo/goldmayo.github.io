import React from "react";
import { Link } from "gatsby";
const Navigation = () => {
  return (
    <nav className="text-headline4 tablet:text-subtitle2 mobile:text-subtitle2 ">
      <ul className="flex ">
        <li className="px-2 py-1">
          <Link to="/">About</Link>
        </li>
        <li className="px-2 py-1">
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
