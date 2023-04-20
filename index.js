const loginForm = document.querySelector('#form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const signupBtn = document.querySelector('#signup-btn');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'todo.html';
    } else {
        alert('Invalid username or password');
    }
});

signupBtn.addEventListener('click', () => {
    window.location.href = 'signup.html';
});
