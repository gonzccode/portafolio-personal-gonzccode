import { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavbarPortfolio from './components/Navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/scss/styles.scss'

function App() {

  const Introduction = lazy(() => import('./components/Introduction/introduction'))
  const Projects = lazy(() => import('./components/Projects/projects'))
  const AboutMe = lazy(() => import('./components/AboutMe/aboutMe'))
  const Technologies = lazy(() => import('./components/Technologies/technologies'))
  const Contact = lazy(() => import('./components/Contact/contact'))

  return (
    <div className="App">
      <HashRouter>
        <NavbarPortfolio/>
        <Suspense fallback={<div style={{color: 'white'}}>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Introduction/>}/>
            <Route path='/proyectos' element={<Projects/>}/>
            <Route path='/sobre-mi' element={<AboutMe/>}/>
            <Route path='/tecnologias' element={<Technologies/>}/>
            <Route path='/contactame' element={<Contact/>}/>
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
    
    
  );
}

export default App;
