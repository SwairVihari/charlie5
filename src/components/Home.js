import React from 'react'
import PhoneInput from 'react-phone-input-2'
import {Container,Row,Col, Form, Button} from 'react-bootstrap'
import Styles from './Home.module.css'
import graph from './img/graph.jpg'
import man from './img/man.jpg'
import card from './img/card.png'
import FormModal from './FormModal'
import mobile from './img/mobile.jpg'
const Home = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // for smoothly scrolling
        });

        console.log("FUnction is working")
      };
    
  return (
      <>
    <Container fluid={true} className={Styles.header}>
        <Row>
            <Col>
                <h1 className={Styles.h1}>
                ¡Las acciones de  <span className={Styles.amazon}>AMAZON</span> 
                <br/>
                se disparan por los cielos!
                </h1>
            </Col>

            <Col lg={3} className={Styles.formBlock}>
                <div >
                    <FormModal/>
                    <img className={Styles.imgGraph} src={mobile}></img>
                </div>
            </Col>
           
        </Row>

    </Container>

    <Container>
        <Row>
            <Col lg={7}>
            <h3 className={Styles.subheader}>
            Este es el mejor momento para empezar a invertir
            </h3>
            </Col>
        </Row>

     

        <Row>
            <Col lg={7}>
            <h5 className={`${Styles.paragraph} ${Styles.bold}`} >
                La compañía está dirigida por Jeff Bezos, quien no es la persona más rica del 
                mundo por accidente. La mayoría de los expertos confían en que Amazon siga generando 
                asombrosas ganancias y como resultado predicen un tremendo incremento en el valor de
                 las acciones de Amazon hasta el 2025 (por lo menos).
            </h5>
            </Col>
        </Row>

        <Col lg={3} className={Styles.formBlockmobile}>
                <div >
                        <FormModal/>
                </div>
            </Col>

        <Row>
            <Col lg={7}>
            <h5 className={`${Styles.paragraph}`} >
            Mientras que muchas empresas están tratando de recuperarse
             de la recesión, una sigue expandiendo su negocio. En 2021, Amazon 
             es mucho más que el rey del comercio electrónico: ofrece su propia marca 
             de tarjeta de crédito, está construyendo su propio servicio de entrega y está 
             considerando seriamente mudarse a la banca minorista.
            </h5>
            </Col>
        </Row>

        <Row>
            <Col lg={7}>
            <h5 className={`${Styles.paragraph}`} >
            La compañía está dirigida por Jeff Bezos, quien no es la
             persona más rica del mundo por accidente. La mayoría de los
              expertos confían en que Amazon siga generando asombrosas ganancias
               y como resultado predicen un tremendo incremento 
            en el valor de las acciones de Amazon hasta el 2025 (por lo menos).
            </h5>
            </Col>
        </Row>


        <Row>
            <Col lg={7}>
            <h5 className={`${Styles.paragraph} ${Styles.bold}`} >
            Al parecer, Amazon seguirá dominando el mercado de valores y ofreciendo
             increíbles oportunidades de ganancias a los inversores. Es la acción de 
            mayor valor en el mundo por una razón y no muestra signos de desaceler
            </h5>
            </Col>
        </Row>


        <Row>
            <Col lg={7}>
            
            <img className={Styles.imgGraph} src={graph}></img>
            </Col>
        </Row>


        <Row>
            <Col lg={7}>
            <h5 className={`${Styles.paragraph} ${Styles.bold}`} >
            ¿Son las Acciones de Amazon una Compra de YA?
            </h5>
            </Col>
        </Row>

        <Row>
            <Col lg={7}>
            <h5 className={`${Styles.paragraph}`} >
            Con acciones que han subido más del 70% en los últimos 12 meses,
             la respuesta a esta pregunta no le sorprenderá. SÍ, las acciones de Amazon son una compra de YA.
            </h5>
            </Col>
        </Row>

        <Row>
            <Col lg={7}>
            <h5 className={`${Styles.paragraph}`} >
            Si todavía estás escéptico, echa un vistazo a los números. ¡
            Las acciones han subido un 3500% en la última década! La gente qu
            e fue lo suficientemente inteligente como para comprar acciones de
             Amazon temprano, está disfrutando de miles o millones de ganancias. Ahora, 
             con el mundo recuperándose del terrible 2020, es
             el momento perfecto para unirse a estos inversores.
            </h5>
            </Col>
        </Row>

        
        <Row>
            <Col lg={7}>
            <h5 className={`${Styles.paragraph}`} >
            Si las acciones de la empresa siguen subiendo, como
             esperan los expertos, Amazon traerá muchas oportunidades de
              ganancias para aquellos que inviertan en sus acciones en la primera mitad de 2021.
            </h5>
            </Col>
        </Row>


        <Row>
            <Col lg={7}>
            <h3 className={Styles.subheader}>
            En este momento, las acciones de Amazon están llenas de potencial.
             ¡Descubre cómo invertir con la ayuda de nuestros socios certificados!
            </h3>
            </Col>
        </Row>

        <Row>
            <Col lg={7}>
            
            <img className={Styles.imgGraph} src={man}></img>
            </Col>
        </Row>


        <Row>
            <Col lg={7}>
            <h5 className={`${Styles.paragraph}`} >
            Puedes empezar a invertir desde tan sólo 1 000 soles. 
            Recuerda, cuanto más rápido suba el valor de las acciones de Amazon, más aumentarán tus ganancias.
            </h5>
            </Col>
        </Row>

        
        <Row>
            <Col lg={7}>
            <h5 className={`${Styles.paragraph}`} >
            Nuestros socios te guiarán paso a paso.
             ¿Te gustaría que se pusieran en contacto contigo? ¡Solo llena el formulario!
            </h5>
            </Col>
        </Row>

        <Row>
            <Col lg={7}>
            <h5 className={`${Styles.paragraph}`} >
            Únete ahora con:
            </h5>
            </Col>
        </Row>


        <Row>
            <Col lg={7}>
            <ul className={Styles.box}>
           <li>Registro gratuito</li> 
           <li> Asistente personal</li>
           <li>Plataforma segura y probada</li>
            </ul>
            </Col>
        </Row>

        
        <Row>
            <Col className={Styles.ButtonContainer} lg={7}>
        <Button onClick={()=>{window.scrollTo({
          top: 0,
          behavior: 'smooth' // for smoothly scrolling
        })}} className={Styles.Button}> Empieza a invertir en acciones de Amazon</Button>
            
            </Col>
        </Row>

        <Row>
            <Col lg={7}>
            
            <img className={Styles.imgGraph} src={card}></img>
            </Col>
        </Row>
               
    </Container>


        <Container  fluid={true} className={Styles.footer}>

            <Row>
                <p>
                Disclaimer:
                </p>

                <p>
                Todos los logotipos de Amazon son marcas comerciales de Amazon.com, Inc. o sus afiliados.
                </p>
            </Row>

            <Row className={Styles.footerlink}>
                <Col lg='auto'>
                    <a href='#'> Términos y Condiciones </a> 
                </Col>
                <Col lg='auto'>
                    <a href='#'> Acerca de nosotros </a>
                </Col>
           </Row>

        </Container>




        

        

        


 
    </>
  )
}

export default Home