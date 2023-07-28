import React from 'react';
import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

function Footer() {
 

  return (
    <>
        <div className="flex justify-center bg-violet-900 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Blog pessoal Rita Almeida | Copyright: </p>
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

export default Footer