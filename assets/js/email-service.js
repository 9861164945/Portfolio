const contactForm = document.querySelector("[data-form]");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_ggep3cb",
    "template_2p9q6ii",
    contactForm
  )
  .then(() => {
    alert("Message Delivered Successfully ✅");
    contactForm.reset();
  })
  .catch((err) => {
    console.error(err);
    alert("Email failed ❌");
  });
});
