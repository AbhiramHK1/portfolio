import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Impact } from './components/Impact';
import { Nav } from './components/Nav';
import { Projects } from './components/Projects';
import { Recognition } from './components/Recognition';
import { Skills } from './components/Skills';

export function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="scroll-progress" aria-hidden="true" />
      <Nav />
      <main id="main">
        <Hero />
        <Impact />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Recognition />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
