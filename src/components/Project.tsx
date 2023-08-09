import React from "react";

const Project = () => {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="my-3 font-semibold text-orange-600 text-headline4">Project Experience.</h2>

      <article className="flex flex-col gap-3 [&>*>ul>li]:my-0.5">
        <h2 className="font-semibold text-subtitle mobile:text-subtitle2 text-secondary-dark">
          <a href="https://github.com/goldmayo/allcamp-graphql-client">
            All Camping 올캠핑 Client (2022.08.13 ~ 2022.12.02)
          </a>
        </h2>
        <span className="text-small">아토믹 디자인 시스템을 적용한 전국 캠핑장 정보 조회 개인 프로젝트</span>
        <div className="flex justify-between">
          <span className="font-semibold">담당 업무</span>
          <div className="w-3/4">
            <ul className="px-2 ml-6 list-disc list-inside -indent-6">
              <li className="">디자인 시스템 적용한 TailwindCSS로 반응형 레이아웃 구현</li>
              <li className="">Atomic 디자인을 적용한 컴포넌트 설계</li>
              <li className="">GraphQL Query설계</li>
              <li className="">ApolloClient를 통해 GraphQL Query설계</li>
              <li className="">Next.js v13 마이그레이션</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">사용 기술</span>
          <div className="w-3/4">
            <ul className="px-2 ml-6 list-disc list-inside -indent-6">
              <li className="">
                NextJS, React, TypeScript, Zustand, Storybook, GraphQL, TailwindCss, Figma, context API
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <span className="font-semibold text-secondary">🎯Trouble Shooting</span>
          <ul className="flex flex-col gap-2 px-2 ml-6 list-disc list-inside -indent-6">
            {/* <li className="">
              <a
                className={"text-link font-semibold"}
                href="%E1%84%92%E1%85%A7%E1%86%AB%E1%84%89%E1%85%B3%E1%86%BC%E1%84%8C%E1%85%A2%20%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%A9%20%E1%84%89%E1%85%B5%E1%87%81%E1%84%8B%E1%85%B3%E1%86%AB%20%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%8C%E1%85%A1%20adb0c28465d44c7186f28327775b33a9/All%20Camping%20%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%8F%E1%85%A2%E1%86%B7%E1%84%91%E1%85%B5%E1%86%BC%20%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%20%E1%84%89%E1%85%B5%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%86%B7%20%E1%84%80%E1%85%A2%E1%84%89%E1%85%A5%E1%86%AB%E1%84%80%E1%85%B5%20f3f4de2d54d043c9bc99013446e53212.html"
              >
                All Camping 올캠핑 디자인 시스템 개선기
              </a>
            </li> */}
            <li className="">
              <a
                className={"text-link font-semibold"}
                href="https://harmless-hibiscus-5de.notion.site/All-Camping-Client-Card-6ca2f322d0f74d47886c3a600849a8f6?pvs=4"
              >
                All Camping 올캠핑 Client Card 컴포넌트 개선기
              </a>
            </li>
            <li className="">
              파편화된 컴포넌트를 compound와 composition을 사용해 재사용 가능한 하나의 컴포넌트로 통합하여
              리팩토링했습니다.
            </li>
            <li className="">
              compound component, component composition 패턴을 적용하여 props drilling현상을 해결했습니다.
            </li>
            <li className="">Zustand 전역 스토어에 slice 패턴과 ducks 패턴을 적용하여 상세 검색기능 구현하였습니다.</li>
          </ul>
        </div>

        <div className="">
          <span className="font-semibold">프로젝트를 진행하며 경험하고 체득한 부분</span>
          <ul className="flex flex-col gap-2 px-2 ml-6 list-disc list-inside -indent-6">
            <li className="">
              Zustand를 사용하여 전역 스토어에 slice 패턴과 ducks 패턴을 적용해 결합도를 낮추고 응집도를 높힌 전역
              스토어 관리를 경험했습니다.
            </li>
            <li className="">
              디자인 시스템, atomic 디자인, storybook을 사용해 프로젝트에 일관성을 지키며 UI 수정 및 확장을 빠르게
              반영한 경험을 했습니다.
            </li>
          </ul>
        </div>
      </article>

      <hr />

      <article className="flex flex-col gap-3 [&>*>ul>li]:my-0.5">
        <h2 className="font-semibold text-subtitle mobile:text-subtitle2 text-secondary-dark">
          <a href="https://github.com/goldmayo/allcamp-graphql-service">
            All Camping 올캠핑 Server (2022.07.06 ~ 2022.11.22)
          </a>
        </h2>
        <p className="text-small">한국관광공사 고캠핑 api활용 전국의 캠핑장 정보 제공 개인 프로젝트</p>
        <div className="flex justify-between">
          <span className="font-semibold">담당 업무</span>
          <div className="w-3/4">
            <ul className="px-2 ml-6 list-disc list-inside -indent-6">
              <li className="">스케줄러를 사용한 API 호출 및 Bulk Insert</li>
              <li className="">GraphQL Resolver 구현 및 Query설계</li>
              <li className="">Querydsl을 사용한 동적 검색기능 구현</li>
              <li className="">Relay-cursor-base 페이지네이션 구현</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">사용 기술</span>
          <div className="w-3/4">
            <ul className="px-2 ml-6 list-disc list-inside -indent-6">
              <li className="">SpringBoot, Java, JPA, Querydsl GraphQL, MariaDB</li>
            </ul>
          </div>
        </div>
        <div className="">
          <span className="font-semibold text-secondary">🎯Trouble Shooting</span>
          <ul className="flex flex-col gap-2 px-2 ml-6 list-disc list-inside -indent-6">
            <li className="">수신한 데이터의 변경사항과 중복을 검사하는 로직 6초에서 2초로 개선했습니다.</li>
          </ul>
        </div>
        <div className="">
          <span className="font-semibold">프로젝트를 진행하며 경험하고 체득한 부분</span>
          <ul className="flex flex-col gap-2 px-2 ml-6 list-disc list-inside -indent-6">
            <li className="">
              쿼츠 스케줄러를 통한 API 호출부터 수신한 데이터의 최신성 유지를 위한 가공 후 저장하는 경험을 했습니다.
            </li>
            <li className="">Querydsl과 JPA를 적용해 동적 검색 구현을 경험했습니다.</li>
          </ul>
        </div>
      </article>
      <hr />

      <article className="flex flex-col gap-3 [&>*>ul>li]:my-0.5">
        <h2 className="font-semibold text-subtitle mobile:text-subtitle2 text-secondary-dark">
          <a href="https://github.com/goldmayo/IGOBADA">IGOBADA 이고바다 (2022.02.14 ~ 2023.01.19)</a>
        </h2>
        <p className="text-small">웹 명함관리 개인 프로젝트</p>

        <div className="flex justify-between">
          <span className="font-semibold">담당 업무</span>
          <div className="w-3/4">
            <ul className="px-2 ml-6 list-disc list-inside -indent-6">
              <li className="">리팩토링과 최적화를 통해 light house 점수 개선</li>
              <li className="">Firebase를 통한 Google, Github 소셜 로그인 및 회원가입</li>
              <li className="">명함 CRUD 정렬 및 인덱싱</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">사용 기술</span>
          <div className="w-3/4">
            <ul className="px-2 ml-6 list-disc list-inside -indent-6">
              <li className="">React, Firebase, Typescript, Redux-toolkit</li>
            </ul>
          </div>
        </div>
        <div className="">
          <span className="font-semibold text-secondary">🎯Trouble Shooting</span>
          <ul className="flex flex-col gap-2 px-2 ml-6 list-disc list-inside -indent-6 ">
            <li className="">
              light house의 종합점수를 87에서 92로 개선했습니다. <br />
              React.lazy()를 사용한 동적 import을 적용하여 랜딩 페이지의 LCS를 2.4초에서 1.7초로 개선했습니다.
              <br />
              모든 서비스 클래스(Auth, Repository, Assetuploader)를 root에서 생성후 props로 넘기는 방식에서
              <br />
              싱글톤 패턴을 적용한 서비스 클래스를 동적 import된 각 페이지에서 호출하는 방식으로 리팩토링했습니다.
              <br />
              FCP와 TTI사이의 시간인 total blocking time을 70ms에서 20ms로 개선했습니다.
            </li>
            <li className="">
              redux-toolkit 전역 스토어에 slice 패턴을 적용하여 User 컴포넌트의 props drilling을 해소했습니다.
            </li>
          </ul>
        </div>
        <div className="">
          <span className="font-semibold">프로젝트를 진행하며 경험하고 체득한 부분</span>
          <div className="indented">
            <ul className="flex flex-col gap-2 px-2 ml-6 list-disc list-inside -indent-6">
              <li className="">redux-toolkit을 사용하여 slice 패턴과 ducks패턴을 적용할 수 있었습니다.</li>
              <li className="">
                light house의 평가 지표인 주요 콘텐츠 로드 시간을 렌더링 성능 최적화 방법을 적용하여 개선할 수
                있었습니다.
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Project;
