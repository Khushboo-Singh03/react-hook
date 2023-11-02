import React from 'react';
import { fakeUserData } from '../../api/api';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/userSlice';
import DisplayUser from './DisplayUser';
import DeleteAllUser from './DeleteAllUser';

const UserDetails = () => {

    const dispatch = useDispatch()

    const addNewUser = (data) => {
        // console.log(data)
        dispatch(addUser(data))
    };
    return (
        <>
            <div>
                <button onClick={() => addNewUser(fakeUserData())}> Add New User</button>
            </div>
            <DisplayUser />
            <DeleteAllUser />
        </>
    )
}

export default UserDetails