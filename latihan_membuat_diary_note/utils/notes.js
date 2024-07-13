const fs = require('node:fs')



const loadNotes = () => {
    const dataBuffer = fs.readFileSync('data/notes.json', 'utf8')
    const data = JSON.parse(dataBuffer)
    return data
}
const saveNotes = (notes) => {
    fs.writeFileSync('data/notes.json', JSON.stringify(notes));
  }

const addNote = (newNote) => {
    const notes = loadNotes()
    notes.push(newNote)
    saveNotes(notes)
}
const findNote = (data) => {
    const notes = loadNotes()
    const note = notes.find(note => note.title.toLowerCase() === data.toLowerCase())
    return note
}
const updateNote = (noteBaru) => {
    const notes = loadNotes()
    // const note = notes.filter(note => note.title.toLowerCase() !== oldTitle)
    const filteredNote = notes.filter(note => note.title.toLowerCase() !== noteBaru.oldTitle.toLowerCase())
    delete noteBaru.oldTitle
    filteredNote.push(noteBaru)
    saveNotes(filteredNote)
};

const deleteNote = (title) => {
    const notes = loadNotes()
    const filteredNote = notes.filter(note => note.title.toLowerCase() !== title.toLowerCase())
    saveNotes(filteredNote)
}

module.exports = {loadNotes,addNote,findNote,updateNote,deleteNote}