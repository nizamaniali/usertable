let userChoice = prompt('Please enter the number you want table of');
if (userChoice) {
  for (let i = 1; i <= 10; i++) {
    console.log(userChoice, ' X ', i, ' = ', userChoice * i);
  }
} else {
  userChoice = 7;
  for (let i = 1; i <= 10; i++) {
    console.log(`${userChoice}  X  ${i}  =  ${userChoice * i}`);
  }
}
