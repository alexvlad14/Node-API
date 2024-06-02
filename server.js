const express = require('express')
const mongoose = require('mongoose')
const Course = require('./models/productModel')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes

app.get('/', (req, res) => {
    res.send('Courses Api')
})



app.get('/courses', async(req, res) => {
    try {
        const course = await Course.find({});
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/courses/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const course = await Course.findById(id);
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


app.post('/courses', async(req, res) => {
    try {
        const course = await Course.create(req.body)
        res.status(200).json(course);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// update a course
app.put('/courses/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const course = await Course.findByIdAndUpdate(id, req.body);
        // we cannot find any course in database
        if(!course){
            return res.status(404).json({message: `cannot find any course with ID ${id}`})
        }
        const updatedCourse = await Course.findById(id);
        res.status(200).json(updatedCourse);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete a course

app.delete('/courses/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const course = await Course.findByIdAndDelete(id);
        if(!course){
            return res.status(404).json({message: `cannot find any course with ID ${id}`})
        }
        res.status(200).json(course);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

mongoose.set("strictQuery", false)
mongoose.
connect('mongodb+srv://admin:123@courseapi.dt85cvk.mongodb.net/Course-API?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, ()=> {
        console.log(`Node API app is running on port 3000`)
    });
}).catch((error) => {
    console.log(error)
})