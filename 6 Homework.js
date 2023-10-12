/* Задание 6 */

const array = [23, 23, 23, 23, 23, 223];

  	for (let i = 0; i < array.length; i++){
	if (array[0] == array[i]){
    	if (i == (array.length - 1)){
        	console.log ("Содержание массива одинаково"); return true;}

    } else {console.log ("Содержание массива не одинаково"); return false; }

  	}