import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./style"

const contenido=(
  <div>
   
    </div>
);
function Componente({titulo, contenido}){
  
  return( <div>
    <div>
       <h1>{titulo}</h1>
       <p>{contenido}</p>
       <textarea id="msg" name="user_message"></textarea>
       <br></br>
     <button onClick="App()">Buscar</button>
     </div>
     </div>);
}
ReactDOM.render(<App />, document.getElementById("root"));
