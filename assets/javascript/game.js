var countries = ["Austria", "Costa Rica", "Egypt", "India", "Spain",
"Switzerland", "United States of America"]

var country_facts = ["8,751,820 people live in Austria. German is the official language.",
"The official language of Costa Rica is Spanish. Native Costa Ricans call themselves ticos and ticas.",
"The longest river in the world, the Nile, runs through Egypt. Egypt is famous for its ancient civilization, the Ancient Egyptians, who date back to around 3150 B.C.",
"Hindi is the main language in India. It is the wettest inhabited place in the world.",
"The Spanish name for Spain is España. The Spanish National Anthem has no actual lyrics.",
"The capital city of Switzerland is Bern. The people speak German, French, Italian and Romansch.",
"The US is the 4th largest country in the world by land area and 3rd by population. Hawaii is the most recent of the 50 states in the US (joining in 1959)."]

var country_pics = ["assets/images/Austria.jpeg",
"assets/images/Costa Rica.jpeg",
"assets/images/Egypt.jpeg",
"assets/images/India.jpeg",
"assets/images/Spain.jpeg",
"assets/images/Switzerland.jpeg",
"assets/images/United States of America.jpeg"]

var current_term = countries[Math.floor(Math.random()*countries.length)]; 
var ghost_term = current_term.replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/gi, "-");
var ghost_split = ghost_term.split("");


//CREATE A GLOBAL ARRAY TO STORE PREVIOUS GUESSES
var previous_guesses=[];

// LOAD CURRENT TERM TO THE BROWSER

window.onpageshow = function (gameset) {
  document.getElementById("current_term_display").innerHTML = ghost_split.join("");
  
}










// INITIATE GAME

document.onkeyup = function(gamerun) {

  //STORE USER INPUT,    
  var user_guess = event.key;

  // CREATE CASE INSENSITIVE ARRAY TO MATCH USER GUESSES TO CURRENT TERM
  var split_term = current_term.toLowerCase().split("");
  // CREATE ARRAY TO COLLECT PREVIOUS GUESSES
  
  // CREATE DYNAMIC NUMBER OF STARTING GUESSES CONTINGENT ON CURRENT TERM
  var number_of_guesses = 2 * split_term.length;
  

// SEE IF USER GUESS MATCHES ANY OF THE LETTERS IN THE CURRENT WORD, THEN DISPLAY THOSE MATCHES IN BROWSER

  for (var i = 0; i < split_term.length; i++) {
    if (user_guess === split_term[i]) {
      ghost_split[i] = current_term[i];
      document.getElementById("current_term_display").innerHTML = ghost_split.join("");
    } 
    
  }


  //STORE INCORRECT GUESSES IN THE PREVIOUS GUESSES BANK
  if (split_term.indexOf(user_guess) === -1) {
    previous_guesses.push(user_guess);
    document.getElementById("previous_guesses_container").innerHTML = previous_guesses.join(" ");
  }






  

}









  // SEE IF USER INPUT MATCHES ANY CHARACTERS FROM CURRENT TERM
  // if (current_term.indexOf(user_guess) !== -1) {

  //   ghost_split[current_term.indexOf(user_guess)] = user_guess;
  //   document.getElementById("current_term_display").innerHTML = ghost_split;
    
    
  //   var spot = current_term.indexOf(user_guess);



  //   console.log(current_term);
    // console.log(spot);



    // var spot = ghost_term[current_term.indexOf(user_guess)];
    // document.getElementById("current_term_display").innerHTML = 
    // spot.replace("-", user_guess); 
  //  then replace all - marks with user_guess at the positions in split_term where user_guess occcurs
  // occurs that index position with user_guess


      // var position = current_term.indexOf(user_guess);
    // var ghost_split = ghost_term.split("");
  
  




  // console.log(user_guess);
  // console.log(current_term);
  // console.log(split_term);
  // console.log(number_of_guesses);
  // console.log(current_term.indexOf(user_guess));
  // console.log(ghost_term[current_term.indexOf(user_guess)]);
  // console.log(ghost_term);
  // console.log(ghost_split);
  // console.log(checking);


    // for (i = 0; i < split_term.length, i++) {
  // }


// }






// function random_countries (jacob) {
// return countries[Math.floor(Math.random()*countries.length-1)];
// }

// console.log(random_countries(countries));

// var current_term = random_countries(countries);
// var current_length = current_term.length;
// var current_position = countries.lastIndexOf(current_term);
// var current_fact = country_facts[current_position];
// var current_pic = country_pics[current_position];


// function import_current_term() {
// document.getElementById("current_term_display").innerHTML = current_term;
// document.getElementById("country_fact").innerHTML = current_fact;

// }

// function import_current_fact() {
// document.getElementById("country_fact").innerHTML = current_fact;
// }


// function import_current_pic() {
// document.getElementById("country_pic").src = current_pic;
// }

// // Testing section - code above works

// function myFunction() {
// var term = document.getElementById("current_term_display").innerHTML;
// var res = term.replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/gi, "-");
// document.getElementById("current_term_display").innerHTML = res;
// }

// document.onkeyup = function (event){
// var key_code = event.keyCode;
// var user_input = String.fromCharCode(key_code);
// console.log(user_input);
// }


// function start_game (event){
// var wins = 0;
// var losses = 0;

// }

// // onkeyup decrement guesses

// function while_game (event) {

// }





























