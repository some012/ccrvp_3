const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;
const cors = require('cors')

// Подключение к базе данных PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'drive',
    password: 'USER',
    port: 5432,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());


app.get('/users', (req, res) => {
    pool.query('SELECT * FROM "user"', (error, results) => {
        if (error) {
            res.status(500).send('Ошибка при выполнении запроса к базе данных');
        } else {
            res.json(results.rows);
        }
    });
});

app.post('/add-user', (req, res) => {
    const { last_name, first_name, patronymic, group } = req.body;
    pool.query(
        'INSERT INTO "user" (last_name, first_name, patronymic, "group") VALUES ($1, $2, $3, $4)',
        [last_name, first_name, patronymic, group],
        (error, results) => {
            if (error) {
                res.status(500).send('Ошибка при создании пользователя');
            } else {
                res.json({ msg: 'User Added' });
            }
        }
    );
});



app.delete('/delete-user/:userId', (req, res) => {
    const userId = req.params.userId;
    pool.query(
        'DELETE FROM "user" WHERE id = $1',
        [userId],
        (error, results) => {
            if (error) {
                res.status(500).send('Ошибка при удалении пользователя');
            } else {
                res.json({ msg: 'User Deleted' });
            }
        }
    );
});


app.put('/update-user/:userId', (req, res) => {
    const userId = req.params.userId;
    const newGroup = req.body.group;
    pool.query(
        'UPDATE "user" SET "group" = $1 WHERE id = $2',
        [newGroup, userId],
        (error, results) => {
            if (error) {
                res.status(500).send('Ошибка при обновлении пользователя');
            } else {
                res.json({ msg: 'User Updated' });
            }
        }
    );
});

app.listen(port, () => {
    console.log("Сервер запущен - http://localhost:3000");
});

