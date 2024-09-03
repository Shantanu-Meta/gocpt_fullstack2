import { setupPasswordToggle } from "./passwordtoggle.js";
document.addEventListener('DOMContentLoaded', function() {
  setupPasswordToggle('togglePassword', 'password','toggleConfirmPassword','confirm-password');
  if(localStorage.getItem("user_token")){
    window.location.href='/home'
  alert("Already signed up");
}
}); 
// Function to handle the sign-up process
async function signUp(userDetails) {
  try {
    const response = await axios.post('https://www.gocpt.ai/api/v1/user/signup', userDetails);

  alert("Please verify email and signin")
  }
  catch(error){
    if(error.response.status==411)
      alert("Already account created. Please login.")
  }
}


// Event listener for form submission
document.getElementById('login-page').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const password = document.getElementById('password').value;
  const confirmpassword=document.getElementById('confirm-password').value
  const nameParts = name.trim().split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');
  const userDetails = {
    email,
    firstName,
    lastName,
    password,
  };
  if(password===confirmpassword)
   signUp(userDetails);
  else
  alert("Mismatch of password and confirm password")
});
