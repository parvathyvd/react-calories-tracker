import React from "react";
import { useGlobalContext } from "../../context/meal-context";

const Modal = () => {
  const { deleteAll, modalShow, setModalShow } = useGlobalContext();

  const onCloseModal = (e) => {
    console.log(e.target);
    if (
      e.target.classList.contains("btn-no") ||
      e.target.classList.contains("backdrop")
    ) {
      setModalShow(false);
    }
  };

  const onDeleteAll = () => {
    deleteAll();
    setModalShow(false);
  };

  return (
    <>
      {modalShow && (
        <div className="backdrop" onClick={onCloseModal}>
          <div className="modal">
            <p>Are you sure want to delete all items</p>
            <div className="btn-block">
              <button className="btn-success" onClick={onDeleteAll}>
                yes
              </button>
              <button className="btn-no" onClick={onCloseModal}>
                no
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
