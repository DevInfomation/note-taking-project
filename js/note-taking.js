const addNoteBtn = document.getElementById('add-note-btn');
const textareaNote = document.getElementById('textarea-note');
const myModal = document.getElementById('modal');

const postedNote = document.querySelector('.posted-notes-here');
const spanClose = document.getElementsByClassName('close')[0];
const textPopup = document.querySelector('.text-from-notes');

let integer = 1;

addNoteBtn.addEventListener('click', e => {
    e.preventDefault();

    //Creating all the elements
    const createNoteDiv = document.createElement('div');
    const insideNoteDiv = document.createElement('div');
    const deleteNoteP = document.createElement('p');
    const insertParagraphFromNote = document.createElement('p');
    const noteNumber = document.createElement('label');
    const createBtn = document.createElement('button');

    // Giving all Elements Classlist
    createNoteDiv.classList.add('created-note');
    deleteNoteP.classList.add('delete-note');
    noteNumber.classList.add('label-note');
    createBtn.classList.add('blue-btn');
    insideNoteDiv.classList.add('inside-note-div');
    insertParagraphFromNote.classList.add('shorten-text');

    // Putting the content in
    deleteNoteP.textContent = 'X';
    noteNumber.textContent = `Note ${integer}`;
    integer += 1;
    createBtn.textContent = 'View Details';
    insertParagraphFromNote.textContent = textareaNote.value;

    // Appending all the variables
    postedNote.append(createNoteDiv); 
    createNoteDiv.append(insideNoteDiv);
    insideNoteDiv.append(noteNumber);
    insideNoteDiv.append(deleteNoteP);
    createNoteDiv.append(insertParagraphFromNote);
    createNoteDiv.append(createBtn);

    deleteNoteP.addEventListener('click', () => {
        createNoteDiv.remove();
        insideNoteDiv.remove();
        noteNumber.remove();
        insertParagraphFromNote.remove();
        createBtn.remove();
    });

    createBtn.onclick = function() {
        myModal.style.display = "block";
        textPopup.textContent = textareaNote.value;
    }

    spanClose.onclick = function() {
        myModal.style.display = "none";
    }

    
});
