import React from 'react';
import "../../index.css"
import HOC from './HOC';

const ToDoList = ({data}) => {
    // const [todos, setTodos] = useState([]);
    // const [term, setTerm] = useState("");

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         try {
    //             const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    //             const json = await res.json();
    //             setTodos(json);
    //             console.log('JSON Data', json);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     }
    //     fetchUsers();
    // }, []);

    let renderTodos = data.slice(0,20).map((todo, index) => {
        return (
            <tr key={index + todo.id}>
                <td>{todo.title}</td>
                {/* <td>{todo.userId}</td>
                <td>{todo.id}</td>
                <td>{todo.completed ? "Yes" : "No"}</td> */}

            </tr>
        )
    })

    // let filterTodos = todos.slice(0, 10).filter(({ title }) => {
    //     return title.indexOf(term) >= 0;
    // })
        
    //     .map((todo) => {
    //         return (
    //             <div key={todo.id}>
    //                 <p>
    //                     <strong>{todo.title}</strong>
    //                 </p>
    //             </div>
    //         )
    //     })
        

    return (
        <>
            {/* <div>
                <h2>Todos</h2>
                <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
            </div> */}
            <div>
                {renderTodos}
            </div>
            {/* <table className="custom-table">
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTodos}
                </tbody>
            </table> */}

        </>
    );
}
const SearchToDoList =  HOC(ToDoList, 'todos');
export default SearchToDoList;
