var returnValue = [],
	returnNum = 0;
	returnFizz = " Fizz",
	returnBuzz = " Buzz",
	returnFizzBuzz = " Fizz Buzz";	
				
function fizzBuzz() {
	for (var i=1; i < 100; i++) {
		if (i !== 0) {
			returnValue[i] = chkFizzBuzz(i);
		}
	}
	return returnValue;
}

function chkFizzBuzz(num){
	if(num % 3 === 0 && num % 5 === 0){
		return returnFizzBuzz;
	}else if(num % 3 === 0){
		return returnFizz;
	}else if(num % 5 === 0){
		return returnBuzz;
	}else {
		returnNum = num;
		return returnNum;
	}
}

console.log(fizzBuzz());
