// Сделать локальное хранилище заметок для себя любимой. Не забыть валидацию при добавлении заметки.

//Нажатие на кнопку -> событие -> value inputa записывается в <ul>
// нажатие на другую кнопку -> событие -> все ulы удаляются
// надо еще по отдельной кнопке к каждому добавляемому ulу, чтоб их отдельно удалять можно было

const button_add = document.getElementById("button_add"); //кнопка добавления
const button_delete = document.getElementById("button_delete"); //кнопка удаления
const form = document.getElementById("form"); //форма ввода
const input = document.getElementById("input"); //поле ввода
const notes = document.getElementById("notes") //список заметок


const addNote = () => {
    notes.appendChild(li)
    notes.createElement(li).innerHTML = input.value;
    // const li = notes.createElement(li); //создается поле для новой заметки
    // li.innerHTML = input.value;
    // notes.appendChild(li)
    //создать валидацию, чтоб не добавлялись пустые заметки
    // var element = document.createElement(tagName, [options]);
    // var child = element.appendChild(child);
    // document.getElementById('container2').innerHTML = 'Должен быть выбран как минимум 1 пункт';
    // Node.appendChild(input.value);
}
const deleteAllNotes = () => {
    new_note.innerHTML = "";
}

button_add.addEventListener(`click`, addNote); //добавляем заметку
button_delete.addEventListener(`click`, deleteAllNotes); //удаляем все заметки