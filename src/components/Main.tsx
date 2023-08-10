import React from "react";
import Skills from "@components/Skills";
import Hero from "@components/Hero";
import Project from "@components/Project";

const Main = () => {
  return (
    <main className="flex flex-col gap-12">
      <Hero />
      <hr />
      <Skills />
      <hr />
      <Project />
      <hr />
    </main>
  );
};

export default Main;
