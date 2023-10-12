/* Задание 2, урока 10.3*/


let x = 13;
console.log(typeof x);
if ((typeof x) === 'number'){
  alert("Переменная x - число")
} else if ((typeof x) === 'string'){
  alert("Переменная x - строка")
} else if ((typeof x) === 'boolean'){
  alert("Переменная x - Логический тип TRUE/FALSE")
} else {
  alert("Тип переменной x неопределен")
}