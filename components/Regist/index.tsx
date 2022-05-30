// @flow
import * as React from "react";
import styled from "@emotion/styled";
import { COLOR } from "../../styles/color";
import { EnterForm } from "./Form";
import { Form, FORM_LIST_FOR_COMPANY_INTRO, InputName } from "./formList";
import { FORM_LIST_FOR_MANAGER_AND_CONTACT } from "./formList";
import { InputNameList } from "./formList";

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

const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${COLOR.main};
  color: ${COLOR.white};
  border-radius: 5px;
  margin-top: 50px;
  font-size: 17px;
  font-weight: bold;
`;

type Props = {};

type CompanyInfo = {
  [key in InputName]: string | number | null;
};

export const Regist = (props: Props) => {
  const [companyInfoList, setCompanyInfoList] = React.useState<CompanyInfo>(
    Object.assign({}, ...InputNameList.map((key) => ({ [key]: null })))
  );

  console.log(companyInfoList);

  const handleCompanyInfoInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCompanyInfoList({
      ...companyInfoList,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const formListToInput = (list: Form[][]) => {
    return list.map((formInfoArr, index) => (
      <React.Fragment key={index}>
        {formInfoArr.length === 1 ? (
          <EnterForm form={formInfoArr[0]} handler={handleCompanyInfoInput} />
        ) : (
          <InputGridWrap>
            {formInfoArr.map((formInfo, index) => (
              <EnterForm
                key={index}
                form={formInfo}
                handler={handleCompanyInfoInput}
              />
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
        <SubmitButton>등록하기</SubmitButton>
      </FormContainer>
    </Wrapper>
  );
};
