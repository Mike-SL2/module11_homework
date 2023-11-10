//Задание 2
//Напишите функцию, которая принимает на входе любое число (но не больше 1 000), определяет, 
//является ли оно простым, и выводит, простое число или нет. Если введено больше 1 000, 
//то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
//Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.
//------------------------------------------------------------------------------------------

const errorMessage = "Данные неверны. Пожалуйста, введите число от 2 до 1000.";
const isSimple2 = (n) => {
  if (n < 2 || n > 1000) {
    return errorMessage;
  }
  const nStr = n + " - ";
  const simplStr = nStr + "простое число.";
  let i = 2;
  if (n == i) return simplStr;
  while (i < n) {
    if (n % i) i++;
    else {
      return nStr + "не является простым числом.";
    }
  }
  return simplStr;
};

while (1) {
  let x = prompt("число от 2 до 1000. 0 - stop");
  if (isNaN(x)) alert(errorMessage);
  else {
    x++;
    x--;
    if (x) alert(isSimple2(x));
    else break;
  }
}
