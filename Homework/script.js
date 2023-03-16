// Функция для отображения большой картинки
function showImage(src) {
    // Находим элемент с большой картинкой
    var largeImage = document.getElementById("large-image");
    // Устанавливаем путь к большой картинке
    largeImage.src = src;
  }



  // Находим элемент div по id
var myDiv = document.getElementById("myDiv");

// Добавляем обработчик события "mouseover" (наведение курсора)
myDiv.addEventListener("mouseover", function() {
  // Генерируем случайный цвет
  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  // Устанавливаем цвет div-а
  myDiv.style.backgroundColor = randomColor;
});
//Эdivс иденmyDiv,div,div.Math.floor(Math.random() * 16777215).toString(16)и#RRGGBB.



// Находим элементы на странице
var todoInput = document.getElementById("todo-input");
var addButton = document.getElementById("add-button");
var todoList = document.getElementById("todo-list");

// Функция для добавления элемента в список
function addItem() {
  // Создаем новый элемент списка и устанавливаем текст из поля ввода
  var newItem = document.createElement("li");
  newItem.textContent = todoInput.value;

  // Добавляем обработчик события "click" на элемент списка
  newItem.addEventListener("click", function() {
    // Если элемент не имеет класса "completed", то добавляем его
    if (!newItem.classList.contains("completed")) {
      newItem.classList.add("completed");
    }
    // Иначе удаляем класс "completed"
    else {
      newItem.classList.remove("completed");
    }
  });


  

  // Добавляем элемент в список
  todoList.appendChild(newItem);

  // Очищаем поле ввода
  todoInput.value = "";
}

// Добавляем обработчик события "click" на кнопку "Добавить"
addButton.addEventListener("click", addItem);

// Добавляем обработчик события "keydown" на поле ввода
todoInput.addEventListener("keydown", function(event) {
  // Если нажата клавиша "Enter" и поле ввода не пустое, то добавляем элемент в список
  if (event.keyCode === 13 && todoInput.value !== "") {
    addItem();
  }
});
