import React from 'react'
import { Form } from 'react-bootstrap';

function Name({ value, onChange, edit }) {
    const label = <Form.Label>Nombre</Form.Label>;

    if (edit) {
        return (
            <Form.Group>
                {label}
                <Form.Control type="text" placeholder="Nombre" name="nombre" onChange={onChange} value={value} />
            </Form.Group>
        );
    } else {
        return <p><strong>Nombre: </strong>{value}</p>;
    }
}

export default Name;