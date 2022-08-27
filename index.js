// Сделать локальное хранилище заметок для себя любимой. Не забыть валидацию при добавлении заметки.

//Нажатие на кнопку -> событие -> value inputa записывается в <ul>
// нажатие на другую кнопку -> событие -> все ulы удаляются
// надо еще по отдельной кнопке к каждому добавляемому ulу, чтоб их отдельно удалять можно было

document.getElementsByName("button-add") = button-add; //сокращенное имя для кнопки
document.getElementsByName("button-delete") = button-delete; //сокращенное имя для кнопки


const addNote = () => {
    console.log("addNote works")
    //тут валидация видать нужна
    document.getElementsByName("new-note").innerHTML = document.getElementById("input").value
    //надо сделать так, чтоб каждая новая заметка не переписывала старую, а добавляла новую
}

const deleteAllNotes = () => {
    console.log("deleteAllNotes works")
}

button-add.addEventListener(`click`, addNote); //добавляем заметку
button-delete.addEventListener(`click`, deleteAllNotes); //удаляем все заметки