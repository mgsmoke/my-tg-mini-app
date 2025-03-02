import React from "react";
import TaskItem from "./TaskItem";

type TaskListProps = {
  tasks: { id: number; text: string }[];
  editTaskId: number | null;
  editText: string;
  selectedTaskIds: number[];
  setEditTaskId: (id: number | null) => void;
  setEditText: (text: string) => void;
  editTask: (id: number, newText: string) => void;
  deleteTask: (id: number) => void;
  toggleTaskSelection: (id: number) => void;
};

const TaskList: React.FC<TaskListProps> = (props) => {
  return (
    <ul>
      {props.tasks.map((task) => (
        <TaskItem key={task.id} task={task} {...props} />
      ))}
    </ul>
  );
};

export default TaskList;