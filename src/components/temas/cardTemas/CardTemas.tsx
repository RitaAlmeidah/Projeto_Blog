import { Link } from 'react-router-dom';
import Tema from '../../../models/Tema';

interface CardTemaProps {
  tema: Tema
}

function CardTemas({ tema }: CardTemaProps) {
  return (
    <div className='border-indigo-500 border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 text-white font-bold text-2xl bg-gradient-to-r from-indigo-300 to-purple-300 via-cyan-300 to-blue-300'>Tema</header>
      <p className='p-8 text-3xl text-indigo-900 bg-gradient-to-r from-indigo-200 to-purple-200 via-cyan-200 to-blue-200'>{tema.descricao}</p>
      <div className="flex">
        <Link to={`/editarTema/${tema.id}`} className='w-full text-slate-100 bg-gradient-to-r from-green-400 to-blue-400 hover:from-blue-700 hover:to-green-500 Hover me flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarTema/${tema.id}`} className='text-white bg-gradient-to-r from-pink-400 to-blue-400 hover:from-pink-500 hover:to-yellow-500 Hover me w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardTemas