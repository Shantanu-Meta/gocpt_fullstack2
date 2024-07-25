let user
async function getDetails(){
    try{
        const response=await axios.get(
            'http://localhost:3000/api/v1/user/me',
            {
                headers:{
                    Authorization:"Bearer "+localStorage.getItem("user_token")
                }
            }

        )
        user= await response.data.user
        console.log(user)
        document.getElementById('name').textContent = user.firstName+" "+user.lastName;
        document.getElementById('email').textContent = user.email;
    }
    catch(error){
        console.log(error)
    }
}
async function changePassword(userPassword){
    try{
        const response=await axios.put(
            'http://localhost:3000/api/v1/user/update',
            userPassword,
            {
                headers:{
                    Authorization:"Bearer "+localStorage.getItem("user_token")
                }
            }

        )
        
       alert("Password is changed")
       localStorage.removeItem("user_token");
    window.location.href = "/login";
    }
    catch(error){
        console.log(error.data)
    }
}
document.addEventListener('DOMContentLoaded', async function() {
    await getDetails(); // Ensure getDetails is called and completes before accessing user
    // console.log(user);
});
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const sideMenu = document.getElementById('side-menu');
    const profileIcon = document.querySelector('#profile-icon');
    function toggleMenu() {
        sideMenu.classList.toggle('opened');
        if (sideMenu.classList.contains('opened')) {
            closeIcon.style.display = 'block';
        } else {
            closeIcon.style.display = 'none';
        }
    }
    menuIcon.addEventListener('click', toggleMenu);
    closeIcon.addEventListener('click', toggleMenu);
    document.getElementById('gcpu-submit').addEventListener('click', function(event) {
        // console.log(event)
        event.preventDefault();
        const password = document.getElementById('new-password').value;
        const confirmpassword= document.getElementById('confirm-password').value;
        // console.log(password)
        
        const userPassword = {
          password
        };
        if(password==confirmpassword)
        changePassword(userPassword)
    else
        alert("Mismatch")
      });
    
