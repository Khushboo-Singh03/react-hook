import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../store/userSlice';

const DisplayUser = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  });

  // console.log("stored data", data);

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <>
      <div>
        {data.map((user, id) => {
          return (
            <li key={id}>
              {user}
              <button onClick={() => deleteUser(id)}>Delete</button>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default DisplayUser;
