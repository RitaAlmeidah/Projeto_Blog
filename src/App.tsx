import React from 'react';
import './App.css';

import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Home from './pages/Home/Home';
import { AuthProvider } from './contexts/AuthContext';
import ListaTemas from './components/Temas/ListaTemas';
import FormularioTema from './components/Temas/FomularioTema'
import DeletarTema from './components/Temas/DeletarTema';

function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}
export default App;


/*function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}
export default App;*/


/*function App() {
  return (
    <>
   
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
  
    </>
  );
}
export default App;*/


/*interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>('https://blogpessoal-ib70.onrender.com/swagger-ui/index.html')
      .then(response => {
        setUsers(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}, []);


  return (
    <div>
    <h1>Lista de usuários</h1>
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </div>
);
}

export default App;*/



//Criando as Rotas
/*function App() {
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
export default App;*/


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