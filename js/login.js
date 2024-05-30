function resetErrorMessages() {
    console.log("limpiar los divs");
    let errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((element)=> {
        element.innerText = "";
    });
    console.log("divs limpios");
}
function displayErrorMessage(elementId, message) {
    let errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
}
function isValidEmail(email) {

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // correo@texto.texto

    return emailPattern.test(email);
}
function isValidPassword(password) {
    if(password.length < 8){
        return false;
    }
    return true;
}

document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.getElementById("loginForm");
    console.log(form);
    form.addEventListener("submit", (event)=>{

        event.preventDefault();

        resetErrorMessages();

        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let isValid = true;

        if (!isValidEmail(email)) {
            displayErrorMessage("emailError", "Por favor ingrese un correo electrónico válido.");
            isValid = false;
        }

        if (!isValidPassword(password)) {
            displayErrorMessage("passwordError", "La contraseña debe tener al menos 8 caracteres.");
            isValid = false;
        }

        if (isValid) {
            document.getElementById("loginForm").submit();
            alert("¡Formulario enviado correctamente!");
            
        }
    });
} );