var returnValue = [],
	returnNum = 0;
	returnFizz = " Fizz",
	returnBuzz = " Buzz",
	returnFizzBuzz = " Fizz Buzz",	
	num = [];
				
function fizzBuzz(param){
	for (var i=0; i < param; i++) {
		if(i % 3 === 0 && i % 5 === 0 && i != 0){
			num[i] = returnFizzBuzz;
		}else if(i % 3 === 0 && i != 0){
			num[i] = returnFizz;
		}else if(i % 5 === 0 && i != 0){
			num[i] = returnBuzz;
		}else {
			num[i] = i;
		}		
	}
	return num;
}

console.log(fizzBuzz(100));
