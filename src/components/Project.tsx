import React from "react";

type ProjectItemData = {
  name: string;
  link: string;
  description: string;
  responsibilities: string[];
  technologies: string;
  troubleShooting: {
    workLinks: {
      name: string;
      notionLink: string;
    }[];
    workList: string[];
  };
  whatILearned: string[];
};

type ProjectListData = {
  projectList: ProjectItemData[];
};

const Project = () => {
  const PROJECT_CONTENT_DATA: ProjectListData = require("../data/ProjectList.json");
  return (
    <section className="flex flex-col gap-8">
      <h2 className="my-3 font-semibold text-orange-600 text-headline4">Project Experience.</h2>
      {PROJECT_CONTENT_DATA.projectList.map((projcetItem: ProjectItemData, projectItemIndex: number) => (
        <React.Fragment key={projectItemIndex}>
          <article className="flex flex-col gap-3 [&>*>ul>li]:my-0.5">
            <h2 className="font-semibold text-subtitle mobile:text-subtitle2 text-secondary-dark">
              <a href="https://github.com/goldmayo/allcamp-graphql-client">{projcetItem.name}</a>
            </h2>
            <span className="text-small">{projcetItem.description}</span>
            <div className="flex justify-between">
              <span className="font-semibold">담당 업무</span>
              <div className="w-3/4">
                <ul className="px-2 ml-6 list-disc list-inside -indent-6">
                  {projcetItem.responsibilities.map((responsibility: string, responsibilityIndex: number) => (
                    <li key={responsibilityIndex} className="">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">사용 기술</span>
              <div className="w-3/4">
                <ul className="px-2 ml-6 list-disc list-inside -indent-6">
                  <li className="">{projcetItem.technologies}</li>
                </ul>
              </div>
            </div>
            <div className="">
              <span className="font-semibold text-secondary">🎯Trouble Shooting</span>
              <ul className="flex flex-col gap-2 px-2 ml-6 list-disc list-inside -indent-6">
                {projcetItem.troubleShooting.workLinks.length !== 0 ?? (
                  <>
                    {projcetItem.troubleShooting.workLinks.map(
                      (workLink: { name: string; notionLink: string }, workLinkIndex: number) => (
                        <li key={workLinkIndex} className="">
                          <a className={"text-link font-semibold"} href={`${workLink.notionLink}`}>
                            {workLink.name}
                          </a>
                        </li>
                      )
                    )}
                  </>
                )}
                {projcetItem.troubleShooting.workList.map((worklistItem: string, worklistIndex: number) => (
                  <li key={worklistIndex} className="">
                    {worklistItem.split("\\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index !== worklistItem.split("\\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </li>
                ))}
              </ul>
            </div>

            <div className="">
              <span className="font-semibold">프로젝트를 진행하며 경험하고 체득한 부분</span>
              <ul className="flex flex-col gap-2 px-2 ml-6 list-disc list-inside -indent-6">
                {projcetItem.whatILearned.map((whatILearnedItem: string, whatILearnedIndex: number) => (
                  <li key={whatILearnedIndex} className="">
                    {`${whatILearnedItem}`}
                  </li>
                ))}
              </ul>
            </div>
          </article>
          {projectItemIndex !== PROJECT_CONTENT_DATA.projectList.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </section>
  );
};

export default Project;
