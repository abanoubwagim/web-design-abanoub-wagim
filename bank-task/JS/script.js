
const body = document.getElementById("body");
const addBtn = document.getElementById("btnAdd");


let users = JSON.parse(localStorage.getItem("users")) || [];


showAllUsers();


function showAllUsers() {
    body.innerHTML = "";
    users.forEach(function (user) {
        addRow(user);
    });
}


function addRow(user) {
    const tr = document.createElement("tr");

    tr.innerHTML = `
    <td>${user.name}</td>
    <td>$${user.balance}</td>
    <td>${user.id}</td>
    <td>
      <button class="btn btn-danger btn-sm btnDelete">
        <i class="fas fa-trash"></i> Delete
      </button>
      <button class="btn btn-primary btn-sm btnEdit">
        <i class="fas fa-edit"></i> Edit Balance
      </button>
    </td>`;

    body.appendChild(tr);
}

let iid = 1
addBtn.addEventListener("click", function () {
    
    const newUser = {
        name: "Abanoub",
        balance: 1520,
        id: iid++
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    addRow(newUser);
});


body.addEventListener("click", function (e) {
    const row = e.target.closest("tr");
    const id = parseInt(row.children[2].textContent);


    if (e.target.closest(".btnDelete")) {
        users = users.filter(function (user) {
            return user.id !== id;
        });

        localStorage.setItem("users", JSON.stringify(users));
        showAllUsers();
    }


    if (e.target.closest(".btnEdit")) {
        const user = users.find(function (u) {
            return u.id === id;
        });

        let newBalance = prompt("Enter new balance:", user.balance);

        if (newBalance !== null && !isNaN(newBalance)) {
            user.balance = parseFloat(newBalance);
            localStorage.setItem("users", JSON.stringify(users));
            showAllUsers();
        }
    }
});
