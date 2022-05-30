// @flow
import * as React from "react";
import styled from "@emotion/styled";
import { COLOR } from "../../styles/color";
import { Form } from "./formList";
import { Code } from "../../interfaces/code";
import axios from "axios";
import { SERVER_URL } from "./../../constants/url";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  & input,
  select,
  textarea {
    width: 100%;
    height: 45px;
    margin-top: 10px;
    padding-left: 15px;
    border: 1px solid ${COLOR.input};
    border-radius: 5px;
    font-size: 14px;
    color: ${COLOR.sub_text};
    transition: 0.3s;
    &::placeholder {
      color: ${COLOR.input};
    }
    &:focus {
      border: 1px solid ${COLOR.main_text};
    }
  }
  & input[type="file"] {
    border: none;
    padding: 0;
  }
  & textarea {
    height: 150px;
    padding-top: 20px;
    resize: none;
  }
`;

const FormTitle = styled.div`
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

export const EnterForm = ({ form, handler }: Props) => {
  const [codes, setCodes] = React.useState<Code[]>([]);

  React.useEffect(() => {
    if (form.type === "select") {
      if (form.codeType === "employee_num") {
        axios
          .get(`${SERVER_URL}/enterprise/codes/employee-count`)
          .then((res) => {
            setCodes(res.data.codes);
          });
      }
      if (form.codeType === "business_class") {
        axios
          .get(`${SERVER_URL}/enterprise/codes/business-area`)
          .then((res) => {
            setCodes(res.data.codes);
          });
      }
    }
  }, []);

  return (
    <Wrapper>
      <FormTitle>
        {form.title} <b>{form.isEssential && "*"}</b>
      </FormTitle>
      {form.type === "input" ? (
        <input
          placeholder={form.placeholder}
          name={form.name}
          onChange={handler}
        />
      ) : form.type === "select" ? (
        <select>
          {codes.map((code, idx) => (
            <option value={code.code} key={idx}>
              {code.value}
            </option>
          ))}
        </select>
      ) : form.type === "textarea" ? (
        <textarea
          placeholder={form.placeholder}
          name={form.name}
          onChange={handler}
        />
      ) : (
        <input type="file" name={form.name} onChange={handler} />
      )}
    </Wrapper>
  );
};
