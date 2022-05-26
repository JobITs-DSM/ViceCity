import styled from "@emotion/styled";
import * as React from "react";
import { COLOR } from "./../../styles/color";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url("/enterprise.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const DarkCover = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  * {
    color: ${COLOR.white};
  }
  & h1 {
    text-align: center;
    font-size: 23px;
  }
  & p {
    font-size: 17px;
    font-weight: 400;
    margin-top: 15px;
    margin-bottom: 30px;
  }
  & button {
    width: 200px;
    height: 50px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 500;
    &:nth-of-type(1) {
      background-color: ${COLOR.white};
      color: ${COLOR.main_text};
    }
    &:nth-of-type(2) {
      background-color: ${COLOR.main};
      color: ${COLOR.white};
      margin-top: 10px;
    }
  }
`;

type Props = {};

export const Main = (props: Props) => {
  return (
    <Wrapper>
      <DarkCover>
        <h1>
          대덕소프트웨어 마이스터고등학교에 <br /> 오신 것을 환영합니다.
        </h1>
        <p>지금 바로 모집을 시작하세요.</p>
        <button>모집 의뢰하기</button>
        <button>기업 등록하기</button>
      </DarkCover>
    </Wrapper>
  );
};
