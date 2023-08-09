import React, { FC } from "react";

type SkillContents = {
  category: string;
  list: {
    title: string;
    description: string[];
  }[];
};

const SKILL_CONTENTS_DATA: SkillContents[] = [
  {
    category: "Language",
    list: [
      {
        title: "Javascript",
        description: [
          "JS의 언어적 특징과 ES6 문법을 충분히 이해하고 활용할 수 있습니다.",
          "Typescript를 사용할 수 있습니다.",
        ],
      },
    ],
  },
  {
    category: "Framewrok & Library",
    list: [
      {
        title: "NextJS 13",
        description: ["SPA, SSR, SSG, ISG의 차이를 이해하고 있으며 NextJS가 가지고 있는 장점을 이해하고 있습니다."],
      },
      {
        title: "React 18",
        description: [
          "compound 컴포넌트와 컴포넌트 composition을 사용하여 재사용 가능한 컴포넌트 설계를 할 수 있습니다.",
          "React Hook, Form React Router 등 리액트 라이브러리 활용 경험이 있습니다.",
        ],
      },
      {
        title: "TainwindCSS",
        description: ["반응형 레이아웃 및 디자인 시스템의 스타일 가이드를 적용하고 활용할 수 있습니다."],
      },
    ],
  },
  {
    category: "State Management",
    list: [
      {
        title: "Redux, Zustand",
        description: ["redux-toolkit과 Zustand에 Ducks패턴과 Slice패턴을 적용한 경험이 있습니다."],
      },
    ],
  },
  {
    category: "ETC",
    list: [
      {
        title: "API",
        description: [
          "GraphQL의 특징을 이해하고 활용할 수 있으며 Relay-cursor-base pagination을 구현한 경험이 있습니다.",
          "REST, RESTful, REST API의 의미를 이해하고 있습니다.",
        ],
      },
      {
        title: "Design Pattern",
        description: ["디자인 시스템과 Atomic 디자인 패턴에 대한 이해와 경험이 있습니다."],
      },
    ],
  },
];

const Skills: FC = () => {
  return (
    <section>
      <h2 className="my-3 font-semibold text-orange-600 text-headline4">Skill.</h2>
      <section className="">
        {SKILL_CONTENTS_DATA.map((skill: SkillContents) => (
          <>
            <h3 className="px-1 py-1 font-semibold bg-amber-100 text-subtitle2">{skill.category}</h3>
            <ul className="flex flex-col p-2 ml-6 list-disc list-inside -indent-6">
              {skill.list.map((item) => (
                <li className="my-2">
                  <span>
                    {item.title ?? (
                      <>
                        <span>{item.title}</span>
                      </>
                    )}
                    <br />
                    {item.description.map((content: string) => (
                      <>
                        <span>{content}</span>
                        <br />
                      </>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </>
        ))}
      </section>
    </section>
  );
};

export default Skills;
