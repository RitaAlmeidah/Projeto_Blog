import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function Footer() {

  const { usuario, handleLogout } = useContext(AuthContext)

  let footerComponent

  let data = new Date().getFullYear()

  if (usuario.token !== '') {
    footerComponent = (
      <>
        <div className="flex justify-center bg-violet-900 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Blog pessoal Rita Almeida | Copyright: {data}</p>
            <p className='text-lg'>Acesse minhas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo className='bg-gradient-to-r from-indigo-500 to-purple-500 via-cyan-500 to-blue-500' size={48} weight='bold' />
              <GithubLogo className='bg-gradient-to-r from-indigo-500 to-purple-500 via-cyan-500 to-blue-500' size={48} weight='bold' />
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer