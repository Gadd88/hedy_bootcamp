'use client'
import React, { useContext } from 'react'
import Cotizacion from './Cotizacion'
import { CriptoContext } from '@/context/CriptoContext'

export default function Resultado():React.JSX.Element {
    const { resultado } = useContext(CriptoContext)
    
    return (
        <div>
            {
                resultado && <Cotizacion resultado={resultado}/>
            }
        </div>
    )
}
