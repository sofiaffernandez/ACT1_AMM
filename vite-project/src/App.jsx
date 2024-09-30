import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/aboutus';
import Contact from './pages/contact';

function App() {

  return (
    <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/about">Sobre nosotros</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
              </li>
            </ul>
          </nav>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

            <footer>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Inicio</Link>
                  </li>
                  <li>
                    <Link to="/about">Sobre nosotros</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contacto</Link>
                  </li>
                </ul>
              </nav>
              <p>© 2024 Viajeros Aventureros. Todos los derechos reservados.</p>
            </footer>
        </div>
    </Router>
    )
}

export default App
