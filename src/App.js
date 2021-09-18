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

      
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      
    </div>
  );
}

export default App;
