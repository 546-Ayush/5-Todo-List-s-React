import React from "react";
import { FiXCircle } from "react-icons/fi";
import style from './ToDolist.module.css';


function ToDolist(props) {
    return (
        <>
            <div className={style.parent}>
                <FiXCircle className={style.icon} onClick={() => {
                    props.onSelect(props.id);
                }} />
                <li>{props.text}</li>
            </div>
        </>
    )
}

export default ToDolist;