import logo from './logo.svg';
import './styles/styles.scss';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ToolsSection from './components/ToolsSection';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (

    <div className="App">
      <NavBar />
      <Header />
      <ToolsSection />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
