const express = require('express')
const app = express();
const cors =require('cors')
const port = process.env.PORT || 5000;
app.use(cors());

const courses=require('./data/courses.json');
const course=require('./data/information.json');
app.get('/courses',(req,res)=>{
    res.send(courses);  
});

app.get('/course/:id',(req,res)=>{
    const id=req.params.id;
    const courseDetails=course.find(e=>e.id===id);
    res.send(courseDetails);
});

app.listen(port,()=>{
    console.log('good',port);
})