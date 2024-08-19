import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UsuariosContext = createContext()

const UsersContext = ({ children }) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const obtenerUsuarios = async () => {
            try {
                setLoading(true)
                setError(null)
                const response = await axios.get('http://localhost:8000/usuarios')
                setUsers(response.data)
            } catch (error) {
                setError(error.message)
            }
        }
        obtenerUsuarios()
    }, [])

    console.log(users, "usuarios")

    return (
        <UsuariosContext.Provider
            value={{
                users,
                loading,
                error
            }}
        >
            {children}
        </UsuariosContext.Provider>
    )
}



export default UsersContext;
