import { useContext, useState } from "react"
import { UsuariosContext } from "../../context/UsersContext"
import { Table, Modal } from "react-bootstrap"
import { MdDelete, MdEdit } from "react-icons/md";
import './uTable.css'
import FormReg from "../form/FormReg";


const UserTable = () => {
    const { users, deleteUser } = useContext(UsuariosContext)
    const [show, setShow] = useState(false);
    const [editarUser, setEditarUser] = useState(null)

    const handleClose = () => setShow(false);

    const handleEdit = (user) => {
        setEditarUser(user)
        setShow(true)

    }


    return (
        <>
            <p className="text-center">Agregar usuario nuevo</p>
            <FormReg />
            <h2 className="text-center mt-3">Tabla de usuarios</h2>
            {users.length === 0 ? (
                <p className="parrafo-usuarios">No hay usuarios registrados</p>
            ) : (
                <Table className="tabla-usuarios mt-3" striped bordered hover variant="dark" >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.nombre}</td>
                                <td>{user.apellido}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button onClick={() => handleEdit(user)}><MdEdit /> </button>
                                    <button onClick={() => deleteUser(user.id)}><MdDelete /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )
            }

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{editarUser ? "Editar usuario" : "Agregar usuario"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormReg
                        editarUser={editarUser}
                        handleClose={handleClose}
                        setShow={setShow}
                    />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default UserTable
