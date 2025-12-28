document.addEventListener("DOMContentLoaded", () => {
const contactForm = document.querySelector("[data-form]");

if (!contactForm) return;

contactForm.addEventListener("submit", function (e) {
e.preventDefault(); // ⛔ stops map jump

emailjs.sendForm(
"service_ggep3cb",
"template_2p9q6ii",
contactForm
)
.then(() => {
alert("Message sent successfully ✅");
contactForm.reset();
})
.catch((err) => {
console.error("EmailJS Error:", err);
alert("Email failed ❌");
});
});
});
