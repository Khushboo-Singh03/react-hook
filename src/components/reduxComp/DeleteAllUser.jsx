import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../store/userSlice';

const DeleteAllUser = () => {
    const dispatch = useDispatch();

    const deleteAllUsers = () => {
        // console.log('hii')
        dispatch(deleteUser());
    };
    return (
        <>
             <>
                <div>
                    <button onClick={() => deleteAllUsers()}>Clear User</button>
                </div>
            </>
        </>
    )
}

export default DeleteAllUser