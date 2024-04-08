import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const UsersComponent = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);


    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(data => {
                dispatch({ type: 'SET_USERS', payload: data });
            })
            .catch(error => console.error('Ошибка при получении данных: ', error));
    }, [])

    const deleteMethod = (id) => {
       fetch('http://localhost:3000/delete-user/' + id, {method: 'DELETE'}) 
       .then(response => response.json())
       .then(data => console.log(data))
       .catch(err => console.log(err)) } 





    return (
        <div>
            <h1>Список пользователей:</h1>
            <ul className='users'>
                {users && users.map(user => (
                    <li key={user.id} className='user'>
                       Пользователь ({user.id} ID): {user.last_name} {user.first_name} {user.patronymic} {user.group}
                       <button onClick={() => deleteMethod(user.id)}>Удалить</button>
                    </li>
                    
                ))}
            </ul>

        </div>
    );
};

export default UsersComponent;