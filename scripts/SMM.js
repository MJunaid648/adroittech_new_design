// const modal = document.getElementById("myModal");
const okayBtn = document.querySelector(".okayBtn");
okayBtn.addEventListener("click", function () {
  resetForm();
});

const emailInput = document.getElementById("email");
emailInput.addEventListener("input", function () {
  const email = emailInput.value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const emailErrorElement = document.getElementById("invalid_email_error");

  if (!emailPattern.test(email)) {
    emailErrorElement.textContent = "Invalid email address";
  } else {
    emailErrorElement.textContent = "";
  }
});

function sendEmail() {
  // Clear previous error messages
  clearErrorMessages();
  const full_name = document.getElementById("full_name").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  const message = document.getElementById("message").value;
  // Validate email format
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  // Validate contact as a number if it's not empty
  if (contact && isNaN(contact)) {
    displayErrorMessage(
      "contact_error",
      "Contact number must be a valid number"
    );
    return;
  }

  // Check if required fields are filled
  if (!full_name) {
    displayErrorMessage("full_name_error", "Full name is a required field");
    return;
  }
  if (!email) {
    displayErrorMessage("email_error", "Email is a required field");
    return;
  }

  if (!contact) {
    displayErrorMessage("contact_error", "Contact number is a required field");
    return;
  }
  if (!message) {
    displayErrorMessage("message_error", "Message is a required field");
    return;
  }

  if (!emailPattern.test(email)) {
    displayErrorMessage("invalid_email_error", "Invalid email address");
    return;
  }

  const emailBody = `
  Name: ${full_name}
  Email: ${email}
  Contact: ${contact}
  Message:
  ${message}
`;
  emailjs.init("RRvdcVP6c1cFeuKq0");
  emailjs
    .send("service_p5ossgn", "template_h87fhdo", {
      message: emailBody,
    })
    .then(function (res) {
      console.log(res.status);
      window.location.href = "./SMM-thank-you.html";
    });
}
function displayErrorMessage(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
}
function clearErrorMessages() {
  const errorElements = document.querySelectorAll(".error-message");
  errorElements.forEach(function (errorElement) {
    errorElement.textContent = "";
  });
}
function resetForm() {
  document.getElementById("full_name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("contact").value = "";
  document.getElementById("message").value = "";
}
