import React, { useState } from "react";
import style from './App.module.css';
import ToDolist from './ToDolist';



let TODO_LIST_1 = () => {
    const [input, setInput] = useState('');
    const [items, setItems] = useState([]);

    function handleOnChange(event) {
        setInput(event.target.value)
    }

    function handleOnClick() {
        setItems((oldData) => {
            return [...oldData, input];
        })
        setInput('');
    }

    function deleteItems(id) {
        setItems((oldData) => {
            return oldData.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }

    return (
        <>
            <div className={style.parent}>
                <div className={style.box}>
                    <br />
                    <h2>Todo - List</h2>
                    <br />
                    <input type="text" placeholder="Add Items" onChange={handleOnChange} value={input} />
                    <button onClick={handleOnClick}> + </button>

                    <ol>
                        {
                            items.map((val, index) => {
                                return <ToDolist
                                    text={val}
                                    key={index}
                                    id={index}
                                    onSelect={deleteItems} />
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}

export default TODO_LIST_1;