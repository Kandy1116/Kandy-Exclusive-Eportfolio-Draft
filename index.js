// template_91wrldd
// service_fr3vq0s
// KJXHaU6B8Zzu04vLT
let isModalOpen = false; 
let contrastToggle = false

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove(" dark-theme")
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_fr3vq0s",
      "template_91wrldd",
      event.target,
      "KJXHaU6B8Zzu04vLT"
    ).then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable Please contact me directly on venus.kandy@gmail.com"
      );
    })
}


function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false
    return document.body.classList.remove("modal--open")
  }
  isModalOpen = true;
  document.body.classList += ' modal--open'
}