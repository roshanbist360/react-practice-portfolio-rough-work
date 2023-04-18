
import './App.css';
import Header from './MyComponents/Header';
import Home from './MyComponents/Home';
import About from './MyComponents/About';
import Projects from './MyComponents/Projects';
import Contact from './MyComponents/Contact';
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';


function App() {
  var x=0;   //denotes menu is hidden
  function menuControl(){
      switch(x){
          case 0:
              document.getElementById('mobMenuList').style.opacity="1";
              document.getElementById('mobMenuList').style.height="220px";
              document.getElementById('mobMenuList').style.pointerEvents = "auto";
              document.getElementById('bar1').style.transform = "rotate(45deg)";
              document.getElementById('bar2').style.transform = "rotate(135deg)";
              document.getElementById('bar1').style.marginTop = "8px";
              document.getElementById('bar2').style.marginTop = "-2px";
              document.getElementById('bar3').style.display = "none";
              x=1;  //denotes menu is visible
              break;

          case 1:
              document.getElementById('mobMenuList').style.opacity="0";
              document.getElementById('mobMenuList').style.height="0px";
              document.getElementById('mobMenuList').style.pointerEvents = "none";
              document.getElementById('bar1').style.transform = "rotate(0deg)";
              document.getElementById('bar2').style.transform = "rotate(0deg)";
              document.getElementById('bar1').style.marginTop = "0px";
              document.getElementById('bar2').style.marginTop = "6px";
              document.getElementById('bar3').style.display = "block";
              x=0;  //denotes menu is hidden
              break;

          default:
              document.getElementById('mobMenuList').innerHTML="Something went wrong";
              break;
      }
  };
  
  return (
    <div className="App">
      <Main>
         <Header menuControl={menuControl}/>
         <Routes>
              <Route exact path="/" element={ <Home/>} ></Route>
              <Route exact path="/about" element={ <About/>} ></Route>
              <Route exact path="/projects" element={ <Projects/>} ></Route>
              <Route exact path="/contact" element={ <Contact/>} ></Route>
         </Routes>
      </Main>
    </div>
  );
}

export default App;
