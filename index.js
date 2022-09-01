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
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        notes.appendChild(li);


        // const privat_button = document.createElement("button");
        // li.appendChild(document.createTextNode(input.value));
        // notes.appendChild(li);
        // elem.parentNode.removeChild(elem); //это я пишу кнопку к каждой заметке

        

        //         const nameFormat = ('/\S/', $input);
        //         if (nameField.value !=0) {
        //             console.log(nameField.value)
        //             return true;
        //         } else {
        //             document.getElementById('cont').innerHTML = 'Пустые заметки не сохраняются';
        //             return false;
        //         }

        //         function isEmpty(str) {
        //             if (str.trim() == '') 
        //               return true;

        //             return false;
        // }

        const deleteAllNotes = () => {
            notes.innerHTML = "";
        }

        button_add.addEventListener(`click`, addNote); //добавляем заметку
        button_delete.addEventListener(`click`, deleteAllNotes); //удаляем все заметки