import React, { FC } from "react";
import { SiGithub, SiDiscord, SiNotion } from "react-icons/si";
import { MdDarkMode, MdSunny, MdOutlineKeyboardControlKey, MdOutlineKeyboardArrowDown } from "react-icons/md";

interface IconProps {
  size: string;
  color: string;
}

export const GithubIcon: FC<IconProps> = ({ ...props }) => {
  return <SiGithub size={props.size} color={props.color} />;
};
export const DiscordIcon: FC<IconProps> = ({ ...props }) => {
  return <SiDiscord size={props.size} color={props.color} />;
};
export const NotionIcon: FC<IconProps> = ({ ...props }) => {
  return <SiNotion size={props.size} color={props.color} />;
};
export const DarkModeIcon: FC<IconProps> = ({ ...props }) => {
  return <MdDarkMode size={props.size} color={props.color} />;
};
export const LightModeIcon: FC<IconProps> = ({ ...props }) => {
  return <MdSunny size={props.size} color={props.color} />;
};
export const ArrowUpIcon: FC<IconProps> = ({ ...props }) => {
  return <MdOutlineKeyboardControlKey size={props.size} color={props.color} />;
};
export const ArrowDownIcon: FC<IconProps> = ({ ...props }) => {
  return <MdOutlineKeyboardArrowDown size={props.size} color={props.color} />;
};
