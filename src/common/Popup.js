import React from 'react';
import './Popup.css';
import { reduxForm, Field } from 'redux-form';
import closeIcon from '../assets/CloseBlack.svg'
import calendarIcon from '../assets/Calendar.svg'
import { maxLengthCreator, required } from '../utils/validators/validators';






const renderField = (field) => (
    <div>
      <input {...field.input} type="text"/>
      {field.meta.touched && field.meta.error && 
       <span className="error">{field.meta.error}</span>}
    </div>
  )

const maxLength50 = maxLengthCreator(50);

const Popup = (props) => {

    const onClose = () =>{
        props.togglePopup();
    }

    return (
        // <div className={s.popup}>
        //     <div className={s.popupInner}>
        //         <h1>{props.text}</h1>
        //         <input type={"file"} onChange={props.onMainPhotoSelected} />
        //         <button onClick={props.onMainPhotoAdd}>close me</button>
        //         <button onClick={props.closePopup}>close me</button>
        //     </div>
        // </div>
        <form onSubmit={props.handleSubmit} className="popup">
            <div className="popup__inner">
                <div className="popup__row">
                    <div className="popup__title">
                        <span>Создание задачи</span>
                    </div>
                    <div className="popup__close" onClick={onClose}>
                        <img src={closeIcon} alt='closeIcon' />
                    </div>
                </div>
                <div className="popup__row">
                    <div className="popup__item popup__input_name">
                        <span>Название</span>
                        <Field component={'input'} name={'name'} className='popup__input' validate={[required, maxLength50]} />
                    </div>

                </div>
                <div className="popup__row">
                    <div className="popup__item popup__input_dedline">
                        <span>Дедлайн</span>
                        <Field component={"input"} name={'dedline'} type={'date'} className='popup__input popup__input_calendar' validate={[required]} />
                        
                    </div>
                    <div className="popup__item popup__input_priority">
                        <span>Приоритет</span>
                        <Field component={'select'} name={'priority'} className='popup__input' >
                            <option>Высокий</option>
                            <option>Средний</option>
                            <option>Низкий</option>
                        </Field>
                    </div>
                    <div className="popup__item popup__input_priority ">
                        <span>Метка</span>
                        <Field component={'select'} name={'mark'} className='popup__input popup__input_colors' >
                            <option >green</option>
                            <option>yellow</option>
                            <option>red</option>
                        </Field>
                        <div className="circle-box">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
                <div className="popup__row">
                    <div className="popup__item popup__input_discription">
                        <span>Описание</span>
                    <Field component={'textarea'} name={'discription'} className='popup__input'  />
                    </div>
                </div>
                
                    <div className="popup__line"></div>
                
                
                <div className="popup__row_button">
                    {/* <div className="popup__button popup__button_cancel" onClick={onClose}> */}
                        <button className="popup__button popup__button_cancel" onClick={onClose}>
                        <span>Отменить</span></button>
                    
                    {/* <div className="popup__button"> */}
                        <button className="popup__button" >
                        <span>Создать</span></button>
                    
                </div>
            </div>

        </form>
    );
}

const PopupReduxForm = reduxForm({
    form: '/add-todo',

})(Popup);

export default PopupReduxForm;

{/* <div className={s.popupInner}>
                <h2>Uploading new photo</h2> */}
{/* {createNewField(null, 'photoFile',[], Input, { type: 'file' })} */ }
{/* <Field component={input} name={'photoFile'} type={'file'} /> */ }
{/* <input type="file" name="photoFile" onChange={() =>{}} /> */ }
{/* <Field name="photoFile" component={FieldFile} type={"file"} /> */ }
{/* <input type={"file"}  /> */ }
{/* <div className={s.popupInnerItems}>
                    <div className={s.popupInnerItem}>
                        <button className={s.button} >Submit</button>
                    </div>
                    <div className={s.popupInnerItem}>
                        <button className={s.button} onClick={props.closePopup}>Close</button>
                    </div>
                </div> */}
{/* </div> */ }