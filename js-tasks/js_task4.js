//Задание 4
//Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить числа в интервале от 
//первого до второго принятого числа. Используйте setInterval.
//Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 
//5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).
//-----------------------------------------------------------------------------------------
const prmpostfix=' число';
let min=prompt('первое'+prmpostfix); let max=prompt('второе'+prmpostfix);
min++;min--;max++;max--;	
function alm(){const mes='ОшЗадДан';console.log(mes);alert(mes);};    //ошибка задания данных
if (isNaN(min)||isNaN(max)) {alm()} else if (min>=max) {alm()} else {

const i0Id=setInterval((function cnt (xMin,xMax){let i=xMin;console.log('НАЧ',xMin);
			                	 function cnt(){if (i>xMax){clearInterval(i0Id);console.log('КОН',xMax);} 
			                		 	else {console.log(i);i++;}return;}
		          return cnt;}(min,max)),1000);	}