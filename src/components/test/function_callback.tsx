import React from 'react';

export const User = () => {

    function userDelete() {
        alert('user delete');
    }
    function userSave() {
        alert('user save');
    }
    return  (<div>
            <span>BUTTON</span>
            <button onClick={userSave}>save</button>
            <button onClick={userDelete}>delete</button>
            </div>);
}