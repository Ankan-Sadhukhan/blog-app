const express=require('express');
const bodtParser = require('body-parser');
const app=express();
const PORT=3000;

app.use(bodtParser.urlencoded({extended:true}));
app.use(bodtParser.json());

let blog=[];

app.get("/blogs",(req,res)=>{
    res.status(200).json({
        data:blog,
        success:true,
    })
})

app.post('/blogs',(req,res)=>{
    blog.push({
        data:req.body.title,
        content:req.body.content,
        id:Math.floor(Math.random() * 100)
    })

    return res.status(200).json({
        success:true
    })

})

app.get('/blogs/:id',(req,res) => {
    const bg=blog.filter((blo)=> blo.id==req.params.id);
    return res.status(200).json({
        data:bg,
        success:true
    })
})

app.delete('/blogs/:id',(req,res) =>{
    const bg=blog.filter((blo)=> blo.id!=req.params.id);
    blog=bg;
    return res.status(200).json({
        success:true
    })
})



app.listen(PORT,()=>{
    console.log("server started ar port", PORT);
})