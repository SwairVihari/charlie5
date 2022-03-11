import React from 'react'
import Styles from './FormModal.module.css'
import {Form, Button} from 'react-bootstrap'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import cards from './img/card.png'
const FormModal = () => {
  return (
    <>
    <h3 className={Styles.FormHeader}>Averigua cómo empezar a invertir en Amazon hoy</h3>

    <Form className={Styles.form}>
  <Form.Group className="mb-3">
    <Form.Label className={Styles.label}>Nombre</Form.Label>
    <Form.Control className={Styles.input} type="text" placeholder="p. ej. Jose" />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label className={Styles.label}>Apellido</Form.Label>
    <Form.Control className={Styles.input} type="text" placeholder="p. ej. Garcia" />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label className={Styles.label}>Correo Electrónico</Form.Label>
    <Form.Control className={Styles.input} type="email" placeholder="p. ej. name@gmail.com" />
  </Form.Group>


  <Form.Group className="mb-3">
    <Form.Label className={Styles.label}>Número de Teléfono</Form.Label>
    <PhoneInput className='mb-3'
                country={'ie'}
                inputClass={Styles.phoneinput}
                containerStyle={{width:"100%"}}/>
    
  </Form.Group>


  <Button className={Styles.Button}> Solicitar información</Button>
</Form>

<div className={Styles.FormHeader}>
    <img className={Styles.card} src={cards}></img>
</div>


    </>
  )
}

export default FormModal