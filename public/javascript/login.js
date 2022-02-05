async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert("Invalid credentials");
      }
    }
  }
  
  async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
        const response = await fetch('/api/users', {
          method: 'post',
          body: JSON.stringify({
            username,
            email,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        });
        // check the response status
if (response.ok) {
  document.location.replace('/dashboard');
  } else {
    alert("Email or Username already in use e/or password must cointain less than 4 characters ");
  }
}
}
const signupButton = document.querySelector('#signup');
    const loginForm = document.querySelector('#logindiv');
    const signupForm = document.querySelector('#signupdiv');
    const loginButton = document.querySelector('#login')

    signupButton.onclick = function(){
     signupForm.style.display = "block";
     loginForm.style.display = "none";
    }

    loginButton.onclick = function(){
      document.location.replace('/login');
     }

    

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
  
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);