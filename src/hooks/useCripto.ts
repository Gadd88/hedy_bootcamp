import { useState, useEffect } from "react"

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

export default function useCripto(){

    const [formData, setFormData] = useState<typeFormData>({
        moneda:'',
        cripto:''
    })
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
        const { cripto, moneda } = cotizarCripto
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}&api_key=38082f3373d504352ee503eae6e0d38d3ad3652f38c8d202e4315e6d4c5edd48`
        const response = await fetch(url)
        const result = await response.json()
        setResultado(result.DISPLAY[cripto][moneda])
    }

    // useEffect(()=>{
    //    consultaResultado(cotizarCripto)
    // },[cotizarCripto])

    return {
        setCotizarCripto,
        setFormData,
        consultaResultado,
        cotizarCripto,
        formData,
        resultado
    }
}
