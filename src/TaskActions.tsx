import React from "react";

type TaskActionsProps = {
  selectAllTasks: () => void;
  clearSelection: () => void;
  deleteSelectedTasks: () => void;
  isSelectionEmpty: boolean;
};

const TaskActions: React.FC<TaskActionsProps> = ({ 
  selectAllTasks, 
  clearSelection, 
  deleteSelectedTasks, 
  isSelectionEmpty 
}) => {
  return (
    <div>
      <button onClick={selectAllTasks}>Выделить все</button>
      <button onClick={clearSelection}>Снять выделение</button>
      <button onClick={deleteSelectedTasks} disabled={isSelectionEmpty}>
        Удалить выбранное
      </button>
    </div>
  );
};

export default TaskActions;