import React from 'react';
import './LeftNavBar.css';
import icon3 from '../../assets/Ellipse.svg';
import icon2 from '../../assets/Exclude.svg';
import icon1 from '../../assets/Oval.svg';
import arrowIcon from '../../assets/Arrow.svg';
import arrowCloseIcon from '../../assets/Arrow.svg';

function LeftNavBar(props) {

    const toggleArrow = () => {
        props.toggleArrow();
    }

    console.log(props.isArrowOpen)
    return (
        <div className={'leftnavbar' + (props.isToggle ? ' leftnavbar_open blackscreen' : '')}>
            <div className='leftnavbar__container'>
                <div className="leftnavbar__item">
                    <div className='icon-box'>
                        <img src={icon1} alt='icon1' />
                    </div>
                    <span>Новые</span>
                </div>

                <div className="leftnavbar__item">
                    <div className='icon-box'>
                        <img src={icon2} alt='icon2' />
                    </div>

                    <span>Выполненные</span>
                </div>
                <div className="leftnavbar__item leftnavbar__item--active">
                    <div className='icon-box'>
                        <img src={icon3} alt='icon3' />
                    </div>
                    <span>Все</span>
                </div>
                <div className="leftnavbar__item leftnavbar__item_priority"  onClick={toggleArrow}>
                    <div className='icon-box icon-box_arrow'>
                        {props.isArrowOpen ? <img src={arrowIcon} alt='arrowicon' /> : <img src={arrowIcon} alt='arrowCloseIcon' className="icon-box_arrow-close" />}
                    </div>
                    <span>Приоритет</span>

                </div>
                <div className={props.isArrowOpen ? "leftnavbar__subitems" : "leftnavbar__subitems_close" }>
                    <div className="leftnavbar__item leftnavbar__item_subitem">
                        Высокий
                </div>
                    <div className="leftnavbar__item leftnavbar__item_subitem">
                        Средний
                </div>
                    <div className="leftnavbar__item leftnavbar__item_subitem">
                        Низкий
                </div>
                </div>
            </div>

        </div>
    );
}

export default LeftNavBar;