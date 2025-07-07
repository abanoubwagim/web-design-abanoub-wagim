$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1 
    },
    768: {
      items: 2 
    },
    1200: {
      items: 2 
    }
  },
  navText: [
    '<i class="fa-solid fa-arrow-left arrow-btn rounded"></i>',
    '<i class="fa-solid fa-arrow-right arrow-btn rounded"></i>'
  ]
});



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





function animateCounter(element, start, end, duration) {
  let startTimestamp = null;
  var step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    var progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}



document.addEventListener("DOMContentLoaded", () => {
  var counter = document.getElementById("counterEigh");

  var observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(counter, 0, 8000, 2000);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  if (counter) {
    observer.observe(counter);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  var counter = document.getElementById("counterTwi");

  var observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(counter, 0, 2000, 2000);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  if (counter) {
    observer.observe(counter);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  var counter = document.getElementById("counterEighTe");

  var observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(counter, 0, 810, 2000);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  if (counter) {
    observer.observe(counter);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  var counter = document.getElementById("counterTe");

  var observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(counter, 0, 20, 2000);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  if (counter) {
    observer.observe(counter);
  }
});


