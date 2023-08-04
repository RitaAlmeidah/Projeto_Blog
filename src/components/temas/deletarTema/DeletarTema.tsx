import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../../contexts/AuthContext';
import Tema from '../../../models/Tema';
import { buscar, deletar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta';

function DeletarTema() {
    const [tema, setTema] = useState<Tema>({} as Tema)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'info')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'info')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/temas")
    }

    async function deletarTema() {
        try {
            await deletar(`/temas/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Tema apagado com sucesso', 'info')

        } catch (error) {
            toastAlerta('Erro ao apagar o Tema', 'erro')
        }

        retornar()
    }
    return (
        <div className="grid grid-cols-1  h-screen place-items-center font-bold bg-gradient-to-r from-indigo-500 to-purple-500 via-cyan-500 to-blue-500">
            <div className=" container flex flex-col items-center justify-center mx-auto">
                <div className='container w-1/3 mx-auto'>
                    <h1 className='text-4xl text-center my-4 text-white'>Deletar tema</h1>

                    <p className='text-center font-semibold mb-4 text-white'>Você tem certeza de que deseja apagar o tema a seguir?</p>

                    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                        <header className='py-2 px-6 bg-gradient-to-r from-indigo-400 to-purple-400 via-cyan-400 to-blue-400 text-indigo-900 text-white font-bold text-2xl'>Tema</header>
                        <p className='p-8 text-3xl bg-gradient-to-r from-indigo-200 to-purple-200 via-cyan-200 to-blue-200 h-full text-violet-700'>{tema.descricao}</p>
                        <div className="flex">
                            <button className='text-slate-100 bg-gradient-to-r from-green-400 to-blue-400 hover:from-blue-700 hover:to-green-500 Hover me w-full py-2' onClick={retornar}>Não</button>
                            <button className='w-full text-slate-100 bg-gradient-to-r from-pink-400 to-blue-400 hover:from-pink-500 hover:to-yellow-500 Hover me flex items-center justify-center' onClick={deletarTema}>
                                Sim
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletarTema