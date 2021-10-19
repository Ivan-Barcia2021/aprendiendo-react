import React from "react";
import { Busqueda } from "./busqueda.js";

  const constructor=()=>{
   
    this.title = React.createRef()
  }

  //aSBAKjs
const boton=()=>{

const pulsar=()=>{
  console.log('boton tocado')
  alert('capital')
  return( <div>capital</div>);
}

//falta pasar el msg a la funcion pulsar, para luego ser utilizado. 
return(
  
  < div className="App">
    <textarea id="msj" name="user_message"></textarea>

    <br></br>
     
    <button 
    onClick={()=>{pulsar()}}
    >Buscar
      </button>
     </div>
);

}
export default boton;