import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext';


function Navbar() {
 
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      alert('Usuário deslogado com sucesso')
      navigate('/login')
  }

  let navbarComponent

  return (
    <>
     <div className='w-full bg-violet-900 text-white flex justify-center py-1'>
          <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase m-4'>Blog Pessoal</Link>

            <div className='flex gap-4'>
              <button className='rounded-tl-full text-white bg-violet-900 hover:bg-violet-500 w-0/0 py-2'>
              <Link to='/login' className='hover:underline m-4'>Login</Link>
              </button>

              <button className='rounded-tl-full text-white bg-violet-900 hover:bg-violet-500 w-0/0 py-2'>
              <Link to='/home' className='hover:underline m-4'>Home</Link>
              </button>

              <button className='rounded-tl-full text-white bg-violet-900 hover:bg-violet-500 w-0/0 py-2'>
              <Link to='/postagens' className='hover:underline m-4'>Postagens</Link>
              </button>

              <button className='rounded-tl-full text-white bg-violet-900 hover:bg-violet-500 w-0/0 py-2'>
              <Link to='/temas' className='hover:underline m-4'>Temas</Link>
              </button>

              <button className='rounded-tl-full text-white bg-violet-900 hover:bg-violet-500 w-0/0 py-2'>
              <Link to='/cadastroTema' className='hover:underline m-4'>Cadastrar tema</Link>
              </button>

              <button className='rounded-tl-full text-white bg-violet-900 hover:bg-violet-500 w-0/0 py-2'>
              <div className='hover:underline m-4'>Perfil</div>
              </button>

              <button className='rounded-tl-full text-white bg-violet-900 hover:bg-violet-500 w-0/0 py-2'>
              <Link to='' onClick={logout} className='hover:underline m-4'>Sair</Link>
              </button>
              
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar