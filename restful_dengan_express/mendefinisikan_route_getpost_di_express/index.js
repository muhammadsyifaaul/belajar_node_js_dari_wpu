const path = require('path')
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const {v4: uuidv4} = require('uuid')



app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

let comments = [
    {
        id:uuidv4(),
        username: "samausl",
        text: "ini comment"
    }
    ,{
        id:uuidv4(),
        username: "samausl",
        text: "ini comment dua"
    }
]


app.get('/comments',(req,res) => {
    res.render('index', {
        comments})
})

app.post('/comments/create',(req,res) => {
    const {username,text } = req.body
    comments.push({username, text, id: uuidv4()})
    res.redirect('/comments')
})

app.get('/comments/create',(req,res) => {
    res.render('create')
})

app.get('/comments/:id' ,(req,res) => {
    const {id} = req.params
    const comment = comments.find(c => c.id === id)
    res.render('show',{comment})
})



app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    res.render('edit', { comment })
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params
    const newComment = req.body.text
    const foundComment = comments.find(c => c.id === id)
    foundComment.text = newComment
    console.log(newComment)
    console.log(foundComment)
    res.redirect('/comments')
});

app.delete('/comments/:id',(req,res) => {
    const {id} = req.params
    const newComments = comments.filter(c => c.id !== id)
    comments = newComments
    res.redirect('/comments')
})

app.listen(3000,() => {
    console.log('server running on port 3000')
})


// get / comments - list all comments
// post / comments - create a new comment
// get / comments/:id - get a single comment

// put / comments/:id - update a comment
// delete / comments/:id - delete a comment