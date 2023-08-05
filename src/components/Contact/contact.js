import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsEnvelopeAtFill } from "react-icons/bs";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [loading, setLoading] = useState(true);

    const sendEmail = (objContact) => {
        emailjs.send('service_3xkrcvn','template_j2j3aom', {
            name: objContact.name,
            email: objContact.email,
            subject: objContact.subject,
            message: objContact.message}
            , 'uRDOr5vv-7D0oty7x')
        .then((response) => {
            console.log('Correo enviado! ', response.status, response.text);
        }, (err) => {
                console.log('Correo fallido...', err);
        });
    }

    function submitEmail(e) {
        e.preventDefault();
        sendEmail({
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        })
        e.target.name.value = null
        e.target.email.value = null
        e.target.subject.value = null
        e.target.message.value = null
    };

    useEffect (() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, 2000)
      }, []); 

    return (
        <>
            {
                loading? 
                <div id='spinnerSection'>
                <Spinner className='spinnerLoading' animation="grow"  role="status" variant="light"/>
                </div> 
                :
                <div id='contact'>
                    <h3 className='blueH3'>
                        <strong>
                        &lt;Contáctame/&gt;
                        </strong>
                    </h3>
                    <div className='informationContact'>
                        <div className='formContact'>
                            <form id='formEmail' onSubmit={submitEmail}>
                                <label htmlFor='name'>
                                    <strong>Nombre y Apellido:</strong>
                                </label>
                                <input type='text' className='form-control' id='name' placeholder='Ingrese su nombre y apellido' required/>
                                <label htmlFor='email'>
                                    <strong>Email:</strong>
                                </label>
                                <input type='email' className='form-control' id='email' placeholder='Ingrese su email' required/>
                                <label htmlFor='subject'>
                                    <strong>Asunto:</strong>
                                </label>
                                <input type='text' className='form-control' id='subject' placeholder='Ingrese el asunto' required/>
                                <label htmlFor='message'>
                                    <strong>Mensaje:</strong>
                                </label>
                                <textarea type='text' className='form-control' id='message' placeholder='Ingrese su mensaje' required></textarea><br/>
                                <button className='buttonEmail' type='submit'>
                                    <h5>
                                        <strong>
                                            <BsEnvelopeAtFill/>  Enviar
                                        </strong>
                                    </h5>
                                </button>
                            </form>
                        </div><br/>
                        <div className='buttonsContact'>
                            <Link className='buttonGithub' to={'https://github.com/gonzccode'} target='_blank'>
                                <h4>
                                    <strong>
                                        <BsGithub/>  Github
                                    </strong>
                                </h4>
                            </Link>
                            <Link className='buttonWhatsapp' to={'https://api.whatsapp.com/send?phone=51946524336&text=Hola Gonzalo, vengo de tu web. Estoy interesado en trabajar contigo.'} target='_blank'>
                                <h4>
                                    <strong>
                                        <BsWhatsapp/>  Whatsapp
                                    </strong>
                                </h4>
                            </Link>
                            <Link className='buttonLinkedin' to={'https://www.linkedin.com/in/gcanazacupe/'} target='_blank'>
                                <h4>
                                    <strong>
                                    <BsLinkedin/>  Linkedin
                                    </strong>
                                </h4>
                            </Link>
                            {/* <Link className='buttonEmail' to={'mailto:canazacupegonzalo@gmail.com'}>
                                <h4>
                                    <strong>
                                        <BsEnvelopeAtFill/>  Email
                                    </strong>
                                </h4>
                            </Link> */}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Contact