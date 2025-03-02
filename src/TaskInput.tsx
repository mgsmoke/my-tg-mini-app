import React, { useState } from "react";

type TaskInputProps = {
  addTask: (text: string) => void;
};

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  return (
    <div>
      <input 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
      />
      <button onClick={() => {
        if (newTask.trim() === '') return;
        addTask(newTask);
        setNewTask('');
      }}>
        Добавить задачу
      </button>
    </div>
  );
};

export default TaskInput;