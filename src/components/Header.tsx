import React from "react";
import Logo from "@components/Logo";
import Navigation from "@components/Navigation";

const Header = () => {
  return (
    <header className="mt-4 mb-8">
      <div className="flex items-center justify-between">
        <a href="/" className="mr-auto mobile:text-headline4 text-headline3">
          <h1>
            <Logo />
          </h1>
        </a>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
