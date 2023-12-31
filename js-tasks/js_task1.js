//Задание 1
//В прошлом модуле в юните «Циклы» вы выполняли следующее задание:
//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
//Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
//При выполнении задания необходимо учесть, что массив может содержать не только числа, но и знаки, например null и так далее.
//На этот раз оформите решение в виде функции: постарайтесь дать этой функции корректное название, 
//вызовите функцию, проанализируйте синтаксис.
//------------------------------------------------------------------------------------------------------------
function countEvenOddZeroElements(arr) {
  const numbersArray = arr.filter((element) => typeof element === "number" && !isNaN(element));
  const evenCount = numbersArray.filter((element) => element !== 0 && element % 2 === 0).length;
  const oddCount = numbersArray.filter((element) => element % 2 !== 0).length;
  const zeroCount = numbersArray.filter((element) => element === 0).length;

  console.log("Количество чётных элементов:", evenCount);
  console.log("Количество нечётных элементов:", oddCount);
  console.log("Количество нулевых элементов:", zeroCount);
}
let array_1 = [
  1,
  2,
  0,
  3,
  "1",
  null,
  "2",
  "3",
  true,
  0,
  false,
  "abc123",
  "0",
  52.5,
  -1,
  -10,
  -1.5,
  false,
  1.5,
  0.5,
  -0.5,
  null,
  50,
  0,
  101,
];
console.log(array_1);
countEvenOddZeroElements(array_1);

