import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './styles/App.css';
import Home from './components/Home';
import About from './components/About';
import Results from './components/Results';



function App() {
  
  return (
      <Router>
        <div className='navbar-links' id='default'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        </div>

        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/results' element={<Results/>}/>
        </Routes>

        <footer id='foot'>
          <h4>Made by Mubiru James Benjamin<br/> With React</h4>
          <div id='vr'></div>
          <h4>Powered by <a href='https://open.fda.gov/apis/'>openFDA API</a></h4>
        </footer>
      </Router>


  );
}

export default App;
