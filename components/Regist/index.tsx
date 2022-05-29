// @flow
import * as React from "react";
import styled from "@emotion/styled";
import { COLOR } from "../../styles/color";
import { Input } from "./Input";
import { Form, FORM_LIST_FOR_COMPANY_INTRO } from "./formList";
import { FORM_LIST_FOR_MANAGER_AND_CONTACT } from "./formList";

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
`;

const FormContainer = styled.form`
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

const InputGridWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
`;

type Props = {};

export const Regist = (props: Props) => {
  const formListToInput = (list: Form[][]) => {
    return list.map((formInfoArr, index) => (
      <React.Fragment key={index}>
        {formInfoArr.length === 1 ? (
          <Input form={formInfoArr[0]} />
        ) : (
          <InputGridWrap>
            {formInfoArr.map((formInfo, index) => (
              <Input key={index} form={formInfo} />
            ))}
          </InputGridWrap>
        )}
      </React.Fragment>
    ));
  };

  return (
    <Wrapper>
      <FormContainer>
        <h1>기업 정보 입력</h1>
        <p>기업 정보를 등록해주세요 ~산학협력부 전달~</p>
        <FormSectionTitle>개요</FormSectionTitle>
        {formListToInput(FORM_LIST_FOR_COMPANY_INTRO)}
        <FormSectionTitle>담당자 및 연락처</FormSectionTitle>
        {formListToInput(FORM_LIST_FOR_MANAGER_AND_CONTACT)}
      </FormContainer>
    </Wrapper>
  );
};
