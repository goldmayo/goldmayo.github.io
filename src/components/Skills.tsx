import React, { FC } from "react";

type SkillContents = {
  category: string;
  list: {
    title: string;
    description: string[];
  }[];
};

type SkillContentData = {
  skillList: SkillContents[];
};

const Skills: FC = () => {
  const SKILL_CONENTS_DATA: SkillContentData = require("../data/SkillList.json");
  return (
    <section>
      <h2 className="my-3 font-semibold text-orange-600 text-headline4">Skill.</h2>
      <section className="">
        {SKILL_CONENTS_DATA.skillList.map((skill: SkillContents, skillIndex: number) => (
          <React.Fragment key={skillIndex}>
            <h3 className="px-1 py-1 font-semibold bg-amber-100 text-subtitle2">{skill.category}</h3>
            <ul className="flex flex-col p-2 ml-6 list-disc list-inside -indent-6">
              {skill.list.map((item, itemIndex: number) => (
                <li key={itemIndex} className="my-2">
                  <span>
                    {item.title ?? (
                      <>
                        <span>{item.title}</span>
                      </>
                    )}
                    <br />
                    {item.description.map((content: string, contentIndex: number) => (
                      <React.Fragment key={contentIndex}>
                        <span>{content}</span>
                        <br />
                      </React.Fragment>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </section>
    </section>
  );
};

export default Skills;
