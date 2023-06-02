let form = document.querySelector("form");

form.onsubmit = (event) => {
  event.preventDefault();
  if (form.elements.email.value && form.elements.name.value) {
    console.group("========== Form Submission ========== ");
    console.log("Name:", form.elements.name.value);
    console.log("Email:", form.elements.email.value);
    console.log("Message:", form.elements.message.value);
    console.groupEnd();
  } else {
    console.warn("Please enter name and email to submit the form");
  }
};
