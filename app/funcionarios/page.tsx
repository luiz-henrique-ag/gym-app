"use client"

import InputMask from "@/components/inputs/input-mask";
import { useState } from "react";

export default function Funcionarios(){
  const [cpf, setCpf] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [numero, setNumero] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(e.currentTarget.value)
  }

  return(
    <>
      <h1>Funcionários</h1>
      <InputMask 
        placeholder="999.999.999-22"
        name="cpf" 
        onChange={handleChange} 
        mask="cpf" 
        className="w-1/2 mb-2" 
        value={cpf}
      />
      <InputMask 
        placeholder="(38) 32983-3124" 
        name="phone" 
        onChange={(e)=> setPhone(e.currentTarget.value)} 
        mask="phone" 
        className="w-1/2" 
        value={phone}
      />
      <InputMask 
        placeholder="" 
        name="numero" 
        onChange={(e)=> setNumero(e.currentTarget.value)} 
        mask="numberOnly" 
        className="w-1/2" 
        value={numero}
      />
    </>
  )
}