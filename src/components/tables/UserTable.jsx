import { useContext, useState } from "react"
import { UsuariosContext } from "../../context/UsersContext"
import { Table, Modal, Button, Form } from "react-bootstrap"
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
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);


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
                                    <button onClick={() =>
                                        handleShow()

                                    }><MdEdit />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )
            }

            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleEditUser}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingrese contraseña" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Guardar cambios
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal> */}
        </>
    )
}

export default UserTable
