import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

const NavbarPortfolio = () => {
    return (
        <header>
          <Navbar id='navbarPortfolio' expand="lg" variant="dark" fixed="top">
            <Container>
              <Navbar.Brand className='navBrand' href="/"><strong>GCC</strong></Navbar.Brand>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className='navLink' href="/"><strong>Inicio</strong></Nav.Link>
                <Nav.Link className='navLink' href="/sobre-mi"><strong>Sobre mí</strong></Nav.Link>
                <Nav.Link className='navLink' href="/tecnologias"><strong>Tecnologías</strong></Nav.Link>
                <Nav.Link className='navLink' href="/proyectos"><strong>Proyectos</strong></Nav.Link>
                <Nav.Link className='navLink' href="/contactame"><strong>Contacto</strong></Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
    );
}

export default NavbarPortfolio;