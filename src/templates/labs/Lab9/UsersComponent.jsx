import React, { useEffect } from 'react';
import userApi from './users';
import ReactLoading from 'react-loading';


const UsersComponent = () => {
  const { data, error, isLoading, isFetching, refetch } = userApi.useGetUsersQuery();

  const deleteMethod = (id) => {
    fetch(`http://localhost:3000/delete-user/${id}`, { method: 'DELETE' }) 
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // После успешного удаления вызываем функцию для загрузки данных снова
        refetch();
      })
      .catch(err => console.log(err));
  } 

  useEffect(() => {
    refetch();
  }, [refetch]); 

  if (isLoading) return <ReactLoading type={'spin'} color={'blue'} height={100} width={100} className='loading' />;

  if (error) return <div className='error'>Error! {error.message}</div>;

  return (
    <div>
      {isFetching ? <div className="fetch">Fetching...</div> : null}
      <h1>Список пользователей:</h1>
      <ul className='users'>
        {data.map((user) => (
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
