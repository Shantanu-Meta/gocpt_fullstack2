import { setupPasswordToggle } from "./passwordtoggle.js";
document.addEventListener('DOMContentLoaded', function() {

  setupPasswordToggle('togglePassword', 'password','toggleConfirmPassword','confirm-password');
}); 
async function resetPassword(userDetails) {
    const token = window.location.pathname.split('/').pop();
    try {
      const response = await axios.put(`http://localhost:3000/api/v1/user/reset/${token}`,userDetails);
      alert("Reset successful");

    } catch (error) {
      console.log(error)
      console.log(token)
    } 
  }
  document.getElementById('reset-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const confirmpassword =document.getElementById('confirm-password').value
    const userDetails = {
      password
    };
    if(password===confirmpassword)
  {  
    resetPassword(userDetails)
  window.location.href = "/login";
}
  else
    alert("Mismatch") 
  });
