import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Postagem from '../../../models/Postagem';
import Tema from '../../../models/Tema';
import { buscar, atualizar, cadastrar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta';

function FormularioPostagem() {
  let navigate = useNavigate();

  //serve para identificar se vamos cadastrar ou atualizar.
  //serve para acessar nossa url, procurando o parametro id, esta localização é feito com o useParams.
  const { id } = useParams<{ id: string }>();


  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  //esta observando e vai pedir para ver se foi alterado o estado.
  //vai guardar um arrey de temas ou seja vai listar todos os temas tem que iniciar com 0.
  const [temas, setTemas] = useState<Tema[]>([]);

  //vai guardar as informações em um tema id específico
  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: '',
  });

  //inicializando estado onde vamos receber os dados também tem que iniciar em 0.
  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: '',
    texto: '',
    data: '',
    tema: null,
    usuario: null,
  });

  //conexão com o back - rotas de requisição do back end na services buscar('/postagem/..)
  async function buscarPostagemPorId(id: string) {
    await buscar(`/postagem/${id}`, setPostagem, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarTemaPorId(id: string) {
    await buscar(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarTemas() {
    await buscar('/temas', setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  //é disparado sempre que o usuario esta logado, fica verificando através o token
  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/');
    }
  }, [token]);

  //fica verificando se tem um tema através do id.
  useEffect(() => {
    buscarTemas();
    if (id !== undefined) {
      buscarPostagemPorId(id);
      console.log(tema);
    }
  }, [id]);


  //sempre vai ficar verificando se tem alguma alteração no estado através do tema.
  //é disparada sempre que houver alguma alteração de estado em tema.
  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema, //aqui ele confirma que tema não esta mais null.
    });
  }, [tema]);

  //esta presente desde a realização do cadastro
  //vai pegar as informações digitadas para atualizar o estado.
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setPostagem({
      ...postagem,
      [e.target.name]: e.target.value,
      tema: tema,
      usuario: usuario,
    });
  }

  function retornar() {
    navigate('/postagens');
  }


  async function gerarNovaPostagem(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ postagem });

    //só vai entrar se estiver atualizando um postagem.
    if (id != undefined) {
      try {
        await atualizar(`/postagem`, postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });
        toastAlerta('Postagem atualizada com sucesso', 'sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlerta('Erro ao atualizar a Postagem', 'erro');
        }
      }
    } else {

      //só vai entrar se estiver cadastrando uma nova postagem.
      try {
        await cadastrar(`/postagem`, postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta('Postagem cadastrada com sucesso', 'sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlerta('Erro ao cadastrar a Postagem', 'erro');
        }
      }
    }
  }

  //aqui ele esta esperando preencher o tema e tornar falso para autorizar cadastrar ou editar.
  const carregandoTema = tema.descricao === '';


  return (
    <div className="grid grid-cols-1  h-screen place-items-center font-bold bg-gradient-to-r from-indigo-500 to-purple-500 via-cyan-500 to-blue-500">
      <div className="container flex flex-col mx-auto items-center">
        <h1 className="text-4xl text-center my-8 text-white">{id !== undefined ? 'Editar Postagem' : 'Cadastrar Postagem'}</h1>

        <form onSubmit={gerarNovaPostagem} className="flex flex-col w-1/2 gap-4">
          <div className="flex flex-col gap-2">
            <label className='text-white' htmlFor="titulo">Titulo da postagem</label>
            <input
              value={postagem.titulo}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Titulo"
              name="titulo"
              required
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className='text-white' htmlFor="titulo">Texto da postagem</label>
            <input
              value={postagem.texto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Texto"
              name="texto"
              required
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className='text-white'>Tema da postagem</p>
            <select name="tema" id="tema" className='border p-2 border-slate-800 rounded' onChange={(e) => buscarTemaPorId(e.currentTarget.value)}>
              <option value="" selected disabled>Selecione um tema</option>
              {temas.map((tema) => (
                <>
                  <option value={tema.id} >{tema.descricao}</option>
                </>
              ))}
            </select>
          </div>
          <button disabled={carregandoTema} type='submit' className='rounded disabled:bg-slate-200 bg-gradient-to-r from-green-400 to-blue-400 hover:from-blue-700 hover:to-green-500 text-white font-bold w-1/2 mx-auto block py-2'>
            {carregandoTema ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormularioPostagem;