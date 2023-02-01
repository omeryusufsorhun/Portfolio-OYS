var resetBtn = document.getElementById("reset-btn");
var submitBtn = document.getElementById("submit-btn");

var nameInput = document.getElementById("name-input");
var emailInput = document.getElementById("email-input");
var descInput = document.getElementById("desc-input");
var form = document.getElementById("contact-form");

resetBtn.addEventListener("click", function (e) {
  e.preventDefault();
  nameInput.value = "";
  emailInput.value = "";
  descInput.value = "";
});

//submit control

form.addEventListener("change", function () {
  console.log("sa");
});

//send email
submitBtn.addEventListener("click", function sendMail(e) {
  e.preventDefault();

  if (
    nameInput.value.length != 0 &&
    emailInput.value.length != 0 &&
    descInput.value.length != 0
  ) {
    ValidateEmail();
  } else {
    console.log("Please Fill All Fields");
  }
});

//email validation
function ValidateEmail() {
  var mail = emailInput.value;
  var regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var params = {
    name: nameInput.value,
    email: emailInput.value,
    message: descInput.value,
  };
  const serviceID = "service_2zgby39";
  const templateID = "template_j4aanlo";
  if (regx.test(mail)) {
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        nameInput.value = "";
        emailInput.value = "";
        descInput.value = "";
        console.log("Succesfully Sent");
      })

      .catch((err) => console.log(err));
    alert("Succesfully Sent");
    return true;
  } else {
    alert("Please Use Valid Email");
    return false;
  }
}
