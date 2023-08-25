//                                           Assignment 1

//  Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.

const number = (x)=>{
    if (x>0){
        console.log('positive');
    }
    else if(x<0){
        console.log('negative');
    }
    else{
        console.log('zero');
    }
    
}
console.log(number(0))

/* Assignment 2:
 Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. 
 The factorial of a number N is the product of all positive integers less than or equal to N.
*/
function fact(N) {
    for(let i = 1 ; i<N; i++ ){
        return N*fact(i);
    }
}
console.log(`The Factorial of ${5}=`, fact(4));