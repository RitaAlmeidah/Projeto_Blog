import { useState, useEffect } from 'react';
import homeTask from '../../../assets/taskAnimada.svg';


function task() {
  const [completada, setCompletada] = useState(false);
  const [tarefa, setTarefa] = useState('');

  useEffect(() => {
    if (completada) {
      setTarefa('Parabéns! Você concluiu a tarefa!');
    }
  }, [completada]);

  function completo(){
    setCompletada(true)
  }

  return (
    <div className="task">
      <h1>Tarefa</h1>
      <h3>{tarefa}</h3>
      <p>Conclua a tarefa</p>
      <img src={homeTask} className='img' alt="Imagem tela tarefas" /> 
      <button onClick={completo} className="bg-violet-700 hover:bg-orange-400 text-white font-bold py-0 px-6 rounded outline">Concluir Tarefa</button>
    </div>
  );
}

export default task;