import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Postagem from '../../../models/Postagem';
import { buscar } from '../../../services/Service';
import CardPostagem from '../cardPostagem/CardPostagem';
import { toastAlerta } from '../../../util/toastAlerta';

function ListaPostagens() {

  //esta observando e vai pedir para ver se foi alterado o estado.
  //vai guardar um arrey de postagens ou seja vai listar todos as postagens tem que iniciar com 0.
  const [postagens, setPostagens] = useState<Postagem[]>([]);

  let navigate = useNavigate();

  //esta criando um rook ele busca a informação no AuthContext
  //AuthContext é para centralizar as informações que podem ser utilizadas em vários lugares diferentes.
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  //é disparado sempre que o usuario esta logado, fica verificando através o token.
  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/');
    }
  }, [token]);


  //está tentando buscar/conexão com o back - rotas de requisição do back end na services buscar a url('/postagem/..)
  //é uma função assincrona
  async function buscarPostagens() {
    try {
      await buscar('/postagem', setPostagens, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    buscarPostagens();
  }, [postagens.length]);


  return (
    <>
      {postagens.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {postagens.map((postagem) => (
          <CardPostagem key={postagem.id} post={postagem} />
        ))}
      </div>
    </>
  );
}

export default ListaPostagens;