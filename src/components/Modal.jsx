import CerrarBtn from "../img/cerrar.svg";

const Modal = ({ setModal, animarModal, setAnimarModal }) => {
  const ocultarModal = () => {
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 1000);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="Cerrar modal Btn" onClick={ocultarModal} />
      </div>
      <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
        <legend className="">Nuevo Gasto</legend>
      </form>
    </div>
  );
};

export default Modal;