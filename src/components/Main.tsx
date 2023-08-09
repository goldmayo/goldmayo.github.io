import React from "react";
import MainLayout from "@components/layout/MainLayout";
import Skills from "@components/Skills";
import Hero from "@components/Hero";
import Project from "@components/Project";

const Main = () => {
  return (
    <MainLayout>
      <Hero />
      <hr />
      <Skills />
      <hr />
      <Project />
      <hr />
    </MainLayout>
  );
};

export default Main;
