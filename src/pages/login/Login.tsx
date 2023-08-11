import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { useNavigate, Link } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import './Login.css'


function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const { isLoading } = useContext(AuthContext)

  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/home')
    }
  }, [usuario])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    })
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    handleLogin(usuarioLogin)
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold bg-gradient-to-r from-indigo-500 to-purple-500 via-cyan-500 to-blue-500">
        <form className="flex justify-center items-center flex-col w-1/2 gap-4" onSubmit={login}>
          <h2 className="text-white text-5xl ">Entrar</h2>
          <div className="flex flex-col w-full text-indigo-900">
            <label htmlFor="usuario" className="text-white">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-violet-900 rounded p-2"
              value={usuarioLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full text-indigo-900">
            <label htmlFor="senha" className="text-white">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-violet-900 rounded p-2"
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <button type='submit' className="rounded bg-gradient-to-r from-green-500 to-blue-600 hover:from-pink-500 hover:to-yellow-500 Hover me text-white w-1/2 py-2 flex justify-center">
            {isLoading ? <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            /> :
              <span>Entrar</span>}
          </button>

          <hr className=" border-2 border-violet-900 rounded p-2" />

          <p className="text-indigo-900">
            Ainda não tem uma conta?{' '}
            <Link to="/cadastro" className="text-indigo-200 hover:underline">
              Cadastre-se
            </Link>
          </p>
        </form>
        <div className="fundoLogin hidden lg:block"></div>
      </div>
    </>
  );
}

export default Login;