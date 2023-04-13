import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

const AboutMe = () => {

    const [loading, setLoading] = useState(true);

    useEffect (() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, loading);

    return (
        <>
            {loading ? 
            <div id='spinnerSection'>
                <Spinner className='spinnerLoading' animation="grow"  role="status" variant="light"/>
            </div> 
            :
            <div id='aboutMe'>
                <h3>
                    <strong>
                        &lt;Sobre mí/&gt;
                    </strong>
                </h3>
                <br/>
                <br/>
                <p>
                    Hola, mi nombre es Gonzalo, soy <span className='blueText'>Desarrollador Frontend.</span>
                </p>
                <p>
                    Me gradué de <span className='blueText'>Ingeniería de sistemas</span> en enero de 2023, 
                    llevo 2 años dentro del mundo de desarrollo de software, 
                    aprendiendo de manera autodiacta y con capacitaciones. 
                    Cuento con experiencia en proyectos profesionales y personales.
                </p>
                <p>
                    <span className='blueText'>Disfruto mucho programar</span> y crear soluciones innovadoras, 
                    estoy en constante aprendizaje y retando a nuevos desafíos. 
                    Mi objetivo profesional es liderar e innovar en el sector del <span className='blueText'>desarrollo de software.</span>
                </p>
            </div>
        }
        </>
    )
}

export default AboutMe;