function contactWithRachel() {
  let firstName = prompt("What is your first name?");
  let lastName = prompt("What is your last name?");
  let age = prompt("How old are you?");
  if (age < 18) {
    alert("Sorry! Honestly I can't cantact with people under 18😞");
    return 0;
  } else {
    let email = prompt("What is your email adress?");
    let country = prompt("Where are you living now?");
    country = country.toLowerCase();
    country = country.trim();
    if (country === "iran") {
      alert("Sorry! I can not contact you directly due to sanctions😞");
    } else {
      alert("I will keep in touch with you!♥");
    }
  }
}
let letContactButton = document.querySelector("button");
letContactButton.addEventListener("click", contactWithRachel);
