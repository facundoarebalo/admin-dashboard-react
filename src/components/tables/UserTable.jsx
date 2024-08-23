import { useContext, useState } from "react"
import { UsuariosContext } from "../../context/UsersContext"
import { Table, Modal, Button, Form } from "react-bootstrap"
import { MdDelete, MdEdit } from "react-icons/md";
import './uTable.css'
import FormReg from "../form/FormReg";


const UserTable = () => {
    const { users, deleteUser } = useContext(UsuariosContext)
    const [show, setShow] = useState(false);
    const [editarUser, setEditarUser] = useState(null)

    const handleClose = () => setShow(false);

    const handleEdit = (users) => {
        setEditarUser(users)
        setShow(true)

    }
    const handleDeleteUser = (id) => {
        deleteUser(id)

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
                        {users.map((users) => (
                            <tr key={users.id}>
                                <td>{users.id}</td>
                                <td>{users.nombre}</td>
                                <td>{users.email}</td>
                                <td>
                                    <button onClick={() => handleDeleteUser(users.id)}><MdDelete /></button>
                                    <button onClick={() => handleEdit(users)}><MdEdit />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )
            }

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormReg editarUser={editarUser} handleClose={handleClose} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default UserTable
