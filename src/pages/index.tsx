import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import highlightCode from "@utils/highlightCode";
import { DiscordIcon, GithubIcon, NotionIcon } from "@utils/icons";

export const Head: HeadFC = () => (
  <>
    <title>현승재 | 프론트엔드 개발자</title>
  </>
);

const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    highlightCode();
  });
  return (
    <div className="max-w-[1100px] mx-auto py-0 px-8">
      <header className="mt-4 mb-8">
        <div className="flex items-center justify-between">
          <a href="/" className="mr-auto mobile:text-headline3 text-headline2">
            <h1>
              <span className="text-primary ">&lt;</span>
              <span className="font-semibold text-headline ">HyunSJ</span>
              <span className="text-primary ">&#47;&gt;</span>
            </h1>
          </a>
          <nav className="text-headline3 mobile:text-subtitle2">
            <ul className="flex ">
              <li className="px-2 py-1">
                <a href=""></a>
                <span>About</span>
              </li>
              <li className="px-2 py-1">
                <a href=""></a>
                <span>Post</span>
              </li>
              <li className="px-2 py-1">
                <a href=""></a>
                <span>Contact</span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex flex-col gap-12">
        <h1 className="mx-auto text-headline2 mobile:text-headline3">📋 현승재 | 성장하고 싶은 개발자</h1>

        <section className="text-body mobile:text-small">
          <p className="p-4 my-2 rounded-md bg-stone-200">
            👋안녕하세요! 유연한 설계와 개선점을 찾는 프론트엔드 개발자 현승재입니다.
          </p>
          <pre className="">
            <code className="rounded-md language-javascript">
              &lt;HyunSJ{`\n\t`}
              name={"현승재"} {`\n\t`}
              github=
              <a href="https://github.com/goldmayo">"https://github.com/goldmayo"</a>
              {`\n\t`}
              portfolio=
              <a href="https://hyunseungjai.vercel.app">"https://hyunseungjai.vercel.app"</a>
              {`\n\t`}
              email=
              <a href="mailto:dudtod1596@gmail.com">"dudtod1596@gmail.com"</a>,{`\n\t`}
              phone="010-6370-2071" &#47;&gt;
            </code>
          </pre>
        </section>

        <hr />

        <section>
          <h2 className="my-3 font-semibold text-orange-600 text-headline3">Contact</h2>
          <ul className="flex flex-col gap-2">
            <li className="">
              <a href="mailto:dudtod1596@gmail.com">📧 dudtod1596@gmail.com</a>
            </li>
            <li className="">
              <a href="https://github.com/goldmayo">👾 github.com/goldmayo</a>
            </li>
            <li className="">
              <a href="https://hyunseungjai.vercel.app/">💻 hyunseungjai.vercel.app(포트폴리오)</a>
            </li>
          </ul>
        </section>
        <hr />
        <section>
          <h2 className="my-3 font-semibold text-orange-600 text-headline3">Introduce.</h2>
          <ul className="px-2 ml-6 list-disc list-inside -indent-6 [&>li]:my-2">
            <li className="">
              <span>디자인 시스템과 아토믹 디자인 패턴을 적용한 풀스택 개발 경험이 있습니다.</span>
            </li>
            <li className="">
              <span className="">
                프론트엔드 개발자가 된 이유는 사용자의 UI/UX를 고려하는 개발에 관심이 있기 때문입니다. 어떤 사업에서도
                사용자에게 외관, 인테리어, 서비스가 줄 수 있는 좋은 피드백을 구현화 할 수 있는 사람이 되고 싶어
                프론트엔드 개발자가 되기로 결심했습니다.
              </span>
            </li>
            <li className="">
              <span>
                유연하고 컴포넌트 설계와 자동화된 테스트, 모니터링 시스템을 구축 및 전파할 수 있는 개발자가 되는 것이
                목표입니다.
              </span>
            </li>
          </ul>
        </section>
        <hr />
        <section>
          <h2 className="my-3 font-semibold text-orange-600 text-headline3">Skill.</h2>
          <section>
            <h3 className="px-1 py-1 font-semibold bg-amber-100 text-subtitle2">Language</h3>
            <ul className="flex p-2 ml-6 list-disc list-inside -indent-6">
              <li>
                <span>
                  Javascript, Typescript
                  <br />
                  JS의 언어적 특징과 ES6 문법을 충분히 이해하고 활용할 수 있습니다.
                  <br />
                  TS의 타입 시스템을 활용해 JS의 느슨한 타입이 야기하는 문제를 해결할 수 있습니다.
                </span>
              </li>
            </ul>
          </section>
          <section>
            <h3 className="px-1 py-1 font-semibold bg-amber-100 text-subtitle2">Framework</h3>
            <ul className="flex p-2 ml-6 list-disc list-inside -indent-6">
              <li>
                <span>
                  NextJS
                  <br />
                  SPA, SSR, SSG, ISG의 차이를 이해하고 있으며 NextJS가 가지고 있는 장점을 이해하고 있습니다.
                </span>
              </li>
            </ul>
          </section>
          <section>
            <h3 className="px-1 py-1 font-semibold bg-amber-100 text-subtitle2">State Mangement</h3>
            <ul className="flex p-2 ml-6 list-disc list-inside -indent-6">
              <li>
                <span>
                  Redux, Zustand
                  <br />
                  redux-toolkit과 Zustand에 Ducks패턴과 Slice패턴을 적용한 경험이 있습니다.
                </span>
              </li>
            </ul>
          </section>
          <section>
            <h3 className="px-1 py-1 font-semibold bg-amber-100 text-subtitle2">ETC</h3>
            <ul className="flex flex-col gap-2 p-2 ml-6 list-disc list-inside -indent-6 [&_span]:relative [&_span]:-left-2">
              <li>
                <span>
                  GraphQL
                  <br />
                  GraphQL이 갖는 장단점을 충분히 이해하고 있습니다.
                </span>
              </li>
              <li>
                <span>
                  REST API
                  <br />
                  RESTful의 의미를 이해하고 있고 간단히 사용한 경험이 있습니다.
                </span>
              </li>
              <li>
                <span>
                  Github
                  <br />
                  프로젝트를 진행하는데 필요한 환경을 구축할 수 있습니다.
                </span>
              </li>
            </ul>
          </section>
        </section>
        <hr />
        <section className="flex flex-col gap-8">
          <h2 className="my-3 font-semibold text-orange-600 text-headline3">Project Experience.</h2>
          <article className="flex flex-col gap-3">
            <h2 className="font-semibold text-subtitle mobile:text-subtitle2 text-secondary">
              <a href="https://github.com/goldmayo/allcamp-graphql-client">
                All Camping 올캠핑 Client (2022.08.13 ~ 2022.12.02)
              </a>
            </h2>
            <span className="text-small">아토믹 디자인 시스템을 적용한 전국 캠핑장 정보 조회 개인 프로젝트</span>
            <ul>
              <li className="">
                <a
                  className={"text-secondary-dark"}
                  href="%E1%84%92%E1%85%A7%E1%86%AB%E1%84%89%E1%85%B3%E1%86%BC%E1%84%8C%E1%85%A2%20%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%A9%20%E1%84%89%E1%85%B5%E1%87%81%E1%84%8B%E1%85%B3%E1%86%AB%20%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%8C%E1%85%A1%20adb0c28465d44c7186f28327775b33a9/All%20Camping%20%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%8F%E1%85%A2%E1%86%B7%E1%84%91%E1%85%B5%E1%86%BC%20%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%20%E1%84%89%E1%85%B5%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%86%B7%20%E1%84%80%E1%85%A2%E1%84%89%E1%85%A5%E1%86%AB%E1%84%80%E1%85%B5%20f3f4de2d54d043c9bc99013446e53212.html"
                >
                  📎 All Camping 올캠핑 디자인 시스템 개선기
                </a>
              </li>
              <li className="">
                <a
                  className={"text-secondary-dark"}
                  href="%E1%84%92%E1%85%A7%E1%86%AB%E1%84%89%E1%85%B3%E1%86%BC%E1%84%8C%E1%85%A2%20%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%A9%20%E1%84%89%E1%85%B5%E1%87%81%E1%84%8B%E1%85%B3%E1%86%AB%20%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%8C%E1%85%A1%20adb0c28465d44c7186f28327775b33a9/All%20Camping%20%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%8F%E1%85%A2%E1%86%B7%E1%84%91%E1%85%B5%E1%86%BC%20Client%20Card%20%E1%84%8F%E1%85%A5%E1%86%B7%E1%84%91%E1%85%A9%E1%84%82%E1%85%A5%E1%86%AB%E1%84%90%E1%85%B3%20%E1%84%80%E1%85%A2%E1%84%89%E1%85%A5%E1%86%AB%20ee0599dd23d747d88ffa7fbd92111d14.html"
                >
                  📎 All Camping 올캠핑 Client Card 컴포넌트 개선기
                </a>
              </li>
            </ul>
            <div className="flex justify-between">
              <span className="">담당 업무</span>
              <div className="w-3/4">
                <ul className="px-2 ml-6 list-disc list-inside -indent-6">
                  <li className="">Tailwindcss를 통한 디자인 시스템을 적용한 반응형 레이아웃 구현</li>
                  <li className="">Figma를 사용하여 목업 및 디자인 시스템 설정</li>
                  <li className="">Atomic design 패턴의 컴포넌트 설계와 Storybook 작성</li>
                  <li className="">ApolloClient를 통해 GraphQL Query설계</li>
                  <li className="">Relay-cursor-base 페이지네이션 구현</li>
                  <li className="">Zustand를 사용하여 상세 검색 상태관리 구현</li>
                  <li className="">compound composition 패턴을 적용하여 props drilling현상 해결</li>
                  <li className="">
                    파편화 캠핑 데이터를 이용한 UI 컴포넌트를 재사용 가능한 하나의 컴포넌트로 리팩토링
                  </li>
                  <li className="">NextJS v13으로 전환 작업.</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-between">
              <span className="">사용 기술</span>
              <div className="w-3/4">
                <ul className="px-2 ml-6 list-disc list-inside -indent-6">
                  <li className="">
                    NextJS, React, TypeScript, Zustand, Storybook, GraphQL, TailwindCss, Figma, context API
                  </li>
                </ul>
              </div>
            </div>

            <div className="">
              <span className="font-semibold">프로젝트를 진행하며 경험하고 체득한 부분</span>
              <ul className="flex flex-col gap-2 px-2 ml-6 list-disc list-inside -indent-6">
                <li className="">Zustand를 사용하여 전역 스토어에 slice 패턴과 ducks패턴을 적용했습니다.</li>
                <li className="">
                  디자인 시스템과 아토믹 디자인 패턴 그리고 storybook을 적용하여 디자인 수정 작업에 일관된 의사소통을
                  통해 빠르게 반영하는 경험을 했습니다.
                </li>
                <li className="">SSR 환경에서 GraphQL과 ApolloClient을 사용한 경험을 했습니다. </li>
                <li className="">디자인 시스템과 TailwindCSS를 사용한 컴포넌트관점의 개발을 경험했습니다.</li>
                <li className="">Nextjs를 적용하여 SEO를 개선한 경험을 했습니다.</li>
                <li className="">
                  파편화된 컴포넌트를 compound composition 패턴으로 통합하여 재사용 가능한 컴포넌트로 리팩토링했습니다.
                </li>
              </ul>
            </div>
          </article>
          <hr />
          <article className="flex flex-col gap-3">
            <h2 className="font-semibold text-subtitle mobile:text-subtitle2 text-secondary">
              <a href="https://github.com/goldmayo/allcamp-graphql-service">
                All Camping 올캠핑 Server (2022.07.06 ~ 2022.11.22)
              </a>
            </h2>
            <p className="text-small">한국관광공사 고캠핑 api활용 전국의 캠핑장 정보 제공 개인 프로젝트</p>
            <div className="flex justify-between">
              <span className="">담당 업무</span>
              <div className="w-3/4">
                <ul className="px-2 ml-6 list-disc list-inside -indent-6">
                  <li className="">Spring 쿼츠 스케줄러를 사용한 캠핑장 정보 api 호출 및 Bulk Insert로 DB에 저장</li>
                  <li className="">GraphQL Resolver 구현 및 Query설계</li>
                  <li className="">Querydsl을 사용한 동적 검색 쿼리 구현</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="">사용 기술</span>
              <div className="w-3/4">
                <ul className="px-2 ml-6 list-disc list-inside -indent-6">
                  <li className="">SpringBoot, Java, JPA, Querydsl GraphQL, MariaDB</li>
                </ul>
              </div>
            </div>
            <span className="font-semibold">프로젝트를 진행하며 경험하고 체득한 부분</span>
            <div className="">
              <ul className="flex flex-col gap-2 px-2 ml-6 list-disc list-inside -indent-6">
                <li className="">
                  스케줄러를 통한 외부 api호출부터 수신한 데이터를 DB에 저장하기 까지의 과정의 환경 구축을 경험했습니다.
                </li>
                <li className="">Querydsl과 JPA를 적용해 동적 검색 구현을 경험했습니다.</li>
                <li className="">Relay-cursor-base 페이지네이션 구현을 경험했습니다 .</li>
              </ul>
            </div>
          </article>
          <hr />

          <article className="flex flex-col gap-3">
            <h2 className="font-semibold text-subtitle mobile:text-subtitle2 text-secondary">
              <a href="https://github.com/goldmayo/IGOBADA">IGOBADA 이고바다 (2022.02.14 ~ 2023.01.19)</a>
            </h2>
            <p className="text-small">웹 명함관리 개인 프로젝트</p>

            <div className="flex justify-between">
              <span className="">담당 업무</span>
              <div className="w-3/4">
                <ul className="px-2 ml-6 list-disc list-inside -indent-6">
                  <li className="">Firebase를 통한 Google, Github 소셜 로그인 및 회원가입</li>
                  <li className="">전역 상태 스토어 도입 및 관리</li>
                  <li className="">명함 CRUD 정렬 및 인덱싱</li>
                  <li className="">리팩토링과 최적화를 통해 라이트 하우스 점수 개선</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="">사용 기술</span>
              <div className="w-3/4">
                <ul className="px-2 ml-6 list-disc list-inside -indent-6">
                  <li className="">React, Firebase, Typescript, Redux-toolkit</li>
                </ul>
              </div>
            </div>
            <div className="">
              <span className="font-semibold">프로젝트를 진행하며 경험하고 체득한 부분</span>
              <div className="indented">
                <ul className="flex flex-col gap-2 px-2 ml-6 list-disc list-inside -indent-6">
                  <li className="">redux-toolkit을 사용하여 slice 패턴과 ducks패턴을 적용할 수 있었습니다.</li>
                  <li className="">
                    라이트하우스의 평가 지표인 주요 콘텐츠 로드 시간을 렌더링 성능 최적화 방법을 적용하여 개선할 수
                    있었습니다.
                  </li>
                </ul>
              </div>
            </div>
          </article>
          <hr />
          <article className="flex flex-col gap-3">
            <h2 className="font-semibold text-subtitle mobile:text-subtitle2 text-secondary">
              <a href="https://github.com/goldmayo/JAVIC_2021">JAVIC 자빅 (2021.10.22 ~ 2021.12.24)</a>
            </h2>
            <span className="text-small">
              <a className="text-secondary-dark" href="https://github.com/goldmayo/CapstoneProject-JAVIC">
                2019-2020에 진행한 산학 협력 캡스톤 디자인 프로젝트
              </a>
              에 React를 도입한 프로젝트
            </span>
            <div className="flex justify-between">
              <span className="">담당 업무</span>
              <div className="w-3/4">
                <ul className="px-2 ml-6 list-disc list-inside -indent-6">
                  <li className="">
                    기존 Jquery로 개발한 프론트엔드를 React와 Context API를 사용하여 component화 하여 재사용 가능한 Flux
                    아키텍처로 리팩토링 및 다크모드 지원
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="">사용 기술</span>
              <div className="w-3/4">
                <ul className="px-2 ml-6 list-disc list-inside -indent-6">
                  <li className="">React, Python, Flask</li>
                </ul>
              </div>
            </div>
            <div className="">
              <span className="font-semibold">프로젝트를 진행하며 경험하고 체득한 부분</span>
              <div className="indented">
                <ul className="flex flex-col gap-2 px-2 ml-6 list-disc list-inside -indent-6">
                  <li className="">context api를 사용하여 props drilling을 해결한 경험을 하였습니다. </li>
                  <li className="">재사용성을 고려한 react 컴포넌트 개발을 경험할 수 있었습니다.</li>
                </ul>
              </div>
            </div>
          </article>
        </section>
        <hr />
        <section>
          <h2 className="my-3 font-semibold text-orange-600 text-headline3">Education.</h2>
          <div className="flex flex-col gap-2">
            <p className="">
              <strong>한양대학교 ERICA (2014.03 ~ 2021.08)</strong>
            </p>
            <p className="">
              <strong>ASAC 3기 (2023.07.26 ~ )</strong>
            </p>
          </div>
        </section>
        <hr />
      </main>
      <footer className="flex flex-col gap-4 p-8">
        <div className="flex flex-wrap items-center justify-around">
          <a href="/" className=" text-headline3">
            <span className="text-primary ">&lt;</span>
            <span className="font-semibold text-headline ">HyunSJ</span>
            <span className="text-primary ">&#47;&gt;</span>
          </a>
          <section className="">
            <ul className="flex items-center gap-4">
              <li className="">
                <a className="" href="">
                  <GithubIcon size={"1.5rem"} color={""} />
                  <span className="absolute w-4 h-[1px] overflow-hidden ">github</span>
                </a>
              </li>
              <li className="">
                <a className="" href="">
                  <DiscordIcon size={"1.5rem"} color={""} />
                  <span className="absolute w-4 h-[1px] overflow-hidden ">discord</span>
                </a>
              </li>
              <li className="">
                <a className="" href="">
                  <NotionIcon size={"1.5rem"} color={""} />
                  <span className="absolute w-4 h-[1px] overflow-hidden ">notion</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <section className="flex-wrap items-center mx-auto my-0flex text-small text-paragraph">
          <p>© 2020 - 2023 Hyun SeungJai All Rights Reserved.</p>
        </section>
      </footer>
    </div>
  );
};

export default IndexPage;
