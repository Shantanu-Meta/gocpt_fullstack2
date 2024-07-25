
import { setupPasswordToggle } from "./passwordtoggle.js";
document.addEventListener('DOMContentLoaded', function() {
  setupPasswordToggle('togglePassword', 'password');
});
async function signUp(userDetails) {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/user/signin', userDetails);
  localStorage.setItem("user_token",response.data.token)
  window.location.href = '/home';
}
  catch(error){
    if(error.response.status==404){
      alert("Check your email and password")
    }
  }
}


 if(localStorage.getItem("user_token")){
    window.location.href='/home'
  alert("Already signed in");
}

document.getElementById('login-page2').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const userDetails = {
    email,
    password
  };

  signUp(userDetails);
});
