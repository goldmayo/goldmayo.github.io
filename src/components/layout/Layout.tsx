import React, { FC } from "react";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = (props) => {
  return <div className="max-w-[1100px] mx-auto py-0 px-8">{props.children}</div>;
};

export default Layout;
