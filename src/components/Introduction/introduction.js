import React from 'react';
import ImagePortfolio from '../../assets/img/image-portafolio.png';

const Introduction = () => {
    return (
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

    )
    
}

export default Introduction;