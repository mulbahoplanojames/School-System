let dropdownBtn = document.getElementsByClassName("dropdown");

let dropConatiner = document.getElementsByClassName("dropdown_container");

console.log(dropConatiner.length);
console.log(dropdownBtn.length);




let message =
  "Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word inclassical literature, discovered the undoubtable source.";

for (let i = 0; i < dropdownBtn.length; i++) {
  dropdownBtn[i].addEventListener("click", function () {
    dropConatiner[i].innerHTML = message;
    console.log(dropdownBtn[i]);
    console.log(dropConatiner[i]);
  });
}
