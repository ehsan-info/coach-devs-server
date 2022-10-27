const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const coursesCat = require('./data/course_cat.json');
const course = require('./data/course.json');
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/courses-cat', (req, res) => {
    res.send(coursesCat);
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    if (id == '07') {
        res.send(course);
    }
    else {
        const selectedCategory = course.filter(singleNewCat => singleNewCat.category_id === id);
        res.send(selectedCategory);
    }
})
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.filter(singleCourse => singleCourse._id === id);
    res.send(selectedCourse);
})
app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.filter(singleCourse => singleCourse._id === id);
    res.send(selectedCourse);
})
app.get('/course', (req, res) => {
    res.send(course);
})

app.listen(port, () => {
    console.log(`page run on port ${port}`)
})