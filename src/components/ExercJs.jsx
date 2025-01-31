import { ChevronRightIcon} from "lucide-react";
import Input from "./Input";

function ExercJs ({tasks, onTaksClick, onDeleteTaksClick}) {   
    
    return (

        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex w-full gap-2">

   
                   

                
              
                <button 
                        className="bg-slate-400 p-2 rounded-md text-white flex-grow-[6]"> Conteudo
                </button>

                <Input className="border py-2 border-slate-300 outline-slate-400 px-4 rounded-md flex-grow-[5]"
                    type="text" 
                    placeholder="Digite o título da tarefa"
                    />

<button 
                        className="bg-slate-400 p-2 rounded-md text-white flex-grow-[6]">
                        <ChevronRightIcon/>
                </button>


            
        </div>

    )

}

export default ExercJs;