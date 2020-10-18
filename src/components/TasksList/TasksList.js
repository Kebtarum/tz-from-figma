import React from 'react';
import Task from './Task/Task';
import './TasksList.css';

function TasksList(props) {
  return (
    <div className="taskslist">
      <div className="taskslist__header-row">
        <div className="taskslist__cells taskslist__cells_left">
          <div className="taskslist__cell"></div>
          <div className="taskslist__cell tasklist__cell_name taskslist__header">Название</div>
        </div>
        <div className="taskslist__cells taskslist__cells_right">
          <div className="taskslist__cell tasklist__cell_dedline taskslist__header">Дедлайн</div>
          <div className="taskslist__cell tasklist__cell_priority taskslist__header">Приоритет</div>
          <div className="taskslist__cell tasklist__cell_icon"></div>
        </div>
      </div>

      {props.list.map(item =>
        <Task item={item} windowWidth={props.windowWidth} />
      )}


    </div>

  );
}

export default TasksList;