const form = document.getElementById("form");
const loginBtn = document.querySelector('#login-btn');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const passwordchk = document.getElementById("passwordchk");

  if (password != passwordchk.value) {
    alert("비밀번호가 일치하지 않습니다");
    passwordchk.focus();
    return;
  } else {
    localStorage.setItem('users', JSON.stringify([]));

    const user = {
      username: username,
      password: password
    };

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("회원가입이 완료되었습니다.");

    window.location.href = "index.html";

  }
});

loginBtn.addEventListener('click', () => {
  window.location.href = 'index.html';
});

