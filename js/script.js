// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    let menuicon = document.querySelector('.bx-menu');
    let navbar = document.querySelector('.navbar');
    let animatedSections = new Set();
    const homeSection = document.getElementById('home');
    const contactForm = document.getElementById('contact-form'); // Set to keep track of animated sections

    // const toggle = document.getElementById('toggleLight');
    // toggle.addEventListener('click', function () {
    //     this.classList.toggle('bxs-sun');
    //     // this.classList.toggle('bxs-moon');
    // });

    const toggle = document.getElementById('toggleLight');
    const body = document.querySelector('body');
    
    toggle.addEventListener('click', function () {
      // Check the current color theme
      const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
    
      // Toggle the color theme
      if (currentTheme === 'light') {
        // Change to dark theme
        document.documentElement.style.setProperty('--bg-color', '#f2f2f2');
        document.documentElement.style.setProperty('--second-bg-color', '#ffffff');
        document.documentElement.style.setProperty('--text-color', '#333');
        document.documentElement.style.setProperty('--main-color', '#007bff');
        // body.style.background = 'url(../images/img1.jpg)';
        homeSection.style.background  = 'url("../images/img1.jpg")';
        this.className = 'bx bxs-sun'; // Set the icon class directly
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
      } else {
        // Change to light theme
        document.documentElement.style.setProperty('--bg-color', '#081b29');
        document.documentElement.style.setProperty('--second-bg-color', '#112e42');
        document.documentElement.style.setProperty('--text-color', '#ededed');
        document.documentElement.style.setProperty('--main-color', '#00abf0');
       // body.style.background = 'url("../images/img3.jpg)';
        homeSection.style.background  = 'url("../images/img1.jpg")';
        this.className = 'bx bxs-moon'; // Set the icon class directly
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
      }
    });
    


    

    menuicon.onclick = () => {
        menuicon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.addEventListener('scroll', () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height && !animatedSections.has(id)) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');

                sec.classList.add('show-animate');
                animatedSections.add(id); // Mark the section as animated
            } else if (top < offset || top > offset + height) {
                // Remove the section from the set if it's no longer in view
                animatedSections.delete(id);
            }
        });

        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        menuicon.classList.remove('bx-x');
        navbar.classList.remove('active');

        let footer = document.querySelector('footer');
        footer.classList.toggle('show-animate', window.innerHeight + window.scrollY >= document.body.scrollHeight);
    });

    contactForm.addEventListener('submit', (e) => {
        const fullName = contactForm.querySelector('input[name="Full Name"]').value;
        const contactNo = contactForm.querySelector('input[name="Contact No"]').value;
        const subject = contactForm.querySelector('input[name="Subject"]').value;
        const message = contactForm.querySelector('textarea[name="Message"]').value;
    
        // Validation checks
        if (fullName.length < 5) {
          alert('Full Name must be at least 5 characters long.');
          e.preventDefault(); // Prevent form submission
        }
        
        if (contactNo.length < 10) {
          alert('Contact No must be at least 10 digits long.');
          e.preventDefault();
        }
    
        if (subject.length < 5) {
          alert('Subject must be at least 5 characters long.');
          e.preventDefault();
        }
    
        if (message.split(' ').filter(Boolean).length < 5) {
          alert('Message must contain at least 5 words.');
          e.preventDefault();
        }
      });
});
