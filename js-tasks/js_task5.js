//Задание 5
//Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. 
//Иначе говоря, умножает x на себя n раз и возвращает результат.
//Используйте Arrow Function синтаксис.
//Протестируйте функцию на любых значениях и выведите результат в консоль.
//-------------------------------------------------------------------------

// 1-й способ /умножает x на себя n раз и возвращает результат/
const X_power_N_1 = (X, n) => {
  let R = 1;
  while (n) {
    R = R * X;
    n--;
  }
  return R;
};

// 2-й способ /умножает x на себя n раз и возвращает результат - СТРОКУ/
const X_power_N_2 = (X, n) => {
  let s = X + " в степени " + n + " = ";
  let R = 1;
  while (n) {
    R = R * X;
    n--;
  }
  return s + R;
};

// 3-й способ
const X_power_N_3 = (X, n) => X ** n;

// 4-й способ
const X_power_N_4 = (X, n) => Math.pow(X, n);

console.log("--------- 1-й способ ---------");
console.log(X_power_N_1(3, 3));
console.log(X_power_N_1(9, 3));
console.log(X_power_N_1(10, 6));
console.log(X_power_N_1(2, 8));

console.log("--------- 2-й способ ---------");
console.log(X_power_N_2(3, 3));
console.log(X_power_N_2(9, 3));
console.log(X_power_N_2(10, 6));
console.log(X_power_N_2(2, 8));

console.log("--------- 3-й способ ---------");
console.log(X_power_N_3(3, 3));
console.log(X_power_N_3(9, 3));
console.log(X_power_N_3(10, 6));
console.log(X_power_N_3(2, 8));

console.log("--------- 4-й способ ---------");
console.log(X_power_N_4(3, 3));
console.log(X_power_N_4(9, 3));
console.log(X_power_N_4(10, 6));
console.log(X_power_N_4(2, 8));
