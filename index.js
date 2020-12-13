var rs = require('readline-sync')
const chalk = require('chalk');

var name = rs.question("Enter Name: ")

console.log();
console.log(chalk.rgb(10, 78, 250)(`Hello ${name}, let's start the game`))
console.log();

var score = 0;

var arr = 
  [
    {
     question: "Garden City",
     a: "Bengaluru",
     b: "Hyderabad",
     c: "Delhi",
     answer: "a"
  },
  {
     question: "City of Joy",
     a: "Chennai",
     b: "Hyderabad",
     c: "Kolkata",
     answer: "c"
  },
  {
     question: "Pink City",
     a: "Chennai",
     b: "Jaipur",
     c: "Kolkata",
     answer: "b"
  },
   {
     question: "Detroit of India",
     a: "Chennai",
     b: "Hyderabad",
     c: "Kolkata",
     answer: "a"
  },
   {
     question: "City of Pearls",
     a: "Chennai",
     b: "Hyderabad",
     c: "Mumbai",
     answer: "b"
  }
  ]

for(var i =0 ;i<arr.length;i++){
  var ans = arr[i]
  var right = ans['answer']
  console.log(chalk.bold.rgb(29, 37, 245)(`Q: ${ans['question']}`))
  console.log(chalk.rgb(24, 237, 184)(`a: ${ans['a']}`))
  console.log(chalk.rgb(115, 19, 194)(`b: ${ans['b']}`))
  console.log(chalk.rgb(247, 224, 10)(`c: ${ans['c']}`))

  var youranswer = rs.question("Your answer: ");

  if(youranswer.toUpperCase() === right.toUpperCase()){
  console.log(chalk.rgb(10, 255, 27)(`It is a right answer`))
  score = score + 3
  }
  else{
     console.log(chalk.rgb(250, 34, 10)(`It is a Wrong answer, right answer is ${ans[right]} `))
     score = score - 2
  }
  
  console.log(chalk.rgb(250, 0, 192)(`Your Score is :${score}`));
  console.log()
}

console.log(chalk.rgb(218, 250, 10)(`Total Score is : ${score}`))