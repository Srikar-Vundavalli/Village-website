import logo from './logo.svg';
import './App.css';
import Jamma from './components/carousel';
import Nbar from './components/navbar';
import Middle from './components/middle';
import Places from './components/places';
import About from './components/about';
import Contact from './components/contactus';
import Main from './components/main';


import Godavari from './components/godavari';
import Rural from './components/rural';



function App() {
  


  let Component
  switch (window.location.pathname){
    case "/":
      Component = <Main />
      break
    case "/places":
      Component =<Places />
      break
    case "/about":
      Component  = <About /> 
      break 
    case "/godavari":
        Component =<Godavari/>
        break
    case "/ruralareas":
        Component  = <Rural /> 
        break    
  }
 
  return (
    <>
    
    <Nbar />
    {Component}
    <Contact />
    
    </>
  );
}

export default App;
