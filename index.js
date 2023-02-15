//email reducer which returns an object with a property of email set to an empty string by default.
const reducer = (state = { email: "" }, action) => {
  if (action.type === "changeEmail") {
    return { ...state, email: action.payload };
  }
  return state;
};

//create store
const store = Redux.createStore(reducer);

//get form, email input, and error
const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error");

// happens when the form is submit.
form.addEventListener("submit", (e) => {
  //prevent the refresh of the page
  e.preventDefault();

  //check if the user entered a value.
  // If not, then show the error message and set the border of the input to the red color in the css.
  // If there is, set the error message to an empty string and remove the border of the input
  if (emailInput.value === "") {
    errorMessage.textContent = "Please enter a valid email.";
    emailInput.style.border = "2px solid var(--light-red)";
  } else {
    errorMessage.textContent = "";
    emailInput.style.border = "none";

    // creates a change email action creator which returns a type of changeEmail and the payload set to the value of the input
    const changeEmail = () => {
      return {
        type: "changeEmail",
        payload: emailInput.value,
      };
    };

    // dispatches the action
    store.dispatch(changeEmail());

    // alerts the email entered by the user to see if the email changed from an empty string to the user input.
    alert(store.getState().email);
  }
});
