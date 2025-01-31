import { useState } from "react";
import Input from "./Input";


function AddTasks({ondAddTaskSubmit}) {

    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");

    
    return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col  ">

        <Input
            type="text" 
            placeholder="Digite o título da tarefa"
            value={title}
            onChange={(event) => setTitle(event.target.value) }
        />

        <Input
            type="text" 
            placeholder="Título da Tarefa"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
        />

        <button 
            onClick={() => {
                //verifica se o titulo e a descrição estão preenchdidos
                if (!title.trim() || !description.trim()) {
                    return alert("Preencha o titulo e a descrição")
                }
                ondAddTaskSubmit(title, description);
                setTitle("");
                setDescription("");

            }}
            className="bg-slate-400 p-2 rounded-md text-white">
            Adicionar
        </button>
    </div>
    )

}

export default AddTasks;