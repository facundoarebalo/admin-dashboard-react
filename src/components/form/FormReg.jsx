import { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { UsuariosContext } from '../../context/UsersContext'
import { MdEdit } from "react-icons/md";
import './formStyle.css'

const FormReg = (editarUser, handleClose) => {

    const { addUser, editUser } = useContext(UsuariosContext)

    const [usuario, setUsuario] = useState({
        nombre: editarUser ? editarUser.nombre : "",
        apellido: editarUser ? editarUser.apellido : "",
        email: editarUser ? editarUser.email : "",
    });
    const handleChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editarUser) {
            editUser(usuario);

            handleClose();

            setUsuario({
                nombre: "",
                apellido: "",
                email: "",
            });
        } else {
            addUser(usuario);
            setUsuario({
                nombre: "",
                apellido: "",
                email: "",
            });
        }
    };


    return (
        <>
            <Form className="formulario-usuarios" onSubmit={handleSubmit}>

                <Form.Group controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese nombre"
                        value={usuario.nombre}
                        required
                        onChange={handleChange}
                        minLength={4}
                        maxLength={12}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicLastName">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese apellido"
                        value={usuario.apellido}
                        required
                        onChange={handleChange}
                        minLength={4}
                        maxLength={12}

                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Ingrese email"
                        value={usuario.email}
                        required
                        onChange={handleChange}
                        maxLength={35}
                    />
                </Form.Group>

                {editUser ? (
                    <Button type="submit" variant="warning">
                        {" "}
                        Editar Usuario
                    </Button>
                ) : (
                    <Button type="submit" variant="success">
                        {" "}
                        Enviar Registro
                    </Button>
                )}
            </Form>
        </>
    )
}

export default FormReg
