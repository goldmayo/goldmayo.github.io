import React, { FC } from "react";

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<IMainLayoutProps> = (props) => {
  return <main className="flex flex-col gap-12">{props.children}</main>;
};

export default MainLayout;
