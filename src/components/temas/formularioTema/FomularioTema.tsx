import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext'
import Tema from '../../../models/Tema';
import { atualizar, buscar, cadastrar } from '../../../services/Service';

function FormularioTema() {
  const [tema, setTema] = useState<Tema>({} as Tema);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    await buscar(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value
    })

    console.log(JSON.stringify(tema))
  }

  async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await atualizar(`/temas`, tema, setTema, {
          headers: {
            'Authorization': token
          }
        })

        alert('Tema atualizado com sucesso')
        retornar()

      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('O token expirou, favor logar novamente')
          handleLogout()
        } else {
          alert('Erro ao atualizar o Tema')
        }

      }

    } else {
      try {
        await cadastrar(`/temas`, tema, setTema, {
          headers: {
            'Authorization': token
          }
        })

        alert('Tema cadastrado com sucesso')

      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('O token expirou, favor logar novamente')
          handleLogout()
        } else {
          alert('Erro ao cadastrado o Tema')
        }
      }
    }

    retornar()
  }

  function retornar() {
    navigate("/temas")
  }

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado');
      navigate('/login');
    }
  }, [token]);

  return (
    <div className="grid grid-cols-1  h-screen place-items-center font-bold bg-gradient-to-r from-indigo-500 to-purple-500 via-cyan-500 to-blue-500">
      <div className=" container flex flex-col items-center justify-center mx-auto">
        <h1 className="text-4xl text-center my-8 text-white">
         {id === undefined ? 'Cadastre um novo tema' : 'Editar tema'}
        </h1>

       <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoTema}>
         <div className="flex flex-col gap-2 border-slate-800 w-full text-indigo-900">
           <label htmlFor="descricao">Descrição do tema</label>
           <input
              type="text"
              placeholder="Descrição"
             name='descricao'
             className="border-2 border-slate-700 rounded p-2"
             value={tema.descricao}
             onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
           />
          </div>
          <button
            className="rounded text-slate-100 bg-gradient-to-r from-green-500 to-blue-600 hover:from-pink-500 hover:to-yellow-500 Hover meg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block "
            type="submit"
          >
            {id === undefined ? 'Cadastrar' : 'Editar'}
         </button>
        </form>
      </div>
    </div>
  );
}

export default FormularioTema;