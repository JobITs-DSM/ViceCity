// @flow
import * as React from "react";
import styled from "@emotion/styled";
import { COLOR } from "./../../../styles/color";

const Container = styled.div`
  width: 450px;
  height: 250px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
  & h3 {
    font-size: 20px;
    font-weight: 500;
  }
  & input,
  button {
    width: 350px;
    height: 50px;
    font-size: 16px;
    border-radius: 5px;
  }
  & input {
    margin-top: 30px;
    border: 1px solid ${COLOR.input};
    color: ${COLOR.input};
    padding-left: 15px;
    &::placeholder {
      color: ${COLOR.input};
    }
  }
  & button {
    margin-top: 10px;
    background-color: ${COLOR.main};
    color: ${COLOR.white};
    font-weight: bold;
  }
`;

type Props = {};

export const Login = (props: Props) => {
  return (
    <Container>
      <h3>기업 로그인 하기</h3>
      <input type="text" placeholder="사업자 번호를 입력하세요 ex) 000-000  " />
      <button>로그인</button>
    </Container>
  );
};
