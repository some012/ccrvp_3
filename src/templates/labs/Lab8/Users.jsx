import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

const Users = () => {
  const dispatch = useDispatch();
  const [sortedUsers, setSortedUsers] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        dispatch({ type: 'SET_USERS', payload: response.data });
        setSortedUsers(response.data);
      })
      .catch(error => console.error('Ошибка при получении данных: ', error));
  };

  const deleteMethod = id => {
    axios.delete(`http://localhost:3000/delete-user/${id}`)
      .then(response => {
        console.log(response.data);
        fetchData(); // Обновляем данные после удаления
      })
      .catch(err => console.error(err));
  };

  const handleSort = column => {
    const isCurrentlyAscending = sortColumn === column && isAscending;
    const sortedData = [...sortedUsers].sort((a, b) => {
      if (isCurrentlyAscending) {
        return a[column] > b[column] ? 1 : -1;
      } else {
        return a[column] < b[column] ? 1 : -1;
      }
    });

    setSortedUsers(sortedData);
    setSortColumn(column);
    setIsAscending(!isCurrentlyAscending);
  };

  const getSortIcon = column => {
    if (sortColumn !== column) {
      return null;
    }

    return isAscending ? <ArrowUpward /> : <ArrowDownward />;
  };

  const columns = [
    { id: 'id', label: 'Пользователь (ID)' },
    { id: 'last_name', label: 'Фамилия' },
    { id: 'first_name', label: 'Имя' },
    { id: 'patronymic', label: 'Отчество' },
    { id: 'group', label: 'Группа' },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <TableCell key={column.id}>
                <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => handleSort(column.id)}>
                  {column.label}
                  {getSortIcon(column.id)}
                </div>
              </TableCell>
            ))}
            <TableCell>Действия</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedUsers.map(user => (
            <TableRow key={user.id}>
              {columns.map(column => (
                <TableCell key={column.id}>{user[column.id]}</TableCell>
              ))}
              <TableCell>
                <IconButton onClick={() => deleteMethod(user.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Users;

