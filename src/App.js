import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Navbar from "./Components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Route path="/" exact component={Home}/>
      <Route path="/contact" exact component={Contact}/>
      <Route path="/blog" exact component={Blog}/>
      <Route path="/about" exact component={About}/>
    </BrowserRouter>
  );
}

export default App;
