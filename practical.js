/*I tried to solve the problem using function.
So i give the user the option of entering the highest value to print.
That is "size".
*/
function printFizzBuzz(size){    //Enter the highest value you wish to see
for (var i = 1; i <= size; i++){
if (i % 3 === 0 && i % 5 === 0){
	console.log('FizzBuzz');
	}
else if (i % 3 === 0) {
	console.log('Fizz');
	}
else if (i % 5 === 0){
	console.log('Buzz')
	}
 
else {
	console.log(i);
	}
}
};
printFizzBuzz(200); 