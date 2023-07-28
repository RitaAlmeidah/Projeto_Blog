import {useState} from "react";
import './Contador.css'
import homeCurtida from '../../../assets/curtidaAnimada2.svg';

function Contador() {
    const [valor,setvalor] =  useState(0)

    function somarMaisUm(){
        setvalor(valor + 1)
    }

    return (
    <div className="contador"> 
        <h1>Curta nossa página!</h1>
        <img src={homeCurtida} className='img' alt="Imagem tela curtidas" /> 
        <p> Quantidade de curtidas: { valor }   </p>
        <button onClick={somarMaisUm} className="bg-violet-700 hover:bg-orange-400 text-white font-bold py-0 px-6 rounded outline">Curtir</button>
    </div>
  )
}

export default Contador