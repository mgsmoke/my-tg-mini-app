import React from "react";

type TaskItemProps = {
  task: { id: number; text: string };
  editTaskId: number | null;
  editText: string;
  selectedTaskIds: number[];
  setEditTaskId: (id: number | null) => void;
  setEditText: (text: string) => void;
  editTask: (id: number, newText: string) => void;
  deleteTask: (id: number) => void;
  toggleTaskSelection: (id: number) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  editTaskId,
  editText,
  selectedTaskIds,
  setEditTaskId,
  setEditText,
  editTask,
  deleteTask,
  toggleTaskSelection,
}) => {
  return (
    <li key={task.id} className={selectedTaskIds.includes(task.id) ? "selected" : ""}>
      {editTaskId === task.id ? (
        <>
          <input value={editText} onChange={(e) => setEditText(e.target.value)} />
          <button onClick={() => editTask(task.id, editText)}>Сохранить</button>
          <button onClick={() => { setEditTaskId(null); setEditText(''); }}>Отмена</button>
        </>
      ) : (
        <>
          <span onClick={() => toggleTaskSelection(task.id)}>{task.text}</span>
          <button onClick={() => { setEditTaskId(task.id); setEditText(task.text); }}>Редактировать</button>
          <button onClick={() => deleteTask(task.id)}>Удалить</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;