
import './styles/styles.scss';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ToolsSection from './components/ToolsSection';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
// import LoaderPage from './components/LoaderPage';
// import { useState, useEffect } from 'react';




function App() {

  // code below is if i want to test load spinner by adding a state and a setTimeout delay to the rendering of the components
  // const [count, setCount] = useState(false)

  // useEffect(() => {
  //   const timer = setTimeout(() => setCount(true), 1000);
  //   console.log('the delay worked???1')
  //   return () => clearTimeout(timer);
  // });


  return (

    <div className="App">
      {/*  code below is for conditionally rendering the components if state is true and if false then load loader page which renders spinner */}
      {/* {count ? <NavBar />  : <LoaderPage />}
      {count ? <Header /> : null}
      {count ? <AboutMe /> : null}
      {count ? <ToolsSection /> : null}
      {count ? <Projects /> : null} */}


      <NavBar />
      <Header /> 
      <AboutMe /> 
      <ToolsSection />
      <Projects />

    </div>

  );

  
}



export default App;
