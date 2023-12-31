//Задание 4
//Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить числа в интервале от 
//первого до второго принятого числа. Используйте setInterval.
//Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 
//5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).
//-----------------------------------------------------------------------------------------
function alm() {
  const mes = "ОшЗадДан";
  console.log(mes);
  alert(mes);
} //сигнал ошибка задания данных

// ---------------- 1-й способ ---------------
function printNumbersInRange1(min, max) {
  if (isNaN(min) || isNaN(max)) {
    alm();
    return;
  } else {
    if (min >= max) {
      alm();
      return;
    }
  }
  //далее min используется как счётчик
  const interval = setInterval(function () {
    console.log(min);
    if (min === max) {
      clearInterval(interval);
    } else {
      min++;
    }
  }, 1000);
}

// ---------------- 2-й способ ---------------
function printNumbersInRange2() {
  if (isNaN(min) || isNaN(max)) {
    alm();
    return;
  } else {
    if (min >= max) {
      alm();
      return;
    }
  }
  const i0Id = setInterval(
    (function cnt(xMin, xMax) {
      let i = xMin;
      console.log("НАЧ", xMin);
      function cnt() {
        if (i > xMax) {
          clearInterval(i0Id);
          console.log("КОН", xMax);
        } else {
          console.log(i);
          i++;
        }
        return;
      }
      return cnt;
    })(min, max),
    1000,
  );
}

//ввод исх. данных
let min = prompt("первое число");
min++;
min--;
let max = prompt("второе число");
max++;
max--;

//селектор типа решения
let way = prompt("выберите способ решения (1-2)");
switch (way) {
  case "1":
    console.log("---------------- 1-й способ ---------------");
    printNumbersInRange1(min, max);
    break;
  case "2":
    console.log("---------------- 2-й способ ---------------");
    printNumbersInRange2();
}
