import React, { Component } from "react";
import imagen from "./silla.jpg";


class Imagen extends Component {
 render(){
    return(
     
      <><img src={imagen} alt="imagen" className="imagen"/></>
   
    )
 }
}

export default Imagen;