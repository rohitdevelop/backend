 const express = require('express')
 const path = require('path')
 
 const app = express()
 
 app.use(express.json())

 app.get('/',(req, res)=>{
res.sendFile(path.join(__dirname, 'index.html'))
  })


app.post('/contact',(req,res)=>{
const {name , email , massage} = req.body

if (!name || !email|| !massage) {
  return res.status(400).json({massage: false , massage: 'faill to load'})
}
 
res.status(200).json({
  name:true,
  massage:`its done ${name}`
})

})

 const port = process.env.PORT || 3000;

 app.listen(port, () => {
   console.log(`Server is running at http://localhost:${port}`);
 });