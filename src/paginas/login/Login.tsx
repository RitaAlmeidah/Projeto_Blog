import React from 'react';
import { useNavigate, Link } from 'react-router-dom';


//router-dom Criando as Rotas
function Login() {
    return (
        <>
            <div className="h-96 mb-96">

                <h1 className='text-xl'>Login</h1>

            </div>
        </>


// Componentes NavBar, Footer e Home
/*const Login = () => {
    let navigate = useNavigate()
    return (
        <div>
            <h2 className="text-slate-900 text-5xl   m-4">Login</h2>
            <div>
                <button type='submit'
                    onClick={() => { navigate('/home') }}
                    className='hover:underline mx-4'>
                    Login useNavigate
                </button>
                <Link to='/home' className='hover:underline  mx-4'>Login por Link</Link>
            </div>

        </div>*/
    )
}

export default Login