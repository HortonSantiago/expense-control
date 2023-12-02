import { useState } from "react";
import Mensaje from "./Mensaje";
import CerrarBtn from "../img/cerrar.svg";

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {

  const [mensaje, setMensaje] = useState("")
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");


  const ocultarModal = () => {
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 1000);
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    if([nombre, cantidad, categoria].includes("")){
      setMensaje("Todos los campos son obligatorios")
      setTimeout(()=>{
        setMensaje("")
      },2000)
      return
    }
    guardarGasto({nombre, cantidad, categoria})
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="Cerrar modal Btn" onClick={ocultarModal} />
      </div>
      <form onSubmit={handleSubmit} className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
        <legend className="">Nuevo Gasto</legend>

{mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre"> Nombre Gasto</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Añade El Nombre del gasto"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad"> Cantidad</label>
          <input
            type="number"
            name="cantidad"
            id="cantidad"
            placeholder="Añade La cantidad del gasto. Ej 300"
            value={cantidad}
            onChange={(e) => {
              setCantidad(Number(e.target.value));
            }}
          />
          </div>
        <div className="campo">
          <label htmlFor="categoria"> Categoria</label>
          <select
            name="categoria"
            id="categoria"
            value={categoria}
            onChange={(e) => {
              setCategoria(e.target.value);
            }}
          >
            <option value="" disabled selected>
              -- Selecciones --
            </option>
            <option name="ahorro" value="ahorro">
              Comida
            </option>
            <option name="comida" value="comida">
              Ahorro
            </option>
            <option name="salidas" value="salidas">
              Salidas
            </option>
            <option name="casa" value="casa">
              Casas
            </option>
            <option name="gastos" value="gastos">
              Gastos Varios
            </option>
            <option name="ocio" value="ocio">
              Ocio
            </option>
            <option name="suscripciones" value="suscripciones">
              Suscripciones
            </option>
          </select>
          </div>
        
        <input type="submit" value="Añadir Gasto" />
      </form>
    </div>
  );
};

export default Modal;
