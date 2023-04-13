import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import ImagePortfolio from '../../assets/img/image-portafolio.png';

const Introduction = () => {

    const [loading, setLoading] = useState(true);

    useEffect (() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, []);


    return (
        <>
            {loading ? 
            <div id='spinnerSection'>
                <Spinner className='spinnerLoading' animation="grow"  role="status" variant="light"/>
            </div> 
            :
            <div id="introduction">
                    <div className='introductionText'>
                        <h4>
                            Hola 👋, soy <strong>Gonzalo</strong>
                        </h4>
                        <h3>
                            <strong>Desarrollador Frontend</strong>
                        </h3>
                        <p>
                            Apasionado por la tecnología y <br></br> el desarrollo de software.
                        </p>
                        <div className='introductionButton'>
                            <a className='btnProject' href='/proyectos'>
                                Proyectos
                            </a>
                            <a className='btnContact' href='/contacto'>
                                Contáctame
                            </a>

                        </div>
                    </div>
                    <div className='introductionImage'>
                        <img src={ImagePortfolio} className="imagePortfolio" alt="portafolio" />
                    </div>
                
                
                
                {/* <a
                    className="introductionLink"
                    href="https://github.com/gonzccode"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                GitHub
                </a> */}
            </div>
            }
        </>
    )
    
}

export default Introduction;