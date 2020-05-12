import React from 'react';
import { Props } from './types';
import './index.css';
import { PlusIcon, CancelIcon } from '../../../../components/Icons';
const AddTodoItem = ({
    name,
    showControls,
    toggleControls,
    addClick,
    onChangeName,
    title
}: Props) => {
    return (
        <div
            className="add-item-wrapper mod-add is-idle">
            <span
                onClick={toggleControls}
                className="open-item-add">
                <PlusIcon />
                <span>{title}</span>
            </span>
            {
                showControls
                &&
                <div
                    className="">
                    <input
                        className="controls textBox"
                        type="text"
                        value={name}
                        onChange={(e: any) => { onChangeName(e) }}
                        placeholder="Type Your Item Name"
                        onKeyPress={e => {
                            if (e.key == 'Enter') addClick();
                        }}
                    />
                    <div className="d-flex w-100 justify-space-between">
                        <button onClick={addClick} className="btn bg-green">Add Item</button>
                        <CancelIcon />
                        {/* <span
                            className="controls open-add ml-2">
                            x
        </span> */}
                    </div>
                </div>
            }
        </div>
    )
}

export default AddTodoItem;