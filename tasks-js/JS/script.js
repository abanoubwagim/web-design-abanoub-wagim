

var body = document.getElementById("body");
var addBtn = document.getElementById("btnAdd");


body.addEventListener("click", function (e) {
  if (e.target.classList.contains("btnEdit")) {
    var balanceCell = e.target.closest("tr").children[1];
    var newBalance = prompt("Enter new balance:", balanceCell.innerText.replace('$', ''));
    if (newBalance !== null) {
      balanceCell.innerText = `$${newBalance}`;
    }
  }

  if (e.target.classList.contains("btnDelete")) {
    if (confirm("Are you sure you want to delete this row?")) {
      e.target.closest("tr").remove();
    }
  }
});


addBtn.addEventListener("click", () => {
  var newTr = document.createElement("tr");

  newTr.innerHTML = `
      <td>Abanoub</td>
      <td>$1520</td>
      <td>125</td>
      <td>
        <button class="btn btn-danger btn-sm btnDelete"><i class="fas fa-trash"></i> Delete</button>
        <button class="btn btn-primary btn-sm btnEdit"><i class="fas fa-edit"></i> Edit Balance</button>
      </td>
    `;

  body.appendChild(newTr);
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
  var counter = document.getElementById("counterF");

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
  var counter = document.getElementById("counterT");

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
  var counter = document.getElementById("counterFi");

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
  var counter = document.getElementById("counterTw");

  var observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(counter, 0, 20, 1500);
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



var circle = document.getElementById('myCircle');


window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
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
