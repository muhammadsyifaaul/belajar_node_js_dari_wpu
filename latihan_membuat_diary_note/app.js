const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const {loadNotes, addNote,findNote,updateNote,deleteNote} = require('./utils/notes');

const app = express();
const port = 3000

app.set('view engine','ejs');
app.use(expressLayouts)
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));

app.get('/' , (req,res) => {
    const notes = loadNotes()
    res.render('index', {
        layout: 'layouts/main-layout',
        title: 'Home',
        notes
    })
    
    
})

app.get('/add-note',(req,res) => {
    res.render('add-note', {
        layout: 'layouts/main-layout',
        title: 'Add Note'
    })
})

app.post('/add-note',(req,res) => {
    const {title,note} = req.body
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; 
    const year = today.getFullYear(); 
    const newNote = {
        title,
        date: `${year}-${month}-${day}`,
        note
    }
    addNote(newNote)
    res.redirect('/')
})
app.get('/:title', (req, res) => {
    const note = findNote(req.params.title);
    if (!note) {
      return res.status(404).send('Note not found');
    }
    res.render('detail', {
      layout: 'layouts/main-layout',
      title: 'Detail Note',
      note
    });
  });
 
app.get('/delete/:title',(req,res) => {
    const title = req.params.title
    deleteNote(title)
    res.redirect('/')
})

app.get('/update/:title',(req,res) => {
    const note = findNote(req.params.title)
    res.render('update-note',{
        layout: 'layouts/main-layout',
      title:'update note',
      note
    })
})
app.post('/update/:title',(req,res) => {
    // const { oldTitle,title, note } = req.body;
    // const updatedNote = updateNote(oldTitle, title, note);
    // if (updatedNote) {
    //     res.send('Note updated successfully');
    // } else {
    //     res.status(404).send('Note not found');
    // }
    const notes = req.body
    updateNote(notes)
    res.redirect('/')
    // res.redirect('/')
})



app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})