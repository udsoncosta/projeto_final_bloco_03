import './App.css'
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListaCategorias from "./components/categorias/listaCategorias/ListaCategorias";
import FormularioCategoria from "./components/categorias/formularioCategoria/Formulariocategoria";
import DeletarCategoria from "./components/categorias/deletarCategoria/DeletarCategoria";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[70vh]'>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastrarcategoria" element={<FormularioCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App