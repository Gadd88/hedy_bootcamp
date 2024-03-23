interface IResultado {
  resultado: {
    PRICE: string
    HIGHDAY: string
    LOWDAY: string
    CHANGEPCT24HOUT: string
    LASTUPDATE: string
  }
}

export default function Cotizacion({resultado}: IResultado): React.JSX.Element {

  return (
    <div className='text-white lg:w-full flex flex-col gap-5'>
      <h2 className="text-center font-bold">Seleccione su cripto y moneda</h2>
      <p className='text-xl border-2 border-blue-400 p-5 rounded-md block w-full'>Precio actual: <span className='font-bold'>{resultado.PRICE}</span></p>
      <p className='text-md'>Precio más alto del día: <span className='font-bold'>{resultado.HIGHDAY}</span></p>
      <p className='text-md'>Precio más bajo del día: <span className='font-bold'>{resultado.LOWDAY}</span></p>
      <p className='text-md'>Variación últimas 24 horas: <span className='font-bold'>{resultado.CHANGEPCT24HOUT}</span></p>
      <p className='text-md'>Última actualización: <span className='font-bold'>{resultado.LASTUPDATE}</span></p>  
    </div>
  )
}
