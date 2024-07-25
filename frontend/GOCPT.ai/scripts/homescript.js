document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const sideMenu = document.getElementById('side-menu');
    const profileIcon = document.querySelector('.profile-icon');
    const fileUpload = document.getElementById('file-upload');
    const fileUploadLabelSpan = document.querySelector('.file-upload-label span');

    menuIcon.addEventListener('click', function() {
        sideMenu.classList.add('opened');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    });

    closeIcon.addEventListener('click', function() {
        sideMenu.classList.remove('opened');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    });

    profileIcon.addEventListener('click', function() {
        window.location.href = '/profile'; // Replace with the actual URL of the profile page
    });

    fileUpload.addEventListener('change', function() {
        if (fileUpload.files.length > 0) {
            fileUploadLabelSpan.textContent = fileUpload.files[0].name;
        }
    });
    
});

