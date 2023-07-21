import React from 'react'
import './Home.css'
import homeLogo from '../../assets/loginAnimado.svg'

const Home = () => {
  return (
    <>
         <h1 className="titulo">Home</h1>

         <img src={homeLogo} className='img' alt="Imagem tela inicial" />
    </>

  )
}

export default Home