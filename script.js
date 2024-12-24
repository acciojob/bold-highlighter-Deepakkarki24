let strongWord = document.querySelectorAll("strong");

function highlight() {
  //Write your code here
  strongWord.forEach((word) => {
    word.style.color = "green";
  });
}

function return_normal() {
  //Write your code here
  strongWord.forEach((word) => {
    word.style.color = "black";
  });
}
