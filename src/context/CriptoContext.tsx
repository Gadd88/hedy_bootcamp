'use client'
import { createContext, useEffect, useState }  from "react";

interface Prop {
    children: React.ReactNode
}
type typeFormData = {
    moneda: string,
    cripto: string
}
interface IResultado {
    PRICE: string
    HIGHDAY: string
    LOWDAY: string
    CHANGEPCT24HOUT: string
    LASTUPDATE: string
}
interface ICriptoContext {
    formData: typeFormData
    setFormData: (data: typeFormData) => void
    cotizarCripto: typeFormData
    setCotizarCripto: (data: typeFormData) => void
    resultado: IResultado
    setResultado: (data: IResultado) => void
}

export const CriptoContext = createContext<ICriptoContext>({} as ICriptoContext)


export default function CriptoContextProvider({children}:Prop){
    const [formData, setFormData] = useState<typeFormData>({
        moneda:'',
        cripto:''
    })
    const [isLoading, setIsLoading] = useState<boolean | ''>('')
    const [cotizarCripto, setCotizarCripto] = useState<typeFormData>({
        moneda:'',
        cripto:''
    })
    const [resultado,setResultado] = useState<IResultado>({
        PRICE: '',
        HIGHDAY: '',
        LOWDAY: '',
        CHANGEPCT24HOUT: '',
        LASTUPDATE: ''
    })

    const consultaResultado = async () =>{
        setIsLoading(true)
        const { cripto, moneda } = cotizarCripto
        if(cripto.trim()==='') return
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}&api_key=38082f3373d504352ee503eae6e0d38d3ad3652f38c8d202e4315e6d4c5edd48`
        const response = await fetch(url)
        const result = await response.json()
        setResultado(result.DISPLAY[cripto][moneda])
        setIsLoading(false)
    }

    useEffect(()=>{
        try{
            consultaResultado()
        }catch(err){
            console.log(err)
        }
    },[cotizarCripto])

  return (
    <CriptoContext.Provider 
        value={{
            formData,
            setFormData,
            cotizarCripto,
            setCotizarCripto,
            resultado, 
            setResultado
        }}>
        {children}
    </CriptoContext.Provider>
  )
}
