import React from "react";

const Navigation = () => {
  return (
    <nav className="text-headline4 tablet:text-subtitle2 mobile:text-subtitle2 ">
      <ul className="flex ">
        <li className="px-2 py-1">
          <a href="/">About</a>
        </li>
        <li className="px-2 py-1">
          <a href="/">Post</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
