/* top container
    section container - intro 
    - portfolio page 
    - work page  */

import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import { useState } from 'react';
import './app.scss';

function App() {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
