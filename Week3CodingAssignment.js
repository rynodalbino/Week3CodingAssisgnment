//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [];
ages.push(3, 9, 23, 64, 2, 8, 28, 93);

//a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
ages.length
console.log(ages[ages.length -1] - ages[0]);
//b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push(17);
console.log(ages[ages.length -1] - ages[0]);
//c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.

//create variable before the loop to store the sum
let sum = 0

for(i = 0; i < ages.length; i ++){
//sum all values and divide
    sum += [i]
}

//then create a loop to divide by length

console.log(Math.round(sum / ages.length))









//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(names);
//a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
// when making for loop set a variable!!!!
let totalChars = 0
for(let i = 0; i < names.length; i++) {
    totalChars += names[i].length;
}

console.log(totalChars / names.length);

//b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
//use array join method is not preferred
//make a new variable!!!!!
//don't forget +=

let newNames = "";
for (let i = 0; i < names.length; i ++){
    newNames += names[i] + " ";
}
    console.log(newNames.trim());
//3.	How do you access the last element of any array? 
console.log[names.length - 1];

//4.	How do you access the first element of any array? 
console.log(names[0]);


//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:
//namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array

//need to create an array called nameLengths
nameLengths = []
//write a loop over names array

let charsPerName = 0
for(let i = 0; i < names.length; i ++){
    
    nameLengths.push(names[i].length);
    
console.log(names[i].length);
}
console.log(nameLengths);
//let nameLengths = [charsPerName]
//console.log(nameLengths);
//add length of each name to new array





//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

let SumOfNames = 0
for (let i = 0; i < nameLengths.length; i++){
    SumOfNames += nameLengths[i];
    console.log(SumOfNames);
}

//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).


function repeatNTimes (word, n){
    let repeatword = ''

    while (n > 0) {
        repeatword += word + " ";
        n--;
    }
    return repeatword;
    
}
console.log(repeatNTimes('Hello', 3));

//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

function customerName (firstName, lastName){
    let fullName = firstName + ' ' + lastName
        return fullName;
}
console.log(customerName("Billy", "Jones"));

//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

//Write a function that takes an array of numbers
arrayOfNumbers = [100,2,3,4]
function arrSum(arrayOfNumbers) {
    
    let sum = 0;
    //an array of numbers
    
    //sum of all the numbers in the array is greater than 100
    
        for (let i = 0; i < arrayOfNumbers.length; i++){
            sum += arrayOfNumbers[i];
            
        }
            if( sum > 100){
                return true
            }
            if (sum <= 100){
                return false
            }
        }
    

    
//returns true if the sum of all the numbers in the array is greater than 100
        


console.log(arrSum(arrayOfNumbers));
//
//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
let arrayOfNumQuestion10 = [1, 2, 3, 4, 5]
function arrAvg(arrayOfNumQuestion10) {
    let sum = 0;
        for (let number of arrayOfNumQuestion10){
            sum += number;
        }
            average = sum / arrayOfNumQuestion10.length;
            return average 
        
}
console.log(arrAvg(arrayOfNumQuestion10));
//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

let arrNum1Question11 = [1,2,3,4]
let arrNum2Question11 = [5,6,7,8]

function twoArrays (arrNum1Question11, arrNum2Question11) {

    let sum1 = 0;
        for(let number of  arrNum1Question11){
            sum1 += number;
        }
            average1 = sum1 / arrNum1Question11.length;
            
    

    let sum2 = 0;
        for(let number of arrNum2Question11){
            sum2 += number;
        }
            average2 = sum2 / arrNum2Question11.length;
        
    
        if(average1 >= average2);{
            return true}

}
    console.log(twoArrays(arrNum1Question11, arrNum2Question11));
//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
//Write a function called willBuyDrink
function willBuyDrink (isHotOutside, moneyInPocket){
    
    if(isHotOutside == false) {
        return false;
    }
    if(isHotOutside == true){
        while(moneyInPocket >= 10.50)
        return true;
    }
    
}
    console.log(willBuyDrink(true, 11.50));
    //and a number moneyInPocket
    
    // returns true if it is hot outside and if moneyInPocket is greater than 10.50.

    
//13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.


