// Сделать локальное хранилище заметок для себя любимой. Не забыть валидацию при добавлении заметки.

//Нажатие на кнопку -> событие -> value inputa записывается в <ul>
// нажатие на другую кнопку -> событие -> все ulы удаляются
// надо еще по отдельной кнопке к каждому добавляемому ulу, чтоб их отдельно удалять можно было

const button_add = document.getElementById("button_add"); //сокращенное имя для кнопки
const button_delete = document.getElementById("button_delete"); //сокращенное имя для кнопки
const form = document.getElementById("form"); //сокращенное имя для формы, куда пойдут все заметки
const input = document.getElementById("input"); //сокращенное имя для поля ввода
const new_note = document.getElementById("new_note")


const addNote = () => {
    //создать валидацию, чтоб не добавлялись пустые заметки
    //надо сделать так, чтоб каждая новая заметка не переписывала старую, а добавляла новую
    // new_note.innerHTML = input.value
    const oneMoreNote = document.createElement
    // Node.appendChild(input.value);
    // var child = element.appendChild(child);
}
const deleteAllNotes = () => {
    new_note.innerHTML = "";
}

button_add.addEventListener(`click`, addNote); //добавляем заметку
button_delete.addEventListener(`click`, deleteAllNotes); //удаляем все заметки