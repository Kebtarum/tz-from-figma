import React from 'react';
import './Task.css';
import '../TasksList.css';
import icon2 from '../../../assets/Exclude.svg';
import icon1 from '../../../assets/Oval.svg';
import editIcon from '../../../assets/Edit.svg';
import yellowRect from '../../../assets/YellowRect.svg';
import redRect from '../../../assets/RedRect.svg';
import greenRect from '../../../assets/GreenRect.svg';
import { Link, NavLink } from 'react-router-dom';


function Task(props) {

    const cutDiscription = (winWidth, discription) => {
        let cutDisc
        if (winWidth > 1024) {
            cutDisc = discription.length > 55 ? discription.slice(0, 55) + '…' : discription;
        }
        else if (winWidth > 320) {
            cutDisc = discription.length > 41 ? discription.slice(0, 41) + '…' : discription;
        }
        else {
            cutDisc = discription.length > 19 ? discription.slice(0, 19) + '…' : discription;
        }
        return cutDisc;
    }

    // const cutDate = (winWidth, date) => {
    //     let shortDate
    //     if (winWidth < 320) {
    //         cutDisc = date.slice(0, 7);
    //     }
    //     else {
    //         cutDisc = discription.length > 19 ? discription.slice(0, 19) + '…' : discription;
    //     }
    //     return shortDate;
    // }

    return (
        <div className="taskslist__row taskslist__row_line">
            <div className="taskslist__cells taskslist__cells_left ">
                <div className="taskslist__cell taskslist__icon">
                    <div className="icon-box icon-box_checkbox">
                        {props.item.check ?
                            <img src={icon2} alt='icon2' />
                            : <img src={icon1} alt='icon1' />}
                    </div>
                    {props.item.mark === "yellow" && <img src={yellowRect} alt='yellowRect' />}
                    {props.item.mark === "red" && <img src={redRect} alt='yellowRect' />}
                    {props.item.mark === "green" && <img src={greenRect} alt='yellowRect' />}
                </div>
                <div className="taskslist__cell tasklist__cell_name">
                    <div className="taskslist__name">
                        <Link to={{ pathname: "/task/" + props.item.id, state: "1" }} >{props.item.name}</Link>
                    </div>
                    <div className="taskslist__discription">
                        <span>{cutDiscription(props.windowWidth, props.item.discription)}</span>
                    </div>
                </div>
            </div>
            <div className="taskslist__cells taskslist__cells_right">
                <div className="taskslist__cell tasklist__cell_dedline">
                    <span>{props.windowWidth < 321 ? props.item.dedline.slice(0, 8) : props.item.dedline}</span>
                </div>
                <div className="taskslist__cell tasklist__cell_priority">
                    <span>{props.item.priority}</span>
                </div>
                <div className="taskslist__cell tasklist__cell_icon">
                    <div className="icon-box icon-box_edit">
                        <img src={editIcon} alt='editIcon' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Task;