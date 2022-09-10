import React, { FC, useRef, useState } from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);

    }
    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {

    }
    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }
    return (
        <div>
            <input value={value} placeholder="Управляемый" onChange={changeHandler} type="text" />
            <input ref={inputRef} placeholder="Неуправляемый" type="text" />
            <button onClick={clickHandler}>Add</button>
            <div onDrop={dropHandler} onDragLeave={leaveHandler} onDragOver={dragWithPreventHandler} style={{ width: '200px', height: '200px', background: isDrag ? 'blue' : 'red' }}></div>
            <div onDrag={dragHandler} draggable style={{ width: '200px', height: '200px', background: 'red', marginTop: '15px' }}></div>
        </div>
    );
};

export default EventsExample;