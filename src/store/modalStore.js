import { create } from "zustand";

const useModalStore = create((set) => ({
    id: "",
    isOpen: false,
    openModal: (id) =>
        set({
            id,
            isOpen: true,
        }),
    closeModal: () =>
        set({
            id: "",
            isOpen: false,
        }),
}));

export default useModalStore;
