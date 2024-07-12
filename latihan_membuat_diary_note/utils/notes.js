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
const updateNote = (oldTitle, newTitle, newNote) => {
    const notes = loadNotes();
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; 
    const year = today.getFullYear(); 
    const index = notes.findIndex(note => note.title.toLowerCase() === oldTitle.toLowerCase());
    if (index !== -1) {
        notes[index] = { title: newTitle,date: `${year}-${month}-${day}`, note: newNote };
        saveNotes(notes);
        return notes[index];
    }
    
    return null;
};

module.exports = {loadNotes,addNote,findNote,updateNote}