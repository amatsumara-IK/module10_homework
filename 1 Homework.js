/* Задание 1, урока 10.3 */




let result = prompt('Введите число', '');
// вводим ДЕСЯТЬ и нажимаем ОК
result = result++;
console.log(typeof result);
if (Number.isNaN(result)){
  alert("Упс, кажется, вы ошиблись, это НЕ число")
} else if ((typeof result) === "number") {
  if (result % 2 === 0) {
    alert("Это четное число")
  } else {
    alert("Это НЕчетное число")
  }
} 