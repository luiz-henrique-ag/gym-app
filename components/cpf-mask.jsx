import React, { useState } from "react"
import '../App.css'

export default function CpfMask(){
  const [cpf, setCpf] = useState("")
  const [key, setKey] = useState("")

  function handleKeyDown(event){
    if(event.key === "Backspace") setKey("backspace");
    else setKey("");
  }

  function handleChange(event){
    let value = event.target.value;
    
    //Max length is 15
    if(value.length === 15) return;
    
    // If the input is a number the code runs
    if(value.toLowerCase() == value.toUpperCase()){
      if(value.length === 4 || value.length === 8 || value.length === 12){
        if(key === "backspace"){
          setCpf(value.slice(0, value.length -1));
          return;
        }
        setCpf(cpf + (value.length != 12 ? "." : "-") + value.slice(value.length -1 , value.length))
        return;
      }
      setCpf(value);
    }
  }
 
  return(
    <input 
      type="text" 
      value={cpf} 
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      className="input"
      name="cpf"
    />
  )
}