import { useState } from 'react'
import Tasks from './components/Task'
import AddTasks from './components/AddTask'
import {v4} from 'uuid'

function App() {
  
    const [tasks, setTasks] = useState([{
      id: 1,
      title: "Estudar programação",
      description: "Estudar programação para se tornar um desenvolvedor fll stack.",
      isCompleted: false
    }, {
      id: 2,
      title: "Estudar Ingles",
      description: "Estudar inges para se tornar fluente",
      isCompleted: false
    } , {
      id: 3,
      title: "Estudar Matematica",
      description: "Estudar programação para se tornar um desenvolvedor fll stack.",
      isCompleted: false
    }
  ])

  function onTaksClick(taskId){
    const newTasks =  tasks.map((task) =>{
      //PRECISO ATUALIZAR ESSA TAREFA
      if (task.id === taskId) {
        return {...task, isCompleted: !task.isCompleted}
      }

      //NAO PRECISA ATUALIZAR ESSA TAREFA
      return task;


    });

    setTasks(newTasks);
  }

  function onDeleteTaksClick(taskId) {
      const newTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(newTasks);
  }

  function ondAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    
  }


  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <AddTasks ondAddTaskSubmit={ondAddTaskSubmit} />
        <Tasks 
          tasks={tasks} 
          onTaksClick={onTaksClick}
          onDeleteTaksClick={onDeleteTaksClick}
          />
      </div>
      
    </div>
  )

}

export default App
