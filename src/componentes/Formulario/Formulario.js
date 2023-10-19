import "./Formulario.css"
import Texto from "../Texto/Texto.js"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"
const Formulario =()=>{
    return <section className="formulario">
<form>
    <h2>Rellena el formulario para crear un nuevo Personaje</h2>
    <Texto titulo="Nombre" placeholder="Ingresar Nombre"/>
    <Texto titulo="Rango" placeholder="Ingresar el Rango"/>
    <Texto titulo="Foto" placeholder="Ingresar Enlace de Foto"/>
    <ListaOpciones/>
    <Boton>Crear</Boton>
</form>
    </section> 
const Formulario=()=>{
    const envio=(evento)=>{
        evento.preventDefault();
        console.log(envio,evento);

    }
    return<section className="formulario">
        <form onSubmit={envio}>
            <h3>Rellena el formulario para Crear el Personaje</h3>
        </form>

    </section>
}
}

export default Formulario