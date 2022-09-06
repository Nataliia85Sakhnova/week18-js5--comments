// Сделать локальное хранилище заметок для себя любимой. Не забыть валидацию при добавлении заметки.

//Нажатие на кнопку -> событие -> value inputa записывается в <ul>
// нажатие на другую кнопку -> событие -> все ulы удаляются
// надо еще по отдельной кнопке к каждому добавляемому ulу, чтоб их отдельно удалять можно было

const button_add = document.getElementById("button_add"); //кнопка добавления
const button_delete = document.getElementById("button_delete"); //кнопка удаления
const form = document.getElementById("form"); //форма ввода
const input = document.getElementById("input"); //поле ввода
const notes = document.getElementById("notes") //список заметок ul

const addNote = () => {

    if (input.value != "") {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        notes.appendChild(li); // done, добавляем заметку

        const privat_button = document.createElement("button");
        privat_button.appendChild(document.createTextNode("Delete it"));
        li.appendChild(privat_button); // done, добавляем кнопку для удаления конкретной заметки
        privat_button.classList.add("privat_button"); // done, добавляем класс кнопке

        const buttons = document.querySelectorAll(".privat_button") //done, создается массив кнопок
        buttons.forEach((e) => e.addEventListener("click", (e) => {
                e.target.parentNode.remove(); //done, заметка удаляется
            }))
    return true;



} else {
    document.getElementById('cont').innerHTML = 'Пустые заметки не сохраняются';

    // if (document.getElementById('cont').innerHTML != "")
    // document.getElementsByClassName("buttons") - произошел клик
    // то тогда:
    // document.getElementById('cont').innerHTML = '';
    // return false;
}
}

const deleteAllNotes = () => {
    notes.innerHTML = "";
}

button_add.addEventListener(`click`, addNote); //done, добавляем заметку
button_delete.addEventListener(`click`, deleteAllNotes); //done, удаляем все заметки