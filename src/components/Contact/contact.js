import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsEnvelopeAtFill } from "react-icons/bs";



const Contact = () => {
    const [loading, setLoading] = useState(true);

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
                    <div className='buttonsContact'>
                        <Link className='buttonGithub' to={'https://github.com/gonzccode'} target='_blank'>
                            <h4>
                                <strong>
                                    <BsGithub/>  Github
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
                        <Link className='buttonEmail' to={'mailto:canazacupegonzalo@gmail.com'}>
                            <h4>
                                <strong>
                                    <BsEnvelopeAtFill/>  Email
                                </strong>
                            </h4>
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}

export default Contact