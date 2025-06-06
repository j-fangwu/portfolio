import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, ScrollToTopButton } from './components';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>

        <About />
        <Tech />
        <Experience />
        <Works />
        <div className = "relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Hero />
        <ScrollToTopButton />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
