export function setupPasswordToggle(togglePasswordId, passwordInputId,toggleConfirmPasswordId=null,confirmpasswordInputId=null) {
    const togglePassword = document.getElementById(togglePasswordId);
    const passwordInput = document.getElementById(passwordInputId);
    if (!togglePassword || !passwordInput) {
        console.error('Toggle password element or password input element not found.');
        return;
    }

    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        if (type === 'password') {
            togglePassword.setAttribute('src', '../assets/eyeclosed.svg');
        } else {
            togglePassword.setAttribute('src', '../assets/eyeopen.svg');
        }
    });
    if(toggleConfirmPasswordId!=null || confirmpasswordInputId!=null){
        const toggleConfirmPassword = document.getElementById(toggleConfirmPasswordId);
        const confirmpasswordInput = document.getElementById(confirmpasswordInputId);
        toggleConfirmPassword.addEventListener('click', function() {
            const type = confirmpasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            confirmpasswordInput.setAttribute('type', type);
    
            if (type === 'password') {
                toggleConfirmPassword.setAttribute('src', '../assets/eyeclosed.svg');
            } else {
                toggleConfirmPassword.setAttribute('src', '../assets/eyeopen.svg');
            }
        });
    }
}
