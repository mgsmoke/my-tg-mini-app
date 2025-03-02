import { useState } from 'react'
import './App.css'
import TaskInput from "./TaskInput";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

type Task = {
  id: number;
  text: string;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');
  const [selectedTaskIds, setSelectedTaskIds] = useState<number[]>([]);

  // Функции для управления задачами
  const addTask = (text: string) => {
    if (text.trim() === "") return;
    const newTask = { id: Date.now(), text };
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
    setSelectedTaskIds(prev => prev.filter(taskId => taskId !== id));
  };
  
  const editTask = (id: number, newText: string) => {
    if (newText.trim() === '') return;
    setTasks(prev => prev.map(task => (task.id === id ? { ...task, text: newText } : task)));
    setEditTaskId(null);
    setEditText('');
  };
  
  const toggleTaskSelection = (id: number) => {
    setSelectedTaskIds(prev =>
      prev.includes(id) ? prev.filter(taskId => taskId !== id) : [...prev, id]
    );
  };
  
  const selectAllTasks = () => {
    setSelectedTaskIds(tasks.map(task => task.id));
  };

  const clearSelection = () => {
    setSelectedTaskIds([]);
  };

  const deleteSelectedTasks = () => {
    if (selectedTaskIds.length === 0) return;
    setTasks(prev => prev.filter(task => !selectedTaskIds.includes(task.id)));
    setSelectedTaskIds([]);
  };

  return (
    <>
    <TaskInput addTask={addTask} />
    <TaskList
        tasks={tasks}
        editTaskId={editTaskId}
        editText={editText}
        selectedTaskIds={selectedTaskIds}
        setEditTaskId={setEditTaskId}
        setEditText={setEditText}
        editTask={editTask}
        deleteTask={deleteTask}
        toggleTaskSelection={toggleTaskSelection}
    />
    <TaskActions 
        selectAllTasks={selectAllTasks} 
        clearSelection={clearSelection} 
        deleteSelectedTasks={deleteSelectedTasks} 
        isSelectionEmpty={selectedTaskIds.length === 0} 
    />
    </>
  );
}

export default App