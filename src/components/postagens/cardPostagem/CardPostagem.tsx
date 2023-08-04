import React from 'react';
import { Link } from 'react-router-dom';
import Postagem from '../../../models/Postagem';

interface CardPostagemProps {
  post: Postagem
}

function CardPostagem({ post }: CardPostagemProps) {
  return (
    <div className='border-indigo-500 border flex flex-col rounded overflow-hidden justify-between bg-gradient-to-r from-indigo-200 to-purple-200 via-cyan-200 to-blue-200'>
      <div>
        <div className="flex w-full bg-gradient-to-r from-indigo-300 to-purple-300 via-cyan-300 to-blue-300 py-2 px-4 items-center gap-4">
          <img src={post.usuario?.foto} className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase'>{post.usuario?.nome}</h3>
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase'>{post.titulo}</h4>
          <p>{post.texto}</p>
          <p>Tema: {post.tema?.descricao}</p>
          <p>Data: {new Intl.DateTimeFormat(undefined, {
            dateStyle: 'full',
            timeStyle: 'medium',
          }).format(new Date(post.data))}</p>
        </div>
      </div>
      <div className="flex">
        <Link to={`/editarPostagem/${post.id}`} className='w-full text-white bg-gradient-to-r from-green-400 to-blue-400 hover:from-blue-700 hover:to-green-500 Hover me flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarPostagem/${post.id}`} className='text-white bg-gradient-to-r from-pink-400 to-blue-400 hover:from-pink-500 hover:to-yellow-500 Hover me w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardPostagem