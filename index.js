// template_91wrldd
// service_fr3vq0s
// KJXHaU6B8Zzu04vLT
// document.addEventListener("DOMContentLoaded", () => {
//   const form =
//     document.getElementById("contact__form") || document.querySelector("form");

//   const submitBtn =
//     document.getElementById("contact__submit") ||
//     (form && form.querySelector('button[type="submit"], input[type="submit"]'));

//   const readFieldValues = () => {
//     const nameEl =
//       (form && form.elements["user_name"]) ||
//       document.getElementById("contact__name");

//     const emailEl =
//       (form && form.elements["user_email"]) ||
//       document.getElementById("contact__email");

//     const messageEl =
//       (form && form.elements["message"]) ||
//       document.getElementById("contact__message");

//     const name = nameEl ? nameEl.value : undefined;

//     const email = emailEl ? emailEl.value : undefined;

//     const message = messageEl ? messageEl.value : undefined;

//     console.log("[contact form] values:", { name, email, message });

//     if (!nameEl) console.warn("[contact form] name field not found");

//     if (!emailEl) console.warn("[contact form] email field not found");

//     if (!messageEl) console.warn("[contact form] message field not found");
//   };

//   if (form) {
//     form.addEventListener("submit", (e) => {
//       console.info("[contact form] submit event");

//       readFieldValues();
//     });
//   } else {
//     console.warn("[contact form] form element not found");
//   }

//   if (submitBtn) {
//     submitBtn.addEventListener("click", () => {
//       console.info("[contact form] submit button clicked");

//       readFieldValues();
//     });
//   } else {
//     console.debug(
//       "[contact form] submit button not found; relying on form submit"
//     );
//   }
// });



// emailjs.init("KJXHaU6B8Zzu04vLT"); // your public key

// const contactForm = document.getElementById("contact__form");

// contactForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   emailjs
//     .sendForm(
//       "service_fr3vq0s",

//       "template_91wrldd",

//       contactForm
//     )
//     .then(() => {
//       console.log("this worked!");
//     })
//     .catch((error) => {
//       console.error("it failed...", error);
//     });
// });


function contact(event) {
    event.preventDefault ();
    // emailjs
    // .sendForm(
    //     'service_fr3vq0s',
    //     'template_91wrldd',
    //     event.target,
    //     'KJXHaU6B8Zzu04vLT'
    // ).then(() => {
    //     console.log('this worked1')
    // })
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible" 
    setTimeout(() => {
        loading.classList.remove("modal__overlay--visible" )
        success.classList += " modal__overlay--visible";
        console.log('it worked1')
    }, 1000);
}

