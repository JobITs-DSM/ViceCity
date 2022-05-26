// @flow
import * as React from "react";
import styled from "@emotion/styled";
import { COLOR } from "../../styles/color";

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
`;

const FormContainer = styled.article`
  width: 800px;
  & h1 {
    font-size: 20px;
    color: ${COLOR.main_text};
  }
  & p {
    font-size: 15px;
    color: ${COLOR.sub_text};
    margin-top: 5px;
  }
`;

const FormSectionTitle = styled.h3`
  font-size: 18px;
  color: ${COLOR.main_text};
  margin-top: 30px;
`;

type Props = {};

export const Regist = (props: Props) => {
  return (
    <Wrapper>
      <FormContainer>
        <h1>기업 정보 입력</h1>
        <p>기업 정보를 등록해주세요 ~산학협력부 전달~</p>
        <FormSectionTitle>개요</FormSectionTitle>
        <FormSectionTitle>담당자 및 연락처</FormSectionTitle>
      </FormContainer>
    </Wrapper>
  );
};
