function passwordValidate() {
  let password = document.querySelector("#password").value;
  let confirmPassword = document.querySelector("#passconfirm").value;

  console.log(password, confirmPassword);

  if (password.length != 0) {
    if (password == confirmPassword) {
      error.textContent = "Passwords Match";
    } else {
      error.textContent = "*Passwords do not match";
      event.preventDefault();
    }
  }
}
