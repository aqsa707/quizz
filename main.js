// Aqsa's Math QUiz
// HTML Variables
let answerE1 = +document.getElementById("answerE1");
let answerE2 = +document.getElementById("answerE2");
let answerE3 = +document.getElementById("answerE3");
let answerE4 = +document.getElementById("answerE4");
let btnE1 = document.getElementById("btn");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let span3 = document.getElementById("span3");
let span4 = document.getElementById("span4");
// Event Listeners
document.getElementById("btn").addEventListener("click", btnClicked);
// Declare Function
function btnClicked() {
  if (answerE1 === "2(2x-3)") {
    span1.innerHTML = "Correct!";
  } else {
    span1.innerHTML = "Incorrect!";
    span1.innerHTML = "Explanation";
  }
  if (answerE2 === "180 degrees") {
    span2.innerHTML = "Correct!";
  } else {
    span2.innerHTML = "Inncorrect!";
    span2.innerHTML = "Explanation";
  }
  if (answerE3 === " 972" || answerE3 == "972 cells") {
    span3.innerHTML = "Correct!";
  } else {
    span3.innerHTML = "Incorrect";
    span3.innerHTML = "Explanation";
  }
  if (
    answerE4 === "100 trillion" ||
    answerE4 === "101 trillion" ||
    answerE4 === "102 trillion" ||
    answerE4 === "103 trillion" ||
    answerE4 === "104 trillion" ||
    answerE4 === "105 trillion"
  ) {
    span4.innerHTML = "Correct!";
  } else {
    span4.innerHTML = "Inncorrect";
    span4.innerHTML = "Explanation";
  }
  let score = document.getElementById("score");
  // how to calculate score
}
