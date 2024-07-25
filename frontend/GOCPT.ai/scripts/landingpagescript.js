document.addEventListener('DOMContentLoaded', function() {
    var hamburgerIcon = document.getElementById('hamburgerIcon');
    var mobileMenu = document.getElementById('mobileMenu');
    var navLinks = document.querySelectorAll('.nav-links a');

    hamburgerIcon.addEventListener('click', function() {
        if (mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
            hamburgerIcon.src = '../assets/hamburger.svg';
        } else {
            mobileMenu.classList.add('open');
            hamburgerIcon.src = '../assets/cross.svg';
        }
        
    });

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });

            if (window.innerWidth < 768) {
                mobileMenu.classList.remove('open');
                hamburgerIcon.src = '../assets/hamburger.svg';
            }
        });
    });
});

function sendMail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var subject = "Inquiry regarding GoCPT";
    var body = "Dear GoCPT Team,%0D%0A%0D%0A" +
               "I am writing to inquire about GoCPT. Please find my details below:%0D%0A%0D%0A" +
               "Name: " + name + "%0D%0A" +
               "Email: " + email + "%0D%0A%0D%0A" +
               "Company Address: " + address + "%0D%0A%0D%0A" +
               "Message:%0D%0A" + message + "%0D%0A%0D%0A" +
               "Regards,%0D%0A" + name;
    
    window.location.href = "mailto:info@gocpt.ai?subject=" + subject + "&body=" + body;
}


function toggleAnswer(id) {
    var answer = document.getElementById('answer-' + id);
    if (answer.classList.contains('active')) {
        answer.classList.remove('active');
    } else {
        answer.classList.add('active');
    }
}
