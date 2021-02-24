import React,{useState} from 'react';

import { Task } from '../Types';

type Props = {
    tasks: Task[]
    setTasks:React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskInput: React.FC<Props>= ({tasks,setTasks}) => {
    const [inputTitle, setInputTitle] = useState('')
    const [count, setCount] = useState(tasks.length + 1)

    const hndleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.target.value) 
    }

    const handleSubmit = ()=> {
        setCount(count + 1)
        
        const newTask: Task = {
            id: count,
            title: inputTitle,
            done:false
        }

        setTasks([newTask, ...tasks])
        setInputTitle('')
}

    return (
        <div className='input-form'>
            <div className='inner'>
                <input
                    type='text'
                    className='input'
                    value={inputTitle}
                    onChange={hndleInputChange}
                />
                <button className='btn is-primary' onClick={handleSubmit}>追加</button>
            </div>
        </div>
  );
}

export default TaskInput;
