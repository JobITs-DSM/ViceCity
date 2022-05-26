// @flow
import * as React from "react";
import styled from "@emotion/styled";
import { COLOR } from "./../../../styles/color";

const Container = styled.div`
  width: 420px;
  padding: 30px 0;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h3 {
    font-size: 20px;
    font-weight: 500;
  }
  & input,
  button {
    width: 350px;
    height: 50px;
    border-radius: 5px;
  }
  & input {
    margin-top: 20px;
    border: 1px solid ${COLOR.input};
    color: ${COLOR.input};
    padding-left: 15px;
    font-size: 14px;
    &::placeholder {
      color: ${COLOR.input};
    }
    &:nth-of-type(2) {
      margin-top: 10px;
    }
  }
  & button {
    margin-top: 15px;
    background-color: ${COLOR.main};
    color: ${COLOR.white};
    font-weight: bold;
    font-size: 16px;
  }
`;

type Props = {};

export const Login = (props: Props) => {
  return (
    <Container>
      <h3>기업 로그인 하기</h3>
      <input type="text" placeholder="사업자 번호를 입력하세요 ex) 000-000" />
      <input type="text" placeholder="비밀번호를 입력하세요" />
      <button>로그인</button>
    </Container>
  );
};
