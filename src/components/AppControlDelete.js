import React from "react";
import { useGlobalContext } from "../context/meal-context";
import Modal from "./UI/Modal";

const AppControlDelete = () => {
  const { setModalShow } = useGlobalContext();

  const onDeleteAll = () => {
    //open Modal
    setModalShow(true);
  };

  return (
    <>
      <Modal />
      <div className="app__controls__delete">
        <button className="btn-delete" onClick={onDeleteAll}>
          Delete All
        </button>
      </div>
    </>
  );
};

export default AppControlDelete;
