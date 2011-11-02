test('chkFizzBuzz()', function() { 
    equal(chkFizzBuzz(1), 1, "ok expect 1");
    equal(chkFizzBuzz(15), " Fizz Buzz", "ok expect Fizz Buzz");
    equal(chkFizzBuzz(30), " Fizz Buzz", "ok expect Fizz Buzz"); 
    equal(chkFizzBuzz(3), " Fizz", "ok expect Fizz");
    equal(chkFizzBuzz(9), " Fizz", "ok expect Fizz");
    equal(chkFizzBuzz(5), " Buzz", "ok expect Buzz");
	equal(chkFizzBuzz(10), " Buzz", "ok expect Buzz");
});
