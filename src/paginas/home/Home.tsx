import React from 'react';
import { useState } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import './Home.css';
import homeLogo from '../../assets/hello.svg';


//Construindo o NavBar
function Home() {
  return (
      <>
      <div className="bg-orange-500 flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
            <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>

            <div className="flex justify-around gap-4">
            
              <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
            </div>
          </div>

          <div className="flex justify-center ">
            <img src={homeLogo} alt="" className='w-2/3' />
    
          </div>
        </div>
      </div>
    
    </>
  );
}

export default Home;


//Criando Rotas com o React Router Dom
/*const Home = () => {
  let navigate = useNavigate()
  return (

      <div>
          <h2 className="text-slate-900 text-5xl  m-4">Home</h2>
          <div>
              <button type='submit'
                  className='hover:underline mx-4'
                  onClick={() => { navigate('/login') }}>
                  Login useNavigate
              </button>
              <Link to='/login' className='hover:underline mx-4'>Login por Link</Link>
          </div>

      </div>

  )
}

export default Home*/


//Codificando Grid no Tailwind CSS em React
/*function Home() {
  return (
      <>

          <div>
              <div className='grid grid-cols-12 gap-2 m-4'>

                  <div className='col-span-6 bg-green-300'>
                      container 1
                  </div>

                  <div className='col-span-6 bg-yellow-200'>
                      container 2
                  </div>

              </div>
              <div className='grid grid-cols-12 gap-2 m-4'>

                  <div className='col-span-8 bg-green-300'>
                      container 1
                  </div>

                  <div className='col-span-4 bg-yellow-200'>
                      container 2
                  </div>

              </div>

              <div className='grid grid-cols-12 gap-2 m-4'>

                  <div className='col-span-4 bg-green-300'>
                      container 1
                  </div>

                  <div className='col-span-4 bg-yellow-200'>
                      container 2
                  </div>

                  <div className='col-span-4 bg-red-500'>
                      container 3
                  </div>

              </div>

              <div className='grid grid-cols-12 gap-2 m-4'>

                  <div className='col-span-3 bg-green-300'>
                      container 1
                  </div>

                  <div className='col-span-3 bg-yellow-200'>
                      container 2
                  </div>

                  <div className='col-span-3 bg-red-500'>
                      container 3
                  </div>

                  <div className='col-span-3 bg-blue-500'>
                      container 4
                  </div>

              </div>

              <div className='grid grid-cols-12 gap-2 m-4'>

                  <div className='col-span-4 bg-green-300'>
                      container 1
                  </div>

                  <div className='col-span-4 bg-yellow-200'>
                      container 2
                  </div>

                  <div className='col-span-2 bg-red-500'>
                      container 3
                  </div>

                  <div className='col-span-2 bg-blue-500'>
                      container 4
                  </div>

              </div>

          </div>



      </>
  );
}

export default Home;*/


// Codificando Flex-Box no Tailwind CSS em React
/*function Home() {
  return (
    <>
      <div>

        <h3 className='text-xl'>justify-content alinhamento horizontal</h3>
        <h5>justify-start Esquerda</h5>

        <div className="flex flex-row  justify-start m-3">
          <div className='basis-1/4 bg-red-500'>01</div>
          <div className='basis-1/4 bg-gray-400'>01</div>
        </div>
      </div>

      <h5>justify-end Direita</h5>

      <div className="flex flex-row  justify-end m-3">
        <div className='basis-1/4 bg-red-500'>01</div>
        <div className='basis-1/4 bg-gray-400'>01</div>
      </div>

      <h5>justify-center Centro</h5>

      <div className="flex flex-row  justify-center m-3">
        <div className='basis-1/4 bg-red-500'>01</div>
        <div className='basis-1/4 bg-gray-400'>01</div>
      </div>

      <h5>justify-around estremidades</h5>

      <div className="flex flex-row  justify-between m-3">
        <div className='basis-1/4 bg-red-500'>01</div>
        <div className='basis-1/4 bg-gray-400'>01</div>
      </div>

      <h5>justify-around estremidades com espaçamento</h5>

      <div className="flex flex-row  justify-around m-3">
        <div className='basis-1/4 bg-red-500'>01</div>
        <div className='basis-1/4 bg-gray-400'>01</div>
      </div>

      <div className='mt-12'>

        <h3 className='text-xl'>justify-content alinhamento vertical</h3>
        <div className='w-auto h-60 bg-gray-400 flex  justify-center items-start m-3'>
          <div className='basis-1/4 bg-red-500'>justify-center items-start alinhamento horizontal centro/vertical topo</div>
        </div>

        <div className='w-auto h-60 bg-gray-400 flex  justify-center items-center m-3'>
          <div className='basis-1/4 bg-red-500'>justify-center items-start alinhamento horizontal centro/vertical centro</div>
        </div>

        <div className='w-auto h-60 bg-gray-400 flex  justify-center items-end m-3'>
          <div className='basis-1/4 bg-red-500'>justify-center items-start alinhamento horizontal centro/vertical base</div>
        </div>
      </div>

    </>
  );
}

export default Home;*/


/*function Home() {
  
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
    <div className="border border-purple-800 bg-purple-800">
      {loggedIn ? (
        <h1>Bem-vindo de volta!</h1>
      ) : (
        <button onClick={() => setLoggedIn(true)} className="bg-purple-700 hover:bg-orange-400 text-white font-bold py-0 px-8 rounded outline">Entrar</button>
      )}
    </div>

    </>
  );
}
export default Home;*/