// Сделать локальное хранилище заметок для себя любимой. Не забыть валидацию при добавлении заметки.

//Нажатие на кнопку -> событие -> value inputa записывается в <ul>
// нажатие на другую кнопку -> событие -> все ulы удаляются
// надо еще по отдельной кнопке к каждому добавляемому ulу, чтоб их отдельно удалять можно было

const button_add = document.getElementById("button_add"); //сокращенное имя для кнопки
const button_delete = document.getElementById("button_delete"); //сокращенное имя для кнопки


const addNote = () => {
    console.log("addNote works")
    //тут валидация видать нужна
    document.getElementById("new_note").innerHTML = document.getElementById("input").value
    //надо сделать так, чтоб каждая новая заметка не переписывала старую, а добавляла новую
}

const deleteAllNotes = () => {
    console.log("deleteAllNotes works")
}

button_add.addEventListener(`click`, addNote); //добавляем заметку
button_delete.addEventListener(`click`, deleteAllNotes); //удаляем все заметки