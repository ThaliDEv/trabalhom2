
const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})

email.addEventListener("blur", () => {
    checkInputEmail();
})

username.addEventListener("blur", () => {
    checkInputUsername();
})

function checkInputUsername(){
    const usernameValue = username.value;

    if(usernameValue === ""){
      errorInput(username, "Nome obrigatório!")
    }else{
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
    
}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
      errorInput(email, "Email obrigatório!")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPassword(){
    const passwordValue = password.value;

    if(passwordValue === ""){
       errorInput(password, "A Senha é obrigatória!")
    }else if(passwordValue.length < 8){
        errorInput(password, "A senha precisa ter no mínimo 8 caracteres")
    }else{
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;

    if(confirmationPasswordValue === ""){
        errorInput(passwordConfirmation, "A confirmação de senha é obrigatória")
    }else if(confirmationPasswordValue !== passwordValue){
        errorInput(passwordConfirmation, "As senhas não são iguais!")
    }else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }

}

function checkForm(){
   checkInputUsername();
   checkInputEmail();
   checkInputPassword();
   checkInputPasswordConfirmation();

   const formItem = form.querySelectorAll(".form-content")

   const isValid = [...formItem].every( (item) => {
     return item.className === "form-content"
   });

   if(isValid){
    alert("DADOS CADASTRADOS COM SUCESSO! LOGO VOCÊ RECEBERA UM LINK EM SEU EMAIL PARA SABER MAIS SOBRE NOSSAS VAGAS")
   }

}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}