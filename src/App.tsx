import './App.css';
import Card from './paginas/componentes/Card/Card';
import Contador from './paginas/componentes/Contador/Contador';
import Task from './paginas/componentes/Task/Task';
import Home from './paginas/home/Home';


function App () {
  return (
    <>
    
    <h1 className="text-3xl font-bold text-red-500 underline text-center">
      Hello world!
    </h1>

    <Home />
    
    <Card
      title="Bem vindes, ao perfil de "
      description="Rita Almeida!"/>
    <Contador />

    <Task />
  
    </>
  );
}

export default App


/*Props
   <>
    <Card   title="Component Card"
            description="Este é um componente Card que recebe props."/>
  </>
  */

/*
  useState and useEffect
  <>
  <Contador />
  <Task />
  </>
  */