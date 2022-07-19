const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const eyeView1 = document.getElementById("eye1");
const eyeView2 = document.getElementById("eye2");

form.addEventListener("submit", (a) => {
  a.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "A senha precisa ter no mínimo 8 caracteres.");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "A senha não está igual.");
  } else if (passwordValue.length < 8) {
    setErrorFor(
      passwordConfirmation,
      "A senha precisa ter no mínimo 8 caracteres."
    );
  } else {
    setSuccessFor(passwordConfirmation);
  }

  const formControls = form.querySelectorAll(".form-control");
  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });
  if (formIsValid) {
    console.log("O Formulário está 100% preenchido");
    alert("Parabéns, você criou sua conta!");
  }
}

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

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

eyeView1.addEventListener("click", function () {
  if (password.getAttribute("type") == "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
});

eyeView2.addEventListener("click", function () {
  if (passwordConfirmation.getAttribute("type") == "password") {
    passwordConfirmation.setAttribute("type", "text");
  } else {
    passwordConfirmation.setAttribute("type", "password");
  }
});
