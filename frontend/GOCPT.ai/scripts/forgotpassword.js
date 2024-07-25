async function signUp(userDetails) {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/user/forgot', userDetails);
      
      alert("Please check your email for forgot password")
    }
    catch(error){
      if(error.response.status==404){
        alert("Incorrect email")
      }
    }
  }
  document.getElementById('forgot-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    
    const userDetails = {
      email
    };
  
    signUp(userDetails);
  });