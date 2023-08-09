import React from "react";

const Introduce = () => {
  return (
    <section>
      <h2 className="my-3 font-semibold text-orange-600 text-headline4">Introduce.</h2>
      <ul className="px-2 ml-6 list-disc list-inside -indent-6 [&>li]:my-2">
        <li className="">
          <span className="">
            프론트엔드 개발자가 된 이유는 사용자에게 시각적으로 좋은 피드백을 제공할 수 있는 개발자가 되고 싶기
            때문입니다.
          </span>
        </li>
        <li className="">
          <span>
            디자인 시스템을 적용한 유연한 컴포넌트 설계와 모니터링을 포함한 CI/CD 시스템을 구축하고 전파할 수 있는
            프론트엔드 개발자가 되는 것이 목표입니다.
          </span>
        </li>
      </ul>
    </section>
  );
};

export default Introduce;
