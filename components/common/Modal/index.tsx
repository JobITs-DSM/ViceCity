// @flow
import styled from "@emotion/styled";
import * as React from "react";
import { modalState } from "./../../../atoms/modal";
import { useRecoilState } from "recoil";
import { Login } from "./login";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Props = {};

export const Modal = (props: Props) => {
  const [modal, setModal] = useRecoilState(modalState);

  const modal_wrapper_id = "modal-wrapper";

  const modal_value = modal.modalState;

  const closeModal = (event: { target: HTMLElement }) => {
    if (event.target.id === modal_wrapper_id) {
      setModal({ modalState: null });
    }
  };

  if (!modal_value) return <></>;

  if (modal_value)
    return (
      <Wrapper onClick={closeModal as any} id={modal_wrapper_id}>
        {modal_value === "login" && <Login />}
      </Wrapper>
    );

  return <></>;
};
