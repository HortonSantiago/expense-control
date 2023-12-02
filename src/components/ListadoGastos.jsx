import Gasto from "./Gasto"

const ListadoGastos = ({gastos})=>{
    return (
        <div className="listado-gastos contenedor">
            <h2>
                {gastos.length ? "Gastos" : "No Hay Gastos aún"}

                {gastos.map( gasto=>{
                <Gasto
                key={gasto.id}
                gasto={gasto}
                />
                })}
            </h2>
        </div>
    )
}

export default ListadoGastos