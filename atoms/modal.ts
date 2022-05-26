import { atom } from "recoil";
import { ATOM_KEY } from "./../constants/atomKey";

interface ModalState {
  modalState: null | "login";
}

export const modalState = atom<ModalState>({
  key: ATOM_KEY.modalState,
  default: {
    modalState: null,
  },
});
