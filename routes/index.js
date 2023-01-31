const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
});
const promisePool = pool.promise();
const nav = [
    {
        url: "/",
        title: "Home"
    },
    {
        url: "/new",
        title: "Create Post"
    }
];

router.get('/', async function (req, res, next) {
    const [rows] = await promisePool.query("SELECT * FROM lgl23forum");
    res.render('index.njk', {
        rows: rows,
        title: 'Forum',
        nav: nav
    });
});

router.get('/new', async function (req, res, next) {
    res.render('new.njk', {
        title: 'Nytt inlägg',
    });
});

router.post('/new', async function (req, res, next) {
    const { author, title, content } = req.body;
    const [rows] = await promisePool.query("INSERT INTO DITT_TABELL_NAMN (author, title, content) VALUES (?, ?, ?)", [author, title, content]);
    res.redirect('/');
});

module.exports = router;
