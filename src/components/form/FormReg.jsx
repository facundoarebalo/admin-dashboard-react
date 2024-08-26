import { useContext, useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { UsuariosContext } from '../../context/UsersContext'
import { v4 as uuidv4 } from 'uuid'
import './formStyle.css'

const FormReg = ({ editarUser, handleClose, setShow }) => {
    const { addUser, editUser } = useContext(UsuariosContext)
    const [user, setUser] = useState({
        id: "",
        nombre: "",
        apellido: "",
        email: ""
    })

    useEffect(() => {
        if (editarUser) {
            setUser(editarUser)
        } else {
            setUser(prevUser => ({ ...prevUser, id: uuidv4() }))
        }
    }, [editarUser])

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (editarUser) {
            editUser(user)
            handleClose()
        } else {
            const nuevoUsuario = { ...user, id: user.id || uuidv4() }
            addUser(nuevoUsuario)
        }

        setUser({
            id: uuidv4(), // Generamos una nueva ID para el próximo usuario
            nombre: "",
            apellido: "",
            email: ""
        })

        if (setShow) setShow(false)
    }







    return (
        <>
            <Form className="formulario-usuarios" onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese nombre"
                        value={user.nombre}
                        name='nombre'
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
                        value={user.apellido}
                        name='apellido'
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
                        value={user.email}
                        name='email'
                        required
                        onChange={handleChange}
                        maxLength={35}
                    />
                </Form.Group>
                <Button type="submit" variant={editarUser ? "warning" : "success"}>
                    {editarUser ? "Editar Usuario" : "Enviar Registro"}
                </Button>
            </Form>
        </>
    )
}

export default FormReg
