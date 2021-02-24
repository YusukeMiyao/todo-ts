import React from 'react';
// import { getAllJSDocTagsOfKind } from 'typescript';
import { Task } from '../Types';

type Props = {
  task: Task
  handleDone: (task: Task) => void
  handleDelete:(task:Task) => void
}

const  TaskItem: React.FC<Props> = ({task,handleDelete,handleDone}) => {
    return (
      
      <li className={task.done ? 'done':''}>
          <label>
          <input
            type='checkbox'
            className='checkbox-input'
            onClick={() => handleDone(task)}
            defaultChecked={task.done}
              />
              <span className='checkbox-label'>{task.title}</span>
            </label>
        <button
          onClick={() => handleDelete(task)}
          className='btn is-delete'>削除</button>
    </li>
  );
}

export default TaskItem;
