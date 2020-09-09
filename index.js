/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
// const votingAge = 18;
// if (votingAge >= 18) { //I know the instructions say "ig age > 18" but I'm using >= given the fact that people are legally allowed to vote at age 18 (inclusive) and up.
//   console.log("true");
// }


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let variable1 = 1;
let variable2 = 2;
if (variable2 > variable1) {
  variable1++;
}


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
const stringVariable = Number("1999");


//Task d: Write a function to multiply a*b 
function multiply(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Invalid Data: Params a and b must both be numbers";
  } else {
    return a * b;
  }
}
// console.log(multiply(1, 2));
// console.log(multiply("Chaz", 1));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function ageInDogYears(age) {
  if (isNaN(age)) {
    return "Invalid Data: age parameter must be a number";
  } else {
    return age*7;
  }
}
// console.log(ageInDogYears(10));
// console.log(ageInDogYears("chaz"));

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
const dogFeeder = (weight, age) => {
  if (isNaN(weight) || isNaN(age)) {
    return "Invalid Data: both parameters (weight, age) must be numbers";
  }
  if (age >= 1) {
    if (0 < weight && weight <=5) {
      return weight * 0.05;
    } else if (weight >= 6 && weight < 10){
      return weight * 0.04;
    } else if (weight >= 11 && weight <=15) {
      return weight * 0.03;
    } else {
      return weight * 0.02;
    }
  } else {
    const monthDecimal = 1/12;
    if ( weight >= (2*monthDecimal) && weight < (4*monthDecimal)) {
      return weight * 0.1;
    } else if ( weight >= (4*monthDecimal) && weight < (7*monthDecimal)) {
      return weight & 0.05;
    } else if ( weight >= (7*monthDecimal) && weight < 1) {
      return weight * 0.04;
    }
  }
}
// console.log(dogFeeder(15, 1));



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Scissors
// Your function should take a string (either rock paper or scissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

  const rockPaperScissors = userInput => {
    if (typeof userInput === "string")
      userInput = userInput.toLowerCase();
    
    switch (userInput) {
      case "rock":
        userInput = 0;
        break;
      case "paper": 
        userInput = 1;
        break;
      case "scissors":
        userInput = 2;
        break;
      default: 
        console.log(`${userInput} was not a valid choice of weapon, therefore you have lost.`);
        return "You've forfeited due to invalid weapon choice!";
    }

    /*
      0 beats 2
      0 loses to 1 

      1 beats 0
      1 loses to 2

      2 beats 1
      2 loses to 0 
    */

    const computerInput = Math.floor(Math.random() * 3);
    // console.log(computerInput);

    if (userInput === computerInput) {
      return "It's a tie!";
    }
    else if (userInput === 0 && (Math.abs(userInput - computerInput) === 2)) {
      // user chooses rock
      // |0-2|=2, comp chooses scissors. user wins
      return "User wins!";
    }
    else if (userInput > computerInput && userInput-computerInput===1) {
      // 1>0 OR 2>1, 1-0=1, 2-1=1
      // paper beats rock, scissors beats paper
      return "User wins!";
    }
    else {
      return "Computer wins!";
    }
  }
  // console.log(rockPaperScissors("scissors"));
  // console.log(rockPaperScissors(4));

  
/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
const kilometersToMiles = numKilometers => {
  if (isNaN(numKilometers)) {
    return "INVALID DATA: Parameter must be a number";
  }
  return numKilometers * 0.62137;
}
// console.log(kilometersToMiles(1));
// console.log(kilometersToMiles("chaz"));


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
const feetToCentimeters = numFeet => {
  if (isNaN(numFeet)) {
    return "INVALID DATA: Parameter must be a number";
  }
  return numFeet * 30.48;
}
// console.log(feetToCentimeters(1));
// console.log(feetToCentimeters("chaz"));


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
const annoyingSong = startingNumber => {
  if (isNaN(startingNumber)) {
    console.log("INVALID DATA: Parameter must be a number");
  }
  for (let i=startingNumber; i>0; i--) {
    console.log(`${i} bottles of soda on the wall, ${i} bottles of soda, take one down pass it around ${i-1} bottles of soda on the wall`);
  }
}  
// annoyingSong(3);
// annoyingSong("chaz");


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
const gradeCalculator = percentage => {
  if (isNaN(percentage) || !(0<=percentage) || !(percentage<=100)) {
    console.log("ERROR");
    return("invalid data passed into function; percentage grade must be a NUMBER between 0 and 100 (inclusive)");
  }

  if (percentage >= 90) {
    return "A";
  } else if (percentage >= 80) {
    return "B";
  } else if (percentage >= 70) {
    return "C";
  } else if (percentage >= 60) {
    return "D";
  } else {
    return "F";
  }
}  
// console.log(gradeCalculator(101));
// console.log(gradeCalculator(-20));
// console.log(gradeCalculator(50));
// console.log(gradeCalculator("chaz"));


  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method
const numVowels = str => {
  // this method does not include the letter Y as a vowel in any case-scenario... didn't want to dig that deep haha
  const charArray = str.toLowerCase().split("");
  const vowelsArray = charArray.filter(letter => 'aeiou'.includes(letter));
  return vowelsArray.length;
}

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object


/*
  SEE indexStretch.js FILE!!!!!
*/


// const rockPaperScissors_STRETCH = userInput => {
//   const aElements = document.querySelectorAll('a');
//   for (let i=0; i<aElements.length; i++) {
//     aElements[i].addEventListener('click', playGame);
//   }
  

//   /*
//   if (typeof userInput === "string")
//     userInput = userInput.toLowerCase();
  
//   switch (userInput) {
//     case "rock":
//       userInput = 0;
//       break;
//     case "paper": 
//       userInput = 1;
//       break;
//       userInput = 2;
//       break;
//         case "scissors":
//     default: 
//       console.log(`${userInput} was not a valid choice of weapon, therefore you have lost.`);
//       return "You've forfeited due to invalid weapon choice!";
//   }

//   const computerInput = Math.floor(Math.random() * 3);
//   // console.log(computerInput);

//   if (userInput === computerInput) {
//     return "It's a tie!";
//   }
//   else if (userInput === 0 && (Math.abs(userInput - computerInput) === 2)) {
//     // user chooses rock
//     // |0-2|=2, comp chooses scissors. user wins
//     return "User wins!";
//   }
//   else if (userInput > computerInput && userInput-computerInput===1) {
//     // 1>0 OR 2>1, 1-0=1, 2-1=1
//     // paper beats rock, scissors beats paper
//     return "User wins!";
//   }
//   else {
//     return "Computer wins!";
//   }
//   */
// }

// const playGame = e => {
//   const target = e.target;
//   let userInput = target.id;
//   // alert(typeof target);
//   // alert(typeof userInput);
//   // alert(userInput);
//   switch (userInput) {
//     case "rock":
//       userInput = 0;
//       break;
//     case "paper": 
//       userInput = 1;
//       break;
//     case "scissors":
//       userInput = 2;
//       break;
//     default: 
//       // console.log(`${userInput} was not a valid choice of weapon, therefore you have lost.`);
//       // return "You've forfeited due to invalid weapon choice!";
//       alert('something went wrong!');
//       return;  
//   }
//   // alert(userInput);
//   const computerInput = Math.floor(Math.random() * 3);
//   // alert(computerInput);

  

//   if (userInput === computerInput) {
//     return "It's a tie!";
//   }
//   else if (userInput === 0 && (Math.abs(userInput - computerInput) === 2)) {
//     // user chooses rock
//     // |0-2|=2, comp chooses scissors. user wins
//     return "User wins!";
//   }
//   else if (userInput > computerInput && userInput-computerInput===1) {
//     // 1>0 OR 2>1, 1-0=1, 2-1=1
//     // paper beats rock, scissors beats paper
//     return "User wins!";
//   }
//   else {
//     return "Computer wins!";
//   }



// }

// rockPaperScissors_STRETCH("chaz");




