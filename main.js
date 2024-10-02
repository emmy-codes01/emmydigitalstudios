// TYPING EFFECT
// class TypingEffect {
//     constructor(element, words, typingSpeed = 100, erasingSpeed = 50, pauseDuration = 2000) {
//         this.element = element;
//         this.words = words;
//         this.typingSpeed = typingSpeed;
//         this.erasingSpeed = erasingSpeed;
//         this.pauseDuration = pauseDuration;
//         this.wordIndex = 0;
//         this.isDeleting = false;
//         this.text = '';
//         this.tick();
//     }

//     tick() {
//         const currentWord = this.words[this.wordIndex];
//         if (this.isDeleting) {
//             this.text = currentWord.substring(0, this.text.length - 1);
//         } else {
//             this.text = currentWord.substring(0, this.text.length + 1);
//         }

//         this.element.textContent = this.text;

//         let speed = this.isDeleting ? this.erasingSpeed : this.typingSpeed;

//         if (!this.isDeleting && this.text === currentWord) {
//             speed = this.pauseDuration;
//             this.isDeleting = true;
//         } else if (this.isDeleting && this.text === '') {
//             this.isDeleting = false;
//             this.wordIndex = (this.wordIndex + 1) % this.words.length;
//         }

//         setTimeout(() => this.tick(), speed);
//     }
// }

// // Initialize the typing effect
// const typingElement = document.querySelector('.typing-text');
// const words = ['creative & innovative solutions', 'Expert Website Development', 'Logo / Brand Identity Designs'];
// new TypingEffect(typingElement, words);










// Scroll reveal

  // Initialize ScrollReveal
  ScrollReveal().reveal('.reveal', {
    distance: '50px',    // Distance the element moves
    origin: 'left',    // Animation direction (bottom, top, left, right)
    duration: 1000,      // Animation duration in milliseconds
    delay: 200,          // Delay before the animation starts
    easing: 'ease-in-out', // Easing function for the animation
    reset: true          // Reset animation when element goes out of view
  });

  ScrollReveal().reveal('.revealimg', {
    distance: '50px',    // Distance the element moves
    origin: 'bottom',    // Animation direction (bottom, top, left, right)
    duration: 1000,      // Animation duration in milliseconds
    delay: 300,          // Delay before the animation starts
    easing: 'ease-in-out', // Easing function for the animation
    reset: true          // Reset animation when element goes out of view
  });

  ScrollReveal().reveal('.digitalpartner', {
    distance: '50px',    // Distance the element moves
    origin: 'top',    // Animation direction (bottom, top, left, right)
    duration: 1000,      // Animation duration in milliseconds
    delay: 200,          // Delay before the animation starts
    easing: 'ease-in-out', // Easing function for the animation
    reset: true          // Reset animation when element goes out of view
  });



//Dropdown Menu
  
// function myFunction() {
//     var x = document.getElementById("drop");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }
function myFunction() {
    var x = document.getElementById("drop");
    var menuIcon = document.getElementById("menuIcon").firstElementChild;
    var menuContainer = document.getElementById("menuIcon");

    if (x.style.display === "block") {
        // Animate to the menu icon (closing)
        menuContainer.classList.add('animate-menu');

        setTimeout(function () {
            menuIcon.classList.remove('bx-x'); // Remove the close icon
            menuIcon.classList.add('bx-menu-alt-right'); // Add the menu icon
            menuContainer.classList.remove('animate-menu');
        }, 400); // Match the animation duration

        x.style.display = "none";
    } else {
        // Animate to the close icon (opening)
        menuContainer.classList.add('animate-close');

        setTimeout(function () {
            menuIcon.classList.remove('bx-menu-alt-right'); // Remove the menu icon
            menuIcon.classList.add('bx-x'); // Add the close icon
            menuContainer.classList.remove('animate-close');
        }, 400); // Match the animation duration

        x.style.display = "block";
    }
}
