import styled from "@emotion/styled";
import Link from "next/link";
import * as React from "react";
import { useRecoilState } from "recoil";
import { COLOR } from "../../styles/color";
import { modalState } from "./../../atoms/modal";

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
  & a {
    margin-top: 30px;
    font-size: 14px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;

type Props = {};

export const Main = (props: Props) => {
  const [_, setModalState] = useRecoilState(modalState);

  const companyLoginModalOn = () =>
    setModalState({
      modalState: "login",
    });

  return (
    <Wrapper>
      <DarkCover>
        <h1>
          대덕소프트웨어 마이스터고등학교
          <br /> 취업 의뢰를 환영합니다.
        </h1>
        <p>자비츠에서 지금 바로 모집을 시작하세요</p>
        <button onClick={companyLoginModalOn}>모집 의뢰하기</button>
        <Link href="/regist">
          <button>기업 등록하기</button>
        </Link>
        <a
          href="https://www.youtube.com/watch?v=ioMUH0zpqMM&ab_channel=Jazzyfact-Topic"
          target="_blank"
        >
          자비츠 바로가기
        </a>
      </DarkCover>
    </Wrapper>
  );
};
