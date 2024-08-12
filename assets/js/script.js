'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

//Greetings Hello in different languages
document.addEventListener('DOMContentLoaded', function() {
  const greetings = ['Hello!', 'Namaste!', 'Hola!', 'Bonjour!', 'Hallo!', 'Ciao!', 'ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ', 'こんにちは!', '안녕하세요!', '你好!', 'Привет!', 'مرحبا!',
    'Olá!', 'Hej!', 'Ahoj!', 'Merhaba!', 'Γειά σου!', 'שלום!', 'नमस्ते!', 'สวัสดี!', 'Selam!', 'Salut!'];
  const greetingElement = document.querySelector('.greeting');
  let index = 0;
  let charIndex = 0;
  let currentGreeting = greetings[index];

  function typeGreeting() {
    if (charIndex < currentGreeting.length) {
      greetingElement.textContent += currentGreeting.charAt(charIndex);
      charIndex++;
      setTimeout(typeGreeting, 100); // Typing speed
    } else {
      setTimeout(() => {
        greetingElement.classList.remove('fade-in');
        setTimeout(() => {
          greetingElement.textContent = '';
          greetingElement.classList.add('fade-in');
          index = (index + 1) % greetings.length;
          currentGreeting = greetings[index];
          charIndex = 0;
          typeGreeting();
        }, 500); // Time for fade-out effect
      }, 2000); // Time to display the full greeting
    }
  }

  typeGreeting();
});

// Form submit popup
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('[data-form]');
  const popup = document.createElement('div');
  popup.classList.add('popup');
  document.body.appendChild(popup);

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        popup.textContent = 'Thanks, The form was submitted successfully.';
        popup.classList.add('show');
        setTimeout(() => {
          popup.classList.remove('show');
        }, 5000);
        form.reset(); // Clear the form content
      } else {
        popup.textContent = 'Oops! There was a problem submitting your form.';
        popup.classList.add('show');
        setTimeout(() => {
          popup.classList.remove('show');
        }, 5000);
      }
    })
    .catch(error => {
      popup.textContent = 'Oops! There was a problem submitting your form.';
      popup.classList.add('show');
      setTimeout(() => {
        popup.classList.remove('show');
      }, 5000);
    });
  });
});