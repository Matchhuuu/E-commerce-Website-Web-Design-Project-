document.addEventListener("DOMContentLoaded", () => {
    const loginFormContainer = document.getElementById("login-container");
    const createAccountFormContainer = document.getElementById("createAccount-container");
    const loginForm = document.getElementById("login");
    const createAccountForm = document.getElementById("createAccount");

    function setFormMessage(form, type, message) {
        const messageElement = form.querySelector(".form__message");
        messageElement.textContent = message;
        messageElement.classList.remove("form__message--success", "form__message--error");
        messageElement.classList.add(`form__message--${type}`);
    }

    function clearInputError(inputElement) {
        inputElement.classList.remove("form__input--error");
        inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
    }

    document.getElementById("linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginFormContainer.classList.add("form--hidden");
        createAccountFormContainer.classList.remove("form--hidden");
    });

    document.getElementById("linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginFormContainer.classList.remove("form--hidden");
        createAccountFormContainer.classList.add("form--hidden");
    });

    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();

        const signupUsername = createAccountForm.querySelector(".form__input[placeholder='Username']").value;
        const signupPassword = createAccountForm.querySelector(".form__input[placeholder='Password']").value;

        localStorage.setItem("signupUsername", signupUsername);
        localStorage.setItem("signupPassword", signupPassword);

        setFormMessage(createAccountForm, "success", "Account created successfully");

        loginFormContainer.classList.remove("form--hidden");
        createAccountFormContainer.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        setFormMessage(loginForm, "success", "Login successful");

        
        window.location.href = "index.html";
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("input", () => {
            clearInputError(inputElement);
            setFormMessage(loginForm, "error", "");
        });
    });
});
