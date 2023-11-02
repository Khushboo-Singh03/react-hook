import React, { useState, useEffect } from 'react';
import "../../index.css"
import HOC from './HOC';

const UserList = ({data}) => {
    // const [users, setUsers] = useState([]);
    // const [term, setTerm] = useState("");

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         try {
    //             const res = await fetch('https://jsonplaceholder.typicode.com/users');
    //             const json = await res.json();
    //             setUsers(json);
    //             console.log('JSON Data', json);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     }
    //     fetchUsers();
    // }, []);

    let renderUsers = data.map((user, index) => {
        return (
            <tr key={index + user.id}>
                {/* <td>{user.id}</td> */}
                <td>{user.name}</td>
                {/* <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    {user.address.street}&nbsp;&#44;
                    {user.address.suite}&nbsp;&#44;
                    {user.address.city}&nbsp;&#44;
                    {user.address.zipcode}&nbsp;&#44;
                    {user.address.geo.lat}&nbsp;&#44;
                    {user.address.geo.lng}&nbsp;&#44;
                </td> */}
            </tr>
        )
    })

    // let filterUsers = users.filter(({ name }) => {
    //     return name.indexOf(term) >= 0;
    // })
    //     .map((user) => {
    //         return (
    //             <div key={user.id}>
    //                 <p>
    //                     <strong>{user.name}</strong>
    //                 </p>
    //             </div>
    //         )
    //     })

    return (
        <>
            {/* <div>
                <h2>Users</h2>
                <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
            </div> */}
            <div>
                {renderUsers}
            </div>
            {/* <table className="custom-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {renderUsers}
                </tbody>
            </table> */}
        </>
    );
}

const SearchUsers =  HOC(UserList, 'users'); // Pass 'users' as the entity

export default SearchUsers;
