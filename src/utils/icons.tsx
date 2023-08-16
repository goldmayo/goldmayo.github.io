import React, { FC } from "react";
import { SiGithub, SiDiscord, SiNotion } from "react-icons/si";
import {
  MdDarkMode,
  MdSunny,
  MdOutlineKeyboardControlKey,
  MdOutlineKeyboardArrowDown,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

interface IconProps {
  size: string;
  color: string;
  className?: string;
}

export const GithubIcon: FC<IconProps> = ({ size, color, ...props }) => {
  return <SiGithub size={size} color={color} {...props} />;
};
export const DiscordIcon: FC<IconProps> = ({ size, color, ...props }) => {
  return <SiDiscord size={size} color={color} {...props} />;
};
export const NotionIcon: FC<IconProps> = ({ size, color, ...props }) => {
  return <SiNotion size={size} color={color} {...props} />;
};
export const DarkModeIcon: FC<IconProps> = ({ size, color, ...props }) => {
  return <MdDarkMode size={size} color={color} {...props} />;
};
export const LightModeIcon: FC<IconProps> = ({ size, color, ...props }) => {
  return <MdSunny size={size} color={color} {...props} />;
};
export const ArrowUpIcon: FC<IconProps> = ({ size, color, ...props }) => {
  return <MdOutlineKeyboardControlKey size={size} color={color} {...props} />;
};
export const ArrowDownIcon: FC<IconProps> = ({ size, color, ...props }) => {
  return <MdOutlineKeyboardArrowDown size={size} color={color} {...props} />;
};
export const DoubleArrowRightIcon: FC<IconProps> = ({ size, color, ...props }) => {
  return <MdKeyboardDoubleArrowRight size={size} color={color} {...props} />;
};
