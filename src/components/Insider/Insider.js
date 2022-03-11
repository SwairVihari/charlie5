import React from 'react'
import {Row, Col, Container, Accordion,Form, Button} from 'react-bootstrap'
import PhoneInput from 'react-phone-input-2'
import logo from '../img/spanish_image/insiderlogo.png'
import background from '../img/spanish_image/background.jpg'
import  Accordion1  from '../img/spanish_image/historiabg.png'
import  Accordion2  from '../img/spanish_image/plataforma.png'
import Styles from './Insider.module.css'
import Coin from '../img/spanish_image/coin.png'
import flag from '../img/spanish_image/flag.png'
import hands from '../img/spanish_image/hands.png'
import vip from '../img/spanish_image/vip.png'
import like from '../img/spanish_image/likes.png'
const Insider = () => {
  return (

    <>

    <Container fluid='true'>
        <Row>
            <Col className={Styles.logo} xs='auto' sm='auto' lg='auto'>
            <img src={logo}></img>
            </Col>
        </Row>

        <Row>
            <Col>
            <div className={Styles.backgroundImgDiv}>
                    <img className={Styles.backgroundImg} src={background}></img>
            </div>

            <div className={Styles.imgText}>
                <h1>
                Con presencia en más de 25 países en América Latina y el mundo.
                </h1>

                <p>
                Insider Financiero es el líder en asesoramiento financiero y 
                gestión de inversiones avalado por la confianza depositada en 
                nosotros para manejar
                más fondos que cualquier otra empresa de inversiones.
                </p>

                <p>
                Con interés en el desarrollo de la región, tan sólo en 
                Latinoamérica nuestro equipo ha entablado relaciones estrechas 
                con líderes de la industria, gobiernos, organismos privados, instituciones 
                financieras, etc.
                </p>
            </div>
            </Col>
        </Row>
    </Container>

    <Container fluid='true'>
    <Accordion defaultActiveKey="0">
  <Accordion.Item className={Styles.AccordionItem} eventKey="1">
    <Accordion.Header> <img className={Styles.accordianImg} src={Accordion1}></img></Accordion.Header>
    <Accordion.Body>
     <Row className={Styles.footer}>
         <Col lg={12} xs={12}><h1>2009</h1></Col>
         <Col lg={12} xs={12}><h3>Insider Financiero abre sus puertas en Colombia.</h3></Col>
     </Row>

     <Row className={Styles.footer}>
         <Col lg={12} xs={12}><h1>2010</h1></Col>
         <Col lg={12} xs={12}><h3>Insider Financiero y NetFinanciera se juntan para crear Insider Financials Group, establecido en Colombia.</h3></Col>
     </Row>

     <Row className={Styles.footer}>
         <Col lg={12} xs={12}><h1>2010</h1></Col>
         <Col lg={12} xs={12}><h3>Se abren las segundas oficinas en Colombia.</h3></Col>
     </Row>

     <Row className={Styles.footer}>
         <Col lg={12} xs={12}><h1>2012</h1></Col>
         <Col lg={12} xs={12}><h3>El primer proyecto masivo sobre asesoramiento en mercados financieros es completado con éxito.</h3></Col>
     </Row>

     <Row className={Styles.footer}>
         <Col lg={12} xs={12}><h1>2014</h1></Col>
         <Col lg={12} xs={12}><h3>Se consolida el primer equipo de inversión activa de Insider Financiero a nivel Latinoamérica.</h3></Col>
     </Row>

     <Row className={Styles.footer}>
         <Col lg={12} xs={12}><h1>2016</h1></Col>
         <Col lg={12} xs={12}><h3>Es lanzada la primer solución de inversión en conjunto con BBVA Colombia.</h3></Col>
     </Row>

     <Row className={Styles.footer}>
         <Col lg={12} xs={12}><h1>2018</h1></Col>
         <Col lg={12} xs={12}><h3>Gracias a la estrecha relación con BBVA Colombia, Insider Financiero empieza a ofrecer el abanico completo de soluciones financieras  y de inversión con que cuenta el día de hoy.</h3></Col>
     </Row>






     
    </Accordion.Body>
  </Accordion.Item>


  <Accordion.Item className={Styles.AccordionItem} eventKey="2">
    <Accordion.Header>
        <img className={Styles.accordianImg} src={Accordion2}></img>
    </Accordion.Header>
    <Accordion.Body>
     <h1 className={Styles.textAlign}>INVERSIONES</h1>

     <Row className={Styles.inverItem}>
    <Col lg={12} xs={12}>
        <img className={Styles.inverImg} src={Coin}></img>
    </Col>
    <Col className={Styles.inverText} lg={12} xs={12}><h3>EFTs</h3></Col>
    <Col className={Styles.inverText} lg={12} xs={12}><h3>Gracias a la estrecha relación con BBVA Colombia, Insider Financiero empieza a ofrecer el abanico completo de soluciones financieras  y de inversión con que cuenta el día de hoy.</h3></Col>
     </Row>

     <Row className={Styles.inverItem}>
    <Col lg={12} xs={12}>
        <img className={Styles.inverImg} src={flag}></img>
    </Col>
    <Col className={Styles.inverText} lg={12} xs={12}><h3>EFTs</h3></Col>
    <Col className={Styles.inverText} lg={12} xs={12}><h3>Gracias a la estrecha relación con BBVA Colombia, Insider Financiero empieza a ofrecer el abanico completo de soluciones financieras  y de inversión con que cuenta el día de hoy.</h3></Col>
     </Row>

     <Row className={Styles.inverItem}>
    <Col lg={12} xs={12}>
        <img className={Styles.inverImg} src={hands}></img>
    </Col>
    <Col className={Styles.inverText} lg={12} xs={12}><h3>EFTs</h3></Col>
    <Col className={Styles.inverText} lg={12} xs={12}><h3>Gracias a la estrecha relación con BBVA Colombia, Insider Financiero empieza a ofrecer el abanico completo de soluciones financieras  y de inversión con que cuenta el día de hoy.</h3></Col>
     </Row>

     <Row className={Styles.inverItem}>
    <Col lg={12} xs={12}>
        <img className={Styles.inverImg} src={like}></img>
    </Col>
    <Col className={Styles.inverText} lg={12} xs={12}><h3>EFTs</h3></Col>
    <Col className={Styles.inverText} lg={12} xs={12}><h3>Gracias a la estrecha relación con BBVA Colombia, Insider Financiero empieza a ofrecer el abanico completo de soluciones financieras  y de inversión con que cuenta el día de hoy.</h3></Col>
     </Row>

     <Row className={Styles.inverItem}>
    <Col lg={12} xs={12}>
        <img className={Styles.inverImg} src={vip}></img>
    </Col>
    <Col className={Styles.inverText} lg={12} xs={12}><h3>EFTs</h3></Col>
    <Col className={Styles.inverText} lg={12} xs={12}><h3>Gracias a la estrecha relación con BBVA Colombia, Insider Financiero empieza a ofrecer el abanico completo de soluciones financieras  y de inversión con que cuenta el día de hoy.</h3></Col>
     </Row>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </Container>


    <Container fluid={true}>
            <Row>
                <Col className={Styles.border} lg='auto'>

                    <h1 className={Styles.formHead1}>¿Más información?</h1>
                    <h1 className={Styles.formHead2}>Déjanos tus datos y nos comunicaremos contigo.</h1>

                    <div className={Styles.FormContainer}>
                      
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
                country={''}
                inputClass={Styles.phoneinput}
                containerStyle={{width:"100%"}}/>
    
  </Form.Group>


  <Button className={Styles.Button}> Enviar</Button>
</Form>
                        
                    </div>
                    
                </Col>
            </Row>

            <Row>
            <Col className={Styles.logo} xs='auto' sm='auto' lg='auto'>
            <img src={logo}></img>
            </Col>
        </Row>

        <Row className={Styles.footerRow}>
            <Col xs='auto' lg='auto'>INICO</Col>
            <Col xs='auto' lg='auto'>HISTORIA</Col>
            <Col xs='auto' lg='auto'>PLATAFORMA</Col>
            <Col xs='auto' lg='auto'>CONTACTO</Col>
        </Row>
    </Container>

    <Row className={Styles.footer}>
        <Col lg={12} xs={12}>Encuentranos en:  Facebook</Col>
        <Col lg={12} xs={12}>Terminos y Condiciones   Politica de Privacidad</Col>
        <Col lg={12} xs={12}>© 2019 Insider Financiero, Inc. Todos los derechos reservados</Col>
    </Row>



    
    </>
  )
}

export default Insider