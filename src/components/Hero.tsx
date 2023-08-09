import React from "react";
import Introduce from "@components/Introduce";
import Education from "@components/Education";
import Contact from "@components/Contact";

const Hero = () => {
  return (
    <>
      <h1 className="self-center text-headline2 mobile:text-headline4 tablet:text-headline3">
        📋 현승재 | 팀플하고 싶은 개발자
      </h1>
      <section className="flex justify-between gap-5 mobile:flex-col">
        <div className=" basis-1/2">
          <Introduce />
        </div>
        <hr />
        <div className="flex flex-col gap-y-5">
          <Education />
          <hr />
          <Contact />
        </div>
      </section>
    </>
  );
};

export default Hero;
