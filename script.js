// Scroll-to-top button
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// this is for my form submission 

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("success-message");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      })
        .then(response => {
          if (response.ok) {
            successMsg.style.display = "block";
            form.reset();
          } else {
            alert("Oops! There was a problem submitting your form.");
          }
        })
        .catch(() => {
          alert("Oops! Something went wrong.");
        });
    });
  }
});
