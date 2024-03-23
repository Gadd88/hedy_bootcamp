export const metadata = {
    title:'Sobre Mi - Matias Saade'
  }

function About() {
  return (
    <div className="w-full h-full">
        <section className="w-full p-5 min-h-full">
            <iframe
                className="w-full h-full min-h-[600px] rounded-lg" 
                src="https://matiassaade.netlify.app"></iframe>
        </section>
    </div>
  )
}

export default About