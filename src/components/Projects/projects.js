import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import imgTimeToPlan from '../../assets/img/timetoplan.jpg'
import imgProjectStudent from '../../assets/img/projectstudent.jpg'
import imgLasClarisas from '../../assets/img/lasclarisastours.jpg'

const Projects = () => {

  const [loading, setLoading] = useState(true);

  const arrayProjects = [
    {
      id: 1,
      project: 'Las Clarisas Tours',
      description: 'Proyecto acerca de una agencia de viajes, muestra información de viajes, preguntas y respuestas, contacto.',
      technologies: ['HTML', 'CSS', 'JS', 'React', 'Bootstrap'],
      image: imgLasClarisas,
      github: 'https://github.com/gonzccode/proyecto-agencia-viajes',
      deploy: 'https://lasclarisastours.netlify.app/#home'
    },
    {
      id: 2,
      project: 'Project Student',
      description: 'Proyecto acerca de un ecommerce de proyectos de estudiantes, muestra más detalles del proyecto hasta la confirmación de compra.',
      technologies: ['HTML', 'CSS', 'JS', 'React', 'Bootstrap', 'Firebase'],
      image: imgProjectStudent,
      github: 'https://github.com/gonzccode/ecommercer-canaza-cupe',
      deploy: 'https://proyectostudent.netlify.app/'
    },
    {
      id: 3,
      project: 'Time to Plan',
      description: 'Proyecto acerca de reloj y lists Pomodoro, se puede agregar tareas y quitarlas, se queda guardada la información.',
      technologies: ['HTML', 'CSS', 'JS', 'Bootstrap', 'SweetAlert'],
      image: imgTimeToPlan,
      github: 'https://github.com/gonzccode/proyecto-pomodoro',
      deploy: 'https://time2plan.netlify.app/'
    }
  ]

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
        <div id='projects'>
          <h3 className='blueH3'>
            <strong>
              &lt;Proyectos/&gt;
            </strong>
          </h3>
          <br/>
          <br/>
          <div className='cardsProjects'>
            {
              arrayProjects.map((item, index) => 
              <Card className='cardProject'>
                <Card.Img className='cardImgProject' variant="top" src={item.image} />
                <Card.Body className='cardBodyProject'>
                  <Card.Title><strong>{item.project}</strong></Card.Title>
                  <Card.Text style={{textAlign: 'justify'}}>
                    {item.description}
                    <br/>
                    <strong>Tecnologías: </strong> {item.technologies.join(', ')}
                  </Card.Text>
                  <div>
                    <Card.Link variant="primary" href={item.github} target='_blank'>Github</Card.Link>
                    <Card.Link variant="outline-primary" href={item.deploy} target='_blank'>Deploy</Card.Link>
                  </div>
                </Card.Body>
              </Card>
              )
            }
            
          </div>
        </div>
      }
    </>
    
  )
}

export default Projects