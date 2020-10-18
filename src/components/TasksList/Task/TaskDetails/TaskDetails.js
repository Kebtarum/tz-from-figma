import React from 'react';
import './TaskDetails.css';
import backIcon from '../../../../assets/Back.svg';
import checkIcon from '../../../../assets/Exclude.svg';
import deleteIcon from '../../../../assets/Trash.svg';
import editIcon from '../../../../assets/Edit.svg';
import { Link } from 'react-router-dom';


function TaskDetails(props) {

    return (
        <div className="page-container">
            <div className="heading-navigate">
                <div className="heading-navigate__left">
                    <Link to={'/'} className="back" >
                        <img src={backIcon} alt='backIcon' />
                    </Link>
                    <div className="title">{props.listItem.name}</div>
                </div>
                <div className="heading-navigate__right">
                    <div className="button">
                        <div className="button__icon">
                            <img src={checkIcon} alt='checkIcon' />
                        </div>
                        <span className="hiddenSpan">Выполнена</span>
                    </div>
                    <div className="button">
                        <div className="button__icon">
                            <img src={deleteIcon} alt='detecIcon' />
                        </div>
                        <span className="hiddenSpan">Удалить</span>
                    </div>
                    <div className="button">
                        <div className="button__icon">
                            <img src={editIcon} alt='editIcon' />
                        </div>
                        <span className="hiddenSpan">Редактировать</span>
                    </div>
                </div>
            </div>
            <div className="task-info">
                
                <div className="task-info__item  task-info__check">
                    <div className="button__icon">
                        <img src={checkIcon} alt='checkIcon' />
                    </div>
                    
                    <span className="task-info__title">Статус задачи</span>
                    {props.listItem.check ? "Выполнена" : "Нет"}
                    
                    
                    
                </div>
                <div className="line"></div>
                <div className="task-info__item">
                    
                    <span className="task-info__title">Приоритет</span>
                    {props.listItem.priority}
                </div>
                <div className="line line_horizontal"></div>
                <div className="task-info__item">
                    
                    <span className="task-info__title">Дедлайн</span>
                    {props.listItem.dedline}
                </div>
                <div className="line"></div>
                <div className="task-info__item">
                    
                    <span className="task-info__title">Метка</span>
                    {props.listItem.mark === "yellow" ? <div className="block block__yellow"></div>
                    : props.listItem.mark === "red" ? <div className="block block__red"></div>
                    : <div className="block block__green"></div>}
                </div>

            </div>
            <div className="task-content">
                <p>{props.listItem.discription} </p>
            </div>
        </div>
    )
}

export default TaskDetails;