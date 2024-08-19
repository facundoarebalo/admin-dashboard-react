import { useContext } from "react"
import { UsuariosContext } from "../../context/UsersContext"

const UserTable = () => {

    const { users } = useContext(UsuariosContext)

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((users) => (
                        <tr key={users.id}>
                            <td>{users.id}</td>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <td>
                                <button onClick={() => handleDeleteUser(users.id)}>Eliminar</button>
                                <button onClick={() => handleEditUser(users)}>Editar</button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default UserTable
