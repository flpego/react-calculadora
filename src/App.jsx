import logo from "./imagenes/logo.png";
import "./App.css";
import Boton from "./components/Boton";
import { Input } from "./components/Input";
import { BotonClear } from "./components/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";


function App() {
  const [input, setInput] = useState("");


  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input){
      setInput(evaluate(input))
    } else{
      setInput("")
    }
  }

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Input input={input} />
        <div className="logo-contenedor">
          <img src={logo} alt="" className="logo" />
          <BotonClear handleClick={() => setInput("")} />
        </div>
        
        <div className="fila">
          <Boton handleClick={agregarInput}>1</Boton>
          <Boton handleClick={agregarInput}>2</Boton>
          <Boton handleClick={agregarInput}>3</Boton>
          <Boton handleClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={agregarInput}>4</Boton>
          <Boton handleClick={agregarInput}>5</Boton>
          <Boton handleClick={agregarInput}>6</Boton>
          <Boton handleClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={agregarInput}>7</Boton>
          <Boton handleClick={agregarInput}>8</Boton>
          <Boton handleClick={agregarInput}>9</Boton>
          <Boton handleClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={calcularResultado}>=</Boton>
          <Boton handleClick={agregarInput}>0</Boton>
          <Boton handleClick={agregarInput}>.</Boton>
          <Boton handleClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
         
        </div>
      </div>
    </div>
  );
}

export default App;
