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

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", 
"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
"u", "v", "w", "x", "y", "z"]

//only define variables here, but then set them in the function
var current_term; 
var ghost_term;
var ghost_split;

  // CREATE DYNAMIC NUMBER OF STARTING GUESSES CONTINGENT ON CURRENT TERM
var number_of_guesses;


//CREATE A GLOBAL ARRAY TO STORE PREVIOUS GUESSES
var previous_guesses;

function init() {
  current_term = countries[Math.floor(Math.random()*countries.length)]; 
  ghost_term = current_term.replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/gi, "-");
  ghost_split = ghost_term.split("");

    // CREATE DYNAMIC NUMBER OF STARTING GUESSES CONTINGENT ON CURRENT TERM
  number_of_guesses = Math.floor(1.4 * ghost_term.length);


  //CREATE A GLOBAL ARRAY TO STORE PREVIOUS GUESSES
  previous_guesses=[];

  //DIPLAYING DASHED TERM IN DOM
  document.getElementById("current_term_display").innerHTML = ghost_split.join("");
}


//SET INITIAL WINS
var wins = 0;

// LOAD CURRENT TERM TO THE BROWSER
//callback function: function provided to code.. it knows to execute the function once this happens

window.onpageshow = init;




// INITIATE GAME


document.onkeyup = function game_run(gamerun) {

  //STORE USER INPUT IF VALID  
  var user_guess = event.key;
  
  
  if (letters.indexOf(user_guess) !== -1) {var legit_guess = event.key;
  }

  // CREATE CASE INSENSITIVE ARRAY TO MATCH USER GUESSES TO CURRENT TERM
  var split_term = current_term.toLowerCase().split("");
  
  //WIN SCENARIO
  if (ghost_split.indexOf("-") === -1 && number_of_guesses >= 0) {
    // wins++;
    document.getElementById("wins_display").innerHTML = "Wins: " + ++wins;
    document.getElementById("country_pic").src = country_pics[countries.indexOf(current_term)];
    document.getElementById("country_fact").innerHTML = country_facts[countries.indexOf(current_term)];
    init();
  }

//LOSE SCENARIO

  if (ghost_split.indexOf("-") !== -1 && number_of_guesses === 0) {
    init();
    //CHANGE DISPLAYS FOR COUNTRY FACT/PIC HERE TO PROMPT USER TO BEGIN GUESSING AGAIN FOR A NEW COUNTRY
  }
  

// SEE IF USER GUESS MATCHES ANY OF THE LETTERS IN THE CURRENT WORD, THEN DISPLAY THOSE MATCHES IN BROWSER




  for (var i = 0; i < split_term.length; i++) {
    if (legit_guess === split_term[i]) {
      ghost_split[i] = current_term[i];
      document.getElementById("current_term_display").innerHTML = ghost_split.join("");
    } 
    
  }


  //DISPLAY DECREMENT NUMBER OF GUESSES
  //IF USER GUESS CONTRIBUTES A LETTER TO THE TERM, OR TO PREVIOUS GUESSES, THEN DECREMENT
  //WHEN 0, RESET
  // for (var i = number_of_guesses; i > 0; i--) {

    if (legit_guess && number_of_guesses > 0 && 
      previous_guesses.indexOf(user_guess) === -1) {
    document.getElementById("guesses_display").innerHTML = "Number of Guesses Remaining: " + number_of_guesses--;
  
    }


  //STORE INCORRECT GUESSES IN THE PREVIOUS GUESSES BANK
  //remove duplicates and non letter characters
  //userguess and legit_guess returning undefined
  if (split_term.indexOf(legit_guess) === -1 && previous_guesses.indexOf(user_guess) === -1){ 
 
  
    previous_guesses.push(legit_guess);
    document.getElementById("previous_guesses_container").innerHTML = previous_guesses.join(" ");
  }

  




  //if guesses = 0 or if the displayed term has no - marks, then regen random ghost term
  //index of "-" === -1

  
  //THIS IS THE WIN SCENARIO

//SET THE STATIC WIN SCREEN AS A STEP BEFORE RE-INIT




  //INCREMENT WINS IF USER GUESSES ALL LETTERS IN WORD BEFORE GUESSES RUN OUT
  //IF THIS HAPPENS, LOAD THE COUNTRIES PICTURE AND FACT
  //DISPLAY PICS AND FACTS IF ALL TERMS FILLED IN BEFORE GUESSES HIT 0


  
  
  
  //init function - happen at start of every game
  





  

}









  