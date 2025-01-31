import { ChevronRightIcon, TrashIcon } from "lucide-react";
import Button from "./Button";

function Tasks({tasks, onTaksClick, onDeleteTaksClick}) {   
    
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow  ">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2" >
                           
                    <button 
                        onClick={() => onTaksClick(task.id)} 
                        className={`bg-slate-400 w-full text-left text-white p-2 rounded-md  ${
                            task.isCompleted && "line-through"
                        }`} >
                        {task.title}
                        
                    </button>
                 
                
                    <button 
                        className="bg-slate-400 p-2 rounded-md text-white">
                        <ChevronRightIcon/>
                    </button>

                    <Button onClick={() => onDeleteTaksClick(task.id)}>
                        <TrashIcon />
                    </Button>


                </li>
            ))}
        </ul>
    )

}

export default Tasks;