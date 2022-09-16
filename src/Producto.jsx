import React,{Component} from "react";
import Imagen from "./Imagen";
import Titulo from "./Titulo";
import './producto.css';
import Descripcion from "./Descripcion";
import Precio from "./Precio";
import Cantidad from "./Cantidad";
import BotonAgregar from "./BotonAgregar";

class Producto extends Component{
    render(){
        return(
            <div className="producto">
                <Imagen />
                <Titulo />
                <Descripcion />
                <Precio />
                <Cantidad />
                <BotonAgregar />
            </div>
        )
    }
}

export default Producto;