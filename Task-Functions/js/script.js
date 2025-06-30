var users = [];

var numberOfUser = () => {
    var num = prompt("Enter Number Of New Users: "); 

    for (var i = 0; i < num; i++) {  
        addUser();
    }

    console.log(users); 
}



var addUser = () => {
    var id = prompt("Enter The Id: ").trim();

    if (users.find(user => user.id === id)) {
        console.log("The user already exists.");
        return;
    }

    var n = prompt("Enter The Name: ");

    var sal = prompt("Enter The Salary: ");

    users.push({
        id: id,
        name: n,
        salary: sal
    });

    
};




var editUserBalanceById = (id) => {
    var index = users.findIndex(user => user.id == id);

    if (index !== -1) {
        var newSalary = prompt("Enter The New Salary: ");
        users[index].salary = newSalary;
        console.log("Salary updated successfully.");
    } else {
        console.log("User not found.");
    }
};



var deleteUserById = (id) => {
    var index = users.findIndex(user => user.id == id);

    if (index !== -1) {
        users.splice(index, 1); 
        console.log("User deleted successfully.");
    } else {
        console.log("User not found.");
    }
};


numberOfUser(); 

var i = prompt("Enter id to update balance : ")
editUserBalanceById(i);

var ii = prompt("Enter user to delete: ")
deleteUserById(ii)



console.table(users)