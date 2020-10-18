import { AddToQueueOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import addsvg from '../../assets/AddTask.svg';
import burger from '../../assets/Burger.svg'
import closeIcon from '../../assets/CloseIcon.svg'
import PopupReduxForm from '../../common/Popup';
import './Header.css';


function Header(props) {

    const toggleClick = () => {
         props.onToggle();
    }
    const onPopup = () => {
        props.togglePopup();
    }
    const onSubmitToDo = (formData) => {
        props.addToDo(formData.name, formData.dedline, formData.priority, formData.mark, formData.discription);
        onPopup();
    }

    return (
        <div className="header">
            <div className="header__left">
                <div className="header__burger" onClick={toggleClick}>
                    {props.isToggle ? <img src={closeIcon} alt='closeIcon' /> : <img src={burger} alt='burger' />}
                </div>
                <div className="header__logo">
                    {/* <img src={logosvg} alt='logosvg' /> */}
                    <span>To-Do List</span>
                </div>

            </div>
            <div className="header__right">
                <img src={addsvg} alt='addsvg' onClick={onPopup}/>
                {/* <img src={addIcon} alt='addIcon' /> */}
            </div>
            {props.showPopup ? <PopupReduxForm onSubmit={onSubmitToDo} togglePopup={props.togglePopup} />: null}
        </div>
    );
}

export default Header;