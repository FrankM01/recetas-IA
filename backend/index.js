import express from 'express'

const app = express()

app.get('/users',(req,res) =>{
  res.send("Users!")
})

app.listen(3000, () => {
  console.log('Server started on port 3000 ');
})