/* Задание 8, урок 10.7 */



let myMap = new Map([
	['key1', 'values1'],
	['key2', 'values2'],
	['key3', 'values3'],
	[123, 999]
]);

for (let keysAll of myMap.keys()){
	console.log (`Ключ - ${keysAll}, Значение ${myMap.get (keysAll)}`);
}
