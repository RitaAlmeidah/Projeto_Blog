import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import Home from './paginas/home/Home';
import Navbar from './paginas/componentes/navBar/NavBar';
import Footer from './paginas/componentes/footer/Footer';

//Criando as Rotas
function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;


//Componentes NavBar, Footer e Home
/*function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Footer/>
    </>
);
}
export default App;*/


//Criando Rotas com o React Router Dom
/*function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;*/


//Codificando Grid no Tailwind CSS em React
/*function App() {
  return (
    <>
    <Home/>
    </>
);
}
export default App;*/


//Codificando Flex-Box no Tailwind CSS em React
/*function App() {
  return (
    <>
    <Home/>
    </>
);
}
export default App;*/


/*function App () {
  return (
    <>
      <h2 className="text-2xl no-underline font-sans text-white underline rounded-sm border border-purple-800 bg-purple-800">
        Hello world!
      </h2>

      <Home />

      <Card
        title="Bem vindes, ao perfil de "
        description="Rita Almeida!"/>

      <Contador /> 
  
      <Task />

    </>
  );
}

export default App*/


/*Props
   <>
    <Card   title="Component Card"
            description="Este é um componente Card que recebe props."/>
  </>
  */

/*useState and useEffect
  <>
  <Contador />
  <Task />
  </>
  */