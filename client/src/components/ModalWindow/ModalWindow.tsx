import React from "react";
import logo from '../../icons/succ.png';
import style from './Modal.module.scss';

interface Props {
  setOpenModal: (value: boolean) => void,
}

export const ModalWindow: React.FC<Props> = ({ setOpenModal }) => {
  return (
    <div className={style.modal}>
      <div className={style.modal_container}>
        <div className={style.modal_close_container}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className={style.modal_close}
          >
          </button>
        </div>
        <div className={style.modal_container_title}>
          <img src={logo} className={style.modal_circle}></img>
        </div>
        <div className={style.modal_container_body}>
          <p className={style.modal_text}>Goods were successfully paid!</p>
        </div>
        <div className={style.modal_container_footer}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className={style.modal_container_button}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}