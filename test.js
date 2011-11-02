test('fizzBuzz()', function() { 
	equal(fizzBuzz()[1], 1, "ok expect 1 in array");
    equal(fizzBuzz()[3], " Fizz", "ok expect Fizz in array");
    equal(fizzBuzz()[5], " Buzz", "ok expect Buzz in array");
    equal(fizzBuzz()[15], " Fizz Buzz", "ok expect Fizz Buzz in array");
});
