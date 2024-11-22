const validUsername = "producer283"; 
const validPassword = "283tsubasa"; 

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    
    const isValidPredefined = (username === validUsername && password === validPassword);
    const isValidRegistered = registeredUsers.some(user => 
        user.username === username && user.password === password
    );

    if (isValidPredefined || isValidRegistered) {
        window.location.href = "pages/menu.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

function registerUser() {
    const username = document.getElementById("new-username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return;
    }

    if (username.length < 4) {
        alert("Username must be at least 4 characters long!");
        return;
    }

    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    if (registeredUsers.some(user => user.username === username)) {
        alert("Username already exists! Please choose another one.");
        return;
    }

    if (registeredUsers.some(user => user.email === email)) {
        alert("Email already registered! Please use another email address.");
        return;
    }

    registeredUsers.push({
        username: username,
        email: email,
        password: password
    });

    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    alert("Registration successful! Please login with your new account.");
    window.location.href = "../index.html";
}