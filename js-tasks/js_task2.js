//Задание 2
//Напишите функцию, которая принимает на входе любое число (но не больше 1 000), определяет, 
//является ли оно простым, и выводит, простое число или нет. Если введено больше 1 000, 
//то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
//Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.
//------------------------------------------------------------------------------------------
function findDiv (x,MaxCount) {let outX=true;if (x%2) {for (i=3;i<MaxCount;i++){if (!(x%i)) {outX=false;break}}}
			     		     else outX=false;
			       return outX;}
			       
function isSimple(num){if (num<12) {return findDiv (num,num)} else {return findDiv (num,Math.trunc(num/3));}		      		 
		      }
				      		  
function checkNumber(Q){let mes='';let nir='не ';let digit='число';
			if (isNaN(Q)) {return 'введено '+nir+digit;}
			         else {let simp='простое';let nest='составное'; 
					 if (Q>1000) {mes='данные неверны'}
						 	else
						 {mes=Q+' ';
						  switch (Q) {case 0:{}
							      case 1:mes=mes+nir+simp+', '+nir+nest+' '+digit;break;
							      case 2:mes=mes+simp+' '+digit;break;
							      default: if (Q<0) {mes=mes+digit+' меньше нуля'} else
							     		{if (isSimple(Q)) {mes=mes+simp+' '+digit} 
									 else mes=mes+'       '+nest+' '+digit;}
							     }
						}
			 return mes;}
		       }
let s='';
do {
let nr=prompt('Проверка простое число. Выход - 0000');if (nr=='0000') break;
nr++; nr--;alert(checkNumber(nr));} while (1);