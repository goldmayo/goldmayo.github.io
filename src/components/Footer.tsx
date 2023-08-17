import React from "react";
import { DiscordIcon, GithubIcon, NotionIcon } from "@utils/icons";
import Logo from "@components/Logo";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 p-8">
      <div className="flex flex-wrap items-center justify-around">
        <a href="/" className=" text-headline4">
          <Logo />
        </a>
        <section className="">
          <ul className="flex items-center gap-4">
            <li className="hover:text-primary active:text-teal-500">
              <a className="" href="https://github.com/goldmayo">
                <GithubIcon size={"1.5rem"} color={""} />
                <span className="absolute w-4 h-[1px] overflow-hidden ">github</span>
              </a>
            </li>
            <li className="hover:text-indigo-500 active:text-indigo-700">
              <a className="" href="/">
                <DiscordIcon size={"1.5rem"} color={""} />
                <span className="absolute w-4 h-[1px] overflow-hidden ">discord</span>
              </a>
            </li>
            <li className="hover:text-primary-dark active:text-yellow-600">
              <a className="" href="https://harmless-hibiscus-5de.notion.site/ce2d56ef6ab64873bf20f7b837774c45?pvs=4">
                <NotionIcon size={"1.5rem"} color={""} />
                <span className="absolute w-4 h-[1px] overflow-hidden ">notion</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <section className="flex-wrap items-center mx-auto my-0flex text-small text-paragraph">
        <p>© 2020 - 2023 Hyun SeungJai All Rights Reserved.</p>
      </section>
    </footer>
  );
};

export default Footer;
