const express = require('express')
const app = express()
const port = process.env.PORT || 3000

//Нонимает и анализирует body request
app.use(express.json())

let courses = [
    {id: 1, title: "js"},
    {id: 2, title: "html"},
    {id: 3, title: "nodejs"}
];

app.get('/', (req, res) => {
    res.send('Hello World! Юлия Лобжа')
})

//Чтение данных
app.get('/courses', (req, res) => {
    res.send(courses);
})

//Создание данных
app.post('/courses', (req, res) => {
    courses.push({
        id: +(new Date()),
        title: req.body.title})
    res.send(courses);
})

//Удаление
app.delete('/courses/:id', (req, res) => {
    const id = +req.params.id;
    courses = courses.filter(c => c.id !== id);
    res.send(courses);
})

//Обновление
app.put('/courses/:id', (req, res) => {
    const id = +req.params.id;
    const course = courses.find(c => c.id === id);
    course.title = req.body.title;
    res.send(courses);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})