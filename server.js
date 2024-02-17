import express from 'express'
import axios from 'axios'
import bodyParser from 'body-parser'
const app = express()
const port = 3000
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'))
var api = "http://localhost:4000"

//rouutes
//1.Home page
app.get('/',async (req,res)=>{
    try {
        var responce = await axios.get(`${api}/posts`)
        res.render('index.ejs',{posts:responce.data})
    } catch (error) {
        console.log(error);
    }
})
//new post page
app.get('/new',(req,res)=>{
    res.render('edit.ejs',{header:"New Post",button:"Create"})
})
//edit post page
app.get('/edit/:id',async(req,res)=>{
    try {
        const responce = await axios.get(`${api}/posts/${req.params.id}`,req.params.id)
        console.log(responce.data);
        res.render('edit.ejs',{
            header: "Edit Post",
            button: "Update Post",
            post: responce.data,
        })
    } catch (error) {
        console.log(error);
    }
})
//creating a new blog
app.post('/api/posts',async (req,res)=>{
    try {
        console.log(req.body)
        const responce = await axios.post(`${api}/post`,req.body)
        res.redirect('/')
    } catch (err) {
        
    }
})
//edit a blog
app.post('/api/post/:id', async (req,res)=> {
    try {
        const  response=await axios.patch(`${api}/posts/${req.params.id}`, req.body,req.params.id)
        res.redirect("/")
    } catch (error) {
        
    }
})
//delete the post
app.get("/delete/:id",async (req,res)=>{
    try {
        const responce = await axios.delete(`${api}/posts/${req.params.id}`,req.params.id);
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})