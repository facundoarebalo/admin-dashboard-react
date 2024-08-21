import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UsuariosContext = createContext()

const UsersContext = ({ children }) => {
    const [users, setUsers] = useState([])


    const getUsers = async () => {
        try {
            const response = await axios.get("http://localhost:8000/usuarios")
            setUsers(response.data)
        }
        catch (error) {
            console.error("Error fetching users:", error.message)
        }
    }

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/usuarios/${id}`)
            await getUsers();
        }
        catch (error) {
            console.error("Error deleting user:", error.message)
        }
    }
    


    useEffect(() => {
        getUsers()
    }, [])



    return (
        <UsuariosContext.Provider
            value={{
                users,
                getUsers,
                deleteUser
            }}
        >
            {children}
        </UsuariosContext.Provider>
    )
}



export default UsersContext;
