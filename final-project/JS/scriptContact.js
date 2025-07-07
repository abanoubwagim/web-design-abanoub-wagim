  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("send-btn").addEventListener("click", function () {
      setTimeout(validateForm, 500);
    });
  });

  function setRequiredError(errorId) {
    const el = document.getElementById(errorId);
    if (el) el.textContent = "The field is required.";
  }

  function validateForm() {
    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const subject = document.getElementById("subjectInput").value.trim();
    const message = document.getElementById("messageTextarea").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const subjectError = document.getElementById("subjectError");
    const messageError = document.getElementById("messageError");

    
    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";

    

    
    if (name === "") {
      setRequiredError("nameError");
    } else if (name.length < 4) {
      nameError.textContent = "Name must be at least 4 characters.";
    }

   
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      setRequiredError("emailError");
      hasError = true;
    } else if (!emailPattern.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
    }

    
    if (subject === "") {
      setRequiredError("subjectError");
    }

    
    if (message === "") {
      setRequiredError("messageError");
    }

    
  }

  var circle = document.getElementById('myCircle');


window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    circle.style.display = 'block';
  } else {
    circle.style.display = 'none';
  }
});


circle.addEventListener('click', function (e) {
  e.preventDefault(); 

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  this.classList.add('at-top');

  setTimeout(() => {
    this.classList.remove('at-top');
  }, 1000);
});


