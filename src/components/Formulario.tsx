"use client"
import React, { FormEvent, useContext, useState } from "react"
import ErrorMsg from "./ErrorMsg"
import { CriptoContext } from "@/context/CriptoContext"

type CoinInfo = {
    Id: string,
    Name: string,
    FullName: string
}
type ILista = {
    RAW: {}
    DISPLAY: {}
    CoinInfo: CoinInfo
}
interface Prop {
    listaCriptos: ILista[]
}

export default function Formulario({listaCriptos}: Prop): React.JSX.Element {
    const {setFormData, setCotizarCripto, formData} = useContext(CriptoContext)

    const [error, setError] = useState<boolean>(false)
    const monedas = [
        { codigo: "USD", nombre: "Dolar de Estados Unidos" },
        { codigo: "MXN", nombre: "Peso Mexicano" },
        { codigo: "EUR", nombre: "Euro" },
        { codigo: "ARS", nombre: "Peso Argentino" },
        { codigo: "GDP", nombre: "Libra Esterlina" },
        { codigo: "COL", nombre: "Peso Colombiano" },
    ];
    
    const handleChange = (ev: React.ChangeEvent<HTMLSelectElement>): void => {
        setFormData({
            ...formData,
            [ev.target.name]:ev.target.value
        })
    }
    const handleSubmit = async(ev: FormEvent) => {
        ev.preventDefault()
        if(formData.moneda.trim() == '' || formData.cripto.trim() =='') {
            setError(true)
            setTimeout(()=>{setError(false)},1000)
            return
        }
        setCotizarCripto(formData)
    }

  return (
    <form 
        onSubmit={(ev)=>handleSubmit(ev)}
        className="bg-slate-800 w-full h-full min-w-96 min-h-fit gap-10 p-10 flex flex-col items-center justify-between rounded-md mb-4 lg:w-1/2"
        >
            { error && <ErrorMsg msg='Todos los campos son necesarios' /> }
      <div className="w-full">
        <label htmlFor="moneda"></label>
        <select 
            name="moneda" 
            id="moneda" 
            className="bg-black p-5 w-full rounded-md"
            onChange={(ev)=>handleChange(ev)}>
            <option value="">Seleccione su moneda</option>
          {monedas.map((moneda) => (
            <option 
                key={moneda.codigo} 
                value={moneda.codigo}>
                    {moneda.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full">
        <label htmlFor="cripto"></label>
        <select 
            name="cripto" 
            id="cripto" 
            className="bg-black p-5 w-full rounded-md text-white"
            onChange={(ev)=>handleChange(ev)}>
            <option value="">Seleccione la criptomoneda</option>
            {
                listaCriptos.map(opcion => (
                    <option 
                        key={opcion.CoinInfo.Id}
                        value={opcion.CoinInfo.Name}>
                            {opcion.CoinInfo.FullName}
                    </option>
                ))
            }
        </select>
      </div>
      <button type='submit' className="rounded-md p-5 bg-black hover:bg-white hover:text-black font-bold">Cotizar</button>
      
    </form>
  );
}
