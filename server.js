const worker=[
    {id:1, name:'Sam', age:'45'},
    {id:2, name:'Tom', age:'34'},
    {id:3, name:'Bill', age:'18'}
]
const express=require('express')
const app=express()

app.get('/', function(req,res) {
    res.send(JSON.stringify(worker))
})

app.listen(3000,function(){
    console.log('server is starting')
})