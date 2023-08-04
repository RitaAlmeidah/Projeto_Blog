import React from 'react';
import homeLogo from '../../assets/hello.svg';
import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';

//Construindo o NavBar
function Home() {

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 via-cyan-500 to-blue-500">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
            <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>

            <div className="flex justify-around gap-4">
              <ModalPostagem />
              <button className='rounded bg-gradient-to-r from-green-500 to-blue-600 hover:from-pink-500 hover:to-yellow-500 Hover me py-2 px-4'>Ver postagens</button>
            </div>
          </div>

          <div className="flex justify-center ">
            <img src={homeLogo} alt="" className='w-2/3' />

          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;
