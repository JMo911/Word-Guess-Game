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



function random_countries (countries) {
    return countries[Math.floor(Math.random()*countries.length)];   
}

console.log(random_countries(countries));

var current_term = random_countries(countries);
var current_length = current_term.length;
var current_position = countries.lastIndexOf(current_term);
var current_fact = country_facts[current_position];
var current_pic = country_pics[current_position];


function import_current_term() {
    document.getElementById("current_term_display").innerHTML = current_term;
  }

  function import_current_fact() {
    document.getElementById("country_fact").innerHTML = current_fact;
  }  


  function import_current_pic() {
    document.getElementById("country_pic").src = current_pic;
  }  

//   Testing section - code above works

function myFunction() {
    var term = document.getElementById("current_term_display").innerHTML; 
    var res = term.replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/gi, "-");
    document.getElementById("current_term_display").innerHTML = res;
  }