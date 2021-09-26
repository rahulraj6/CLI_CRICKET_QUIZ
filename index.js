var readlineSync = require('readline-sync');
var score=0;
const chalk=require('chalk');
var userName = readlineSync.question(chalk.bgCyan.black.bold("What's your name? :" ));
console.log(chalk.italic.bold("Hello " + userName + "!! " + "\nWelcome to JavaScript CLI Cricket Quiz✨\n" + "- Created by Rahulraj. ")); 
console.log();
console.log("------------------------------");
console.log(chalk.underline.bgYellow.black("RULES -- Choose the right option, if you choose the right one, you will score 1 point, if you choose the wrong one, your score will remain as before one! "));
console.log("------------------------------");
console.log(chalk.green("ALL THE BEST !!!👍"))
console.log("------------------------------");

//function
function play(question , answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You have entered option: " + userAnswer);
    score = score + 1;
    console.log(chalk.underline.bold.bgGreen.black("Bravo, You are Right!! 🎁"));
    console.log("Your current score is: " + score);
    if(score === 10){
      console.log(chalk.bgGreen("Kudos, Perfectly Perfect! :)"));
      console.log("============================================");
      }
    if(score === 9){
      console.log(chalk.bgGreenBright.black("Kudos, Perfect! :) "));
      console.log("============================================");
      }
    if(score === 8){
      console.log(chalk.bgCyan("Kudos, Looks good knowledge of cricket! :) "));
      console.log("============================================");
    }
    if(score === 7){
      console.log(chalk.bgMagenta("Kudos, Looks you have a knowledge about cricket! :)"));
      console.log("============================================");
    }
    if(score === 6){
      console.log(chalk.bgBlue("Kudos, Looks good!! "));
      console.log("============================================");
    }
    if(score === 5){
      console.log(chalk.bgYellow("Looks good!! "));
      console.log("============================================");
    }
    if(score === 4||score === 3||score === 2||score === 1){
      console.log(chalk.bgRed("You have only little knowledge about cricket!! :("));
      console.log("============================================");
    }
      
  }

  else {
    console.log(chalk.bgBlack.red.inverse("Oops! Your choice is Wrong! 🎭 "));
    console.log(chalk.bgGreen.black("The Right one is: "+ answer));
    console.log("Your score is: " + score)
    console.log(":( Better Luck Next Time ");
  }
}

var questions = [
  {
    question: 
    `Q1. Who is the first Indian Cricketer to take the hat-trick?
a: Kapil Dev
b: Srikanth
c: Amarnath
d: Chethan Sharma\nAns: `,
    answer: "D",
  },
  {
    question: 
     `Q2. Most balls faced in an innings by an Indian cricketer? 
a: Rahul Dravid
b: Sachin Tendulkar
c: Pujara
d: Gavaskar\nAns: `,
    answer: "C",
  },
  {
    question:
     `Q3. What is the Dhoni Retirement date and time?
a: Aug 14 19:29
b: Aug 15 19:29
c: Aug 15 19:39
d: Jul 07 19:29\nAns: `,
    answer: "B",
  },
  {
    question: 
     `Q4. Best Bowling figures in T20 by an Indian?
a: Yuzvendra Chahal
b: Kuldeep Yadav
c: Shardul Thakur
d: Deepak chahar\nAns: `,
    answer: "D",
  },
  {
    question: 
     `Q5. Name the Bowler, who don't even bowl a single NO-BALL in his entire IPL carrer?
a: Ravichandran Ashwin
b: Piyush Chawla
c: Bhuvaneshwar kumar
d: Praveen kumar\nAns: `,
    answer: "B",
  },
  {
    question: 
     `Q6. Most runs considered by an Indian bowler in an ODI innings?
a: Vinay Kumar
b: Ishanth Sharma
c: Bhuvaneshwar Kumar
d: Mohammad Shami\nAns: `,
    answer: "C",
  },
  {
    question: 
     `Q7. Mahendra Singh Dhoni's Highest T20 score?
a: 71
b: 56
c: 89
d: 67\nAns: `,
    answer: "B",
  },
  {
    question: 
     `Q8. Most runs in women's ODI cricket?
a: Mithali Raj
b: Deepti Sharma
c: Smriti Mandhana
d: Harmanpreet Kaur\nAns: `,
    answer: "A",
  },
  {
    question: 
     `Q9. Most runs in Single Edition of IPL(973 RUNS)?
a: Rohit Sharma
b: Suresh Raina
c: Virat Kohli
d: David Warner\nAns: `,
    answer: "C",
  },
  {
    question: 
     `Q10. First century in IPL by an Indian?
a: Virat Kohli
b: Manish Pandey
c: Suresh Raina
d: Rohit Sharma\nAns: `,
    answer: "B",
  },
];


for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}
console.log("-------------------------------");
console.log(chalk.bgWhiteBright.green("Yay!! Your Total score is: ",score,"/10 😎"));
console.log("*******************************");

var highScore = [
  {
    name:"Dileep",
    score:"10 points"
  },
  {
    name:"Irfan",
    score:"10 points"
  },
  {
    name:"Gouri",
    score: "9 points"
  }
]
for(var j=0;j<highScore.length;j++){
  var newHigh = highScore[j];
  console.log(chalk.bgBlackBright.yellow("Top Scorers :",newHigh.name,"with",newHigh.score));
}
console.log();
console.log(chalk.bgCyanBright.black("Thank You!! Checkout the high scores, if you wish to be in those, ping me and I'll update it! 🥂"))

