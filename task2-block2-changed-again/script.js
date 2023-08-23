function add_text(id, text) {
  let elem = document.getElementById(id);
  let pos = 0;// начальне значення, відповідає першій літері

  function add_letter() { // функція для друку літер
    pos++;
    elem.innerHTML = text.substring(0, pos); // в elem.innerHTML друкуємо підрядок text  довжиною від 0 до pos символів
    if (pos == text.length) { // слово надруковано повністю
		clearInterval();
	  }
  }
  setInterval(add_letter, 1000);// викликати функцію add_letter() кожні 1000 мс 
}


function remove_text(id) {
  let elem = document.getElementById(id);
  let text = elem.innerHTML;
  let pos = text.length;// начальне значення, відповідає останній літері

  function remove_letter() { // функція для видалення літер
	 pos--;
    elem.innerHTML = text.substring(0, pos); // в elem.innerHTML друкуємо підрядок text  довжиною від 0 до pos символів
    if (pos == 0) { // слово видалено повністю
		clearInterval();
	  }
  }
  setInterval(remove_letter, 1000);// викликати функцію remove_letter() кожні 1000 мс 
}