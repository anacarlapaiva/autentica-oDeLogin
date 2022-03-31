//facilitador para usar o contexto nos componentes

import { useContext } from "react"
import { AuthContext } from "."

export const useAuth = () => {
    const context = useContext(AuthContext)

    //retorna o proprio context para finalizar 
    return context
}