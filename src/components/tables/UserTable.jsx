import { useContext } from "react"
import { UsuariosContext } from "../../context/UsersContext"
import { Table } from "react-bootstrap"
import { MdDelete, MdEdit } from "react-icons/md";
import './uTable.css'


const UserTable = () => {

    const { users, deleteUser } = useContext(UsuariosContext)
    const handleEditUser = () => {
        console.log("Editando usuario")
    }
    const handleDeleteUser = (id) => {
        deleteUser(id)
        console.log(`Usuario con id ${id} eliminado`)

    }

    return (
        <>
            <h2 className="text-center">Tabla de usuarios</h2>
            {users.length === 0 ? (
                <p className="parrafo-usuarios">No hay usuarios registrados</p>
            ) : (
                <Table className="tabla-usuarios" striped bordered hover variant="dark" >
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
                                <td>{users.nombre}</td>
                                <td>{users.email}</td>
                                <td>
                                    <button onClick={() => handleDeleteUser(users.id)}><MdDelete /></button>
                                    <button onClick={() => handleEditUser(users)}><MdEdit />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )
            }
        </>
    )
}

export default UserTable
