import { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import './formStyle.css'
import { UsuariosContext } from '../../context/UsersContext'

const FormReg = () => {

    const { users, addUser } = useContext(UsuariosContext)

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nombre, apellido, email)
        setNombre('')
        setApellido('')
        setEmail('')
        addUser({ nombre, apellido, email })

    }
    return (
        <>
            <Form className="formulario-usuarios" onSubmit={handleSubmit}>

                <Form.Group controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese nombre"
                        value={nombre}
                        required
                        onChange={(e) => setNombre(e.target.value)}
                        minLength={4}
                        maxLength={12}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicLastName">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese apellido"
                        value={apellido}
                        required
                        onChange={(e) => setApellido(e.target.value)}
                        minLength={4}
                        maxLength={12}

                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Ingrese email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        maxLength={35}
                    />
                </Form.Group>

                <Button className='mt-3 btn-usuarios' variant="primary" type="submit">
                    Agregar Usuario
                </Button>


            </Form>
        </>
    )
}

export default FormReg
