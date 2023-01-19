const form = document.getElementById("form"),
      username = document.getElementById("username"),
      email = document.getElementById("email"),
      password = document.getElementById("password"),
      password2 = document.getElementById("password2");

let errorIcon = document.getElementsByClassName("error"),
    successIcon = document.getElementsByClassName("success");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

});

function setErrorFor(input, message) {
  const formControl = input.parentElement; 
  const small = formControl.querySelector("small"); 
  small.innerText = message;
  formControl.className = "form-control error";

}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";

}

function checkInputs() {
  //remuevo espacio en blanco de input
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Rellene este campo");
    errorIcon[1].style.opacity = "1";
    successIcon[0].style.opacity = "0";
  } else {
    setSuccessFor(username);
    successIcon[1].style.opacity = "1";
    errorIcon[0].style.opacity = "0";
  }

  if (emailValue === "") {
      setErrorFor(email, "Rellene este campo");
    } else if (!isEmail(emailValue)) {
      setErrorFor(email, "Email inválido");
    } else {
      setSuccessFor(email); 
  }

  if (passwordValue === "") {
    setErrorFor(password, "Rellene este campo");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "Tu contraseña debe tener al menos 8 caracteres.");
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Rellene este campo");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Tus contraseñas no coinciden.");
  } else {
    setSuccessFor(password2);
  }
}


//validacion email
function isEmail(email) {{}
  return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  ));
}