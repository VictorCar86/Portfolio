import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useModalStore = create(
    devtools((set) => ({
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
    })),
);

export default useModalStore;
