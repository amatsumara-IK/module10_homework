/* Задание 5, урока 10.5  (Два варианта. Способ с forEach и For)*/

/* const massiv = ["a", 12, 23, 14, "bob", "shnob"]

console.log (massiv.length);

massiv.forEach(function(entry) {
    console.log(entry);
}); */






const massiv = ["a", 12, 23, 14, "bob", "shnob"]

console.log (massiv.length);

for (let index = 0; index < massiv.length; ++index) {
  let element = massiv[index];
  console.log (element);
}