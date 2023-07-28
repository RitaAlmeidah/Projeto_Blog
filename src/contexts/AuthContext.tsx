import { createContext, ReactNode, useState } from "react"
import UsuarioLogin from "../models/UsuarioLogin"
import {login} from "../services/Service"


// 2ª PARTE - TIPAR O CONTEXTO
interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

//  1ª PARTE - CONSTRUÇÃO DA API CONTEXT
export const AuthContext = createContext({} as AuthContextProps)

// É A FUNÇÃO QUE VAI PROVER OS DADOS AO RESTO DA APLICAÇÃO
export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    // const usuario = { id, nome, ... }

    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true)

        try {
            
            await login(`/usuarios/logar`, userLogin, setUsuario)
            alert("Usuário Logado")
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            alert("Dados do usuário inconsistentes")
            setIsLoading(false)
        }
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ usuario, isLoading, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}