import React, { useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import useModalStore from "../store/modalStore";
import "../styles/Modal.css";

const Modal = ({ id, title, onClose, children }) => {
    const dialogRef = useRef(null);
    const { current: dialog } = dialogRef;
    const { id: modalId, closeModal } = useModalStore();

    useEffect(() => {
        if (!dialog) return;
        if (id === modalId) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [modalId]);

    const beforeClose = () => {
        onClose && onClose();
        closeModal();
    };

    const handleClose = () => {
        if (dialog) {
            dialog.classList.add("hide");
            const cb = () => {
                dialog.classList.remove("hide");
                beforeClose();
                dialog.removeEventListener("webkitAnimationEnd", cb, false);
            };
            dialog.addEventListener("webkitAnimationEnd", cb, false);
        }
    };

    const handleBackdropClick = (e) => {
        if (e.target.tagName !== "DIALOG")
            //This prevents issues with forms
            return;

        const rect = e.target.getBoundingClientRect();

        const clickedInDialog =
            rect.top <= e.clientY &&
            e.clientY <= rect.top + rect.height &&
            rect.left <= e.clientX &&
            e.clientX <= rect.left + rect.width;

        if (clickedInDialog === false) handleClose();
    };

    return (
        <dialog
            ref={dialogRef}
            onClick={handleBackdropClick}
            className="backdrop:bg-black/50 p-0 bg-transparent rounded-lg shadow-lg open:animate__fadeInDown"
            style={{
                animationDuration: "0.3s",
                animationFillMode: "both",
            }}
        >
            <div className="min-w-[300px] max-w-lg md:max-w-3xl bg-white rounded-lg">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <button
                        onClick={handleClose}
                        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                        type="button"
                    >
                        <IoCloseOutline className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-4">{children}</div>
            </div>
        </dialog>
    );
};

export default Modal;
