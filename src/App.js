import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Financiamiento from "./pages/Financiamiento";
import Contacto from "./pages/Contacto";
import Perfil from "./pages/Perfil";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Tratamiento from "./pages/Tratamiento";
import Articulo from "./pages/Articulo";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (

    <div className="App">
      <Router>
      <ScrollToTop />
        <Navbar />     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path= '/blog/:id' element={<Articulo/>}/>
          <Route path= '/blog' element={<Blog/>}/>
          <Route path= '/tratamiento/:id' element={<Tratamiento/>}/>
          <Route path= '/financiamiento' element={<Financiamiento/>}/>
          <Route path= '/contacto' element={<Contacto/>}/>
          <Route path= '/perfil' element={<Perfil/>}/>
        </Routes>
        <Footer />
      </Router>      
    </div>
        
  );
}

export default App;
