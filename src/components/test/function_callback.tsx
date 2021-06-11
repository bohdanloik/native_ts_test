import React from 'react';

export const User = () => {

    function userDelete() {
        alert('user delete');
    }
    function userSave() {
        alert('user save');
    }
    function onChangeName() {
        console.log('Name changed')
    }
    function focusLost() {
        console.log('Lost Focus elemet')
    }
    return  (<div>
            <textarea onChange={onChangeName} onBlur={focusLost}>BUTTON</textarea> 
            <input />
            <button onClick={userSave}>save</button>
            <button onClick={userDelete}>delete</button>
            </div>);
}