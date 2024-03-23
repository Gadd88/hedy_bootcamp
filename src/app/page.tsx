import Formulario from "@/components/Formulario";
import MainContainer from "@/components/MainContainer";
import Resultado from "@/components/Resultado";
import CriptoContextProvider from "@/context/CriptoContext";

const consultaApi = async () =>{
  const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD' ;
  const result = await fetch(url);
  const response = await result.json()
  return response.Data
}

async function Home() {
  const listaCriptos = await consultaApi()
  
  return (
    <main className="flex flex-col items-center justify-between p-10">
      <section className="w-full rounded-lg p-10 bg-slate-950 mb-10 flex flex-col gap-3">
        <h1>Primer Proyecto Bootcamp NextJS + Typescript</h1>
        <p>Proyecto creado utilizando <strong>NextJS</strong>, <strong>TailwindCSS</strong> y <strong>Typescript</strong></p>
        <p>Para ruteo se utilizó el App Router nativo de NextJS, el manejo de estados globales es con ContextApi de react.</p>
        <p>Las secciones disponibles son: </p>
        <ul className="flex flex-col items-start gap-10">
          <li className="border-2 rounded-md p-5 bg-slate-700 min-w-full">
            <h3 className="text-center font-bold text-xl mb-2">Cotizador de Criptomonedas</h3>
            <p>Cotizador de precios de criptomonedas funcional, obtiene valores en 7 divisisas distintas (Pesos Argentinos, Dólar, Libra Esterlina, Euro, Peso Mexicano y Peso Colombiano)</p>
            <p>La actualización es en tiempo real, utilizo la api de CryptoCompare para obtener los precios</p>
          </li>
          <li className="border-2 rounded-md p-5 bg-slate-700 min-w-full">
            <h3 className="text-center font-bold text-xl mb-2">Sección SOBRE MI</h3>
            <p>Sección simple donde utilizo un elemento Iframe para conectar con mi web portfolio. Al emplear un iframe, se obtiene la web completa por lo que es totalmente navegable</p>
          </li>
          <li className="border-2 rounded-md p-5 bg-slate-700 min-w-full">
            <h3 className="text-center font-bold text-xl mb-2">Seccion POSTS</h3>
            <p>Sección que muestra el resultado de realizar un fetch a la api JSONPlaceholder, obtiene 10 resultados de la seccion /posts de dicha API.</p>
          </li>
        </ul>
      </section>
      <h1 className="text-5xl text-center">Precios de Criptomonedas</h1>
      <CriptoContextProvider>
        <MainContainer className="max-w-[1200px] mx-auto rounded-lg lg:p-10 h-full min-h-fit flex lg:flex-row gap-20 w-full flex-col p-2 items-center justify-center">
          <Formulario listaCriptos={listaCriptos} />
          <Resultado />
        </MainContainer>  
      </CriptoContextProvider>
    </main>
  );
}

export default Home
