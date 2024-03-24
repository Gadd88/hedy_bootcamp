import Link from "next/link"
import React from "react"

const Navbar = ():React.JSX.Element => {
    return (
      <header>
          <nav className='p-5 bg-black flex justify-between items-center rounded-lg m-2'>
              <h2 className='text-xl font-bold hidden md:block'>NextJS</h2>
              <ul className="flex items-center justify-evenly w-full lg:w-5/6 gap-5">
                  <Link className="flex items-center justify-center" href='/'><span className="underline">Precios</span> Cripto</Link>
                  <Link className="flex items-center justify-center" href='/about'><span className="underline">Sobre</span> mi</Link>
                  <Link className="flex items-center justify-center" href='/posts'><span className="underline">Posts</span> JSON</Link>
              </ul>
          </nav>
      </header>
    )
  }
  
  export default Navbar