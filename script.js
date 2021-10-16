const form = document.querySelector(".sign-up-form");
const input = document.querySelectorAll("input");
const emailInput = document.querySelector("#email");

// Check form input values on submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = emailInput.value;
  input.forEach((el) => {
    // Default error message text
    const defaultErrorMsg = `${el.placeholder} cannot be empty`;
    const wrongEmailFormatMsg = "Looks this is not an email";
    // Error message setup
    let tag = document.createElement("div");
    let text = document.createTextNode(defaultErrorMsg);
    tag.appendChild(text);
    tag.classList.add("error-msg");
    let parent = el.parentElement;
    errorText = parent.querySelector(".error-msg");
    // Add error message function
    const addErrorText = (element) => {
      // if there is no error message add error message
      if (!errorText) {
        parent.appendChild(tag);
      }
      // if error message exists, update it
      if (errorText) {
        errorText.remove();
        parent.appendChild(tag);
      }
      element.classList.add("error");
      element.classList.add("error-img");
    };
    // Check email format function
    const checkForEmailFormat = (element) => {
      if (element.type === "email") {
        let tag = document.createElement("div");
        let text = document.createTextNode(wrongEmailFormatMsg);
        tag.appendChild(text);
        tag.classList.add("error-msg");
        let parent = element.parentElement;
        if (!validateEmail(emailValue)) {
          element.classList.add("error");
          element.classList.add("error-img");
          // if there is no error message add error message
          if (!errorText) {
            parent.appendChild(tag);
          }
          // if error message exists, update it
          if (errorText) {
            errorText.remove();
            parent.appendChild(tag);
          }
        } else {
          element.classList.remove("error");
          element.classList.remove("error-img");
          if (errorText) {
            errorText.remove();
          }
        }
      }
    };
    // Check input for error message status function
    const checkInputValue = (element) => {
      // if input value empty, add error message
      if (element.value === "") {
        addErrorText(element);
      }
      //  if input is no longer empty, remove error message and red border
      if (errorText && element.value !== "") {
        errorText.remove();
        element.classList.remove("error");
        element.classList.remove("error-img");
        checkForEmailFormat(element);
      }
    };
    // Run for each:
    checkInputValue(el);
  });
});

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
