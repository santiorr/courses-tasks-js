let dogs = document.getElementsByTagName("img"); // Іриси
for (let i = 0; i < dogs.length; i++) {
  // подія натискання миші
  dogs[i].onmousedown = go;
}

// вплив на подію натискання миші
function go(e) {
  // Ірис, на якому сталася подія натискання миші
  let dog = document.getElementById(e.target.id);
  let breed = dog.dataset.breed; // зчитуємо сорт квітки

  let coords = getCoords(dog);
  // shiftX - зсув курсора від лівого краю картинки
  let shiftX = e.pageX - coords.left;
  // shiftY - зсув курсора від верхнього краю картинки
  let shiftY = e.pageY - coords.top;

  // подія переміщення миші
    document.onmousemove = function (e) {
    moveAt(e);
  };

  // функція переміщення об'єкта під координати курсору
  function moveAt(e) {
    // shiftX и shiftY - зсув курсора щодо верхнього лівого кута картинки
    let left = e.pageX - shiftX;
    let top = e.pageY - shiftY;
    dog.style.left = left + "px";
    dog.style.top = top + "px";

    // Координати зображення щодо вікна записуємо в полі showCoords
    showCoords.innerHTML =
      "x: " + dog.style.left + " y: " + dog.style.top;

    // перевірка, чи попадає на поле aussy собака з координатами left, top
    if (onField(aussy, left, top)) {
      if (breed == "aussy") aussy.style.border = "2px green solid";
      else aussy.style.border = "2px red solid";
    }

    // перевірка, чи попадає на поле akita-inu собака з координатами left, top
    if (onField(akita-inu, left, top)) {
      if (breed == "akita-inu") akita-inu.style.border = "2px green solid";
      else akita-inu.style.border = "2px red solid";
    }
  }
    // перевірка, чи попадає на поле shepherd собака з координатами left, top
    if (onField(shepherd, left, top)) {
      if (breed == "shepherd") shepherd.style.border = "2px green solid";
      else shepherd.style.border = "2px red solid";
    }
  }

  // подія відпускання миші
  dog.onmouseup = function (event) {
    // отримуємо координати квітки
    let left = parseInt(dog.style.left);
    let top = parseInt(dog.style.top);

   // перевірка, чи попадає на поле aussy собака з координатами left, top
   if (onField(aussy, left, top)) {
     state.innerHTML =
     dog.id + " порода " + breed + " відпускаємо на поле aussy!"; // записуємо у поле state 
   } else {
     state.innerHTML =
     dog.id + " порода " + breed + " відпускаємо поза полем aussy!";
     aussy.style.border = "none";
   }
   // перевірка, чи попадає на поле akita-inu собака з координатами left, top
   if (onField(akita-inu, left, top)) {
     state.innerHTML =
     dog.id + " порода " + breed + " відпускаємо на поле akita-inu!";
    } else {
    state.innerHTML =
      dog.id + " порода " + breed + " відпускаємо поза полем akita-inu!";
      akita-inu.style.border = "none";
   }
   // перевірка, чи попадає на поле shepherd собака з координатами left, top
   if (onField(shepherd, left, top)) {
     state.innerHTML =
     dog.id + " порода " + breed + " відпускаємо на поле shepherd!";
    } else {
    state.innerHTML =
      dog.id + " порода " + breed + " відпускаємо поза полем shepherd!";
      shepherd.style.border = "none";
   }
   document.onmousemove = null;
   dog.onmouseup = null;
 };

 dog.ondragstart = function () {
    return false; // відміна drag and drop браузера
 };
}

// функція повертає розмір елемента та його координати щодо об'ємного елемента.
function getCoords(elem) {
  let box = elem.getBoundingClientRect();
  // pageYOffset та pageXOffset повертають скролювання вікна в пікселях
  return {
    height: box.height,
    width: box.width,
    top: box.top + pageYOffset,
    left: box.left + pageXOffset,
  };
}

let dogsState = [];
for (let i = 0; i < dogs.length; i++) {
   // створення масиву для відстеження dogs
   dogsState[dogs[i].id] = false;
}