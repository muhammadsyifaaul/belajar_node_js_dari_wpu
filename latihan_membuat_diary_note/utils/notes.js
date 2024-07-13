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
    // const index = notes.findIndex(note => note.title.toLowerCase() === oldTitle.toLowerCase());
    // if (index !== -1) {
    //     notes[index] = { title: newTitle,date: `${year}-${month}-${day}`, note: newNote };
    //     saveNotes(notes);
    //     return notes[index];
    // }
    // const note = notes.filter(note => note.title.toLowerCase() !== oldTitle)
    const filteredNote = notes.filter(note => note.title.toLowerCase() !== noteBaru.oldTitle.toLowerCase())
    delete noteBaru.oldTitle
    filteredNote.push(noteBaru)
    saveNotes(filteredNote)
};

module.exports = {loadNotes,addNote,findNote,updateNote}