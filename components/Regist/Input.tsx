// @flow
import * as React from "react";
import styled from "@emotion/styled";
import { COLOR } from "../../styles/color";
import { Form } from "./formList";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  & input {
    width: 100%;
    height: 45px;
    margin-top: 10px;
    padding-left: 15px;
    border: 1px solid ${COLOR.input};
    border-radius: 5px;
    font-size: 14px;
    color: ${COLOR.sub_text};
    &::placeholder {
      color: ${COLOR.input};
    }
  }
`;

const InputTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${COLOR.sub_text};
  & b {
    margin-left: 5px;
    color: ${COLOR.red100};
  }
`;

type Props = {
  form: Form;
  handler: React.ChangeEventHandler;
};

export const Input = ({ form, handler }: Props) => {
  return (
    <Wrapper>
      <InputTitle>
        {form.title} <b>{form.isEssential && "*"}</b>
      </InputTitle>
      <input
        placeholder={form.placeholder}
        name={form.name}
        onChange={handler}
      />
    </Wrapper>
  );
};
