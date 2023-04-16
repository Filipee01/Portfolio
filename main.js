function onScroll() {
  if (scrollY > 140) {
    document.querySelector('#top-buttonJs').classList.add('to-topp')
  } else {
    document.querySelector('#top-buttonJs').classList.remove('to-topp')
  }
}


window.sr = ScrollReveal({ reset: false});

sr.reveal('.wrapp-content', {duration: 1500})
sr.reveal('.image-profile', { rotate:{ x:0, y:80, z:-20 }, duration: 1500 })
sr.reveal('.wrapp-contain', { duration: 1500})
sr.reveal('.skills-c', { duration: 1500})
sr.reveal('.skills-c', { duration: 1500})
sr.reveal('.images-skills', { duration: 1500})
sr.reveal('.learning', { duration: 1500})
sr.reveal('.wrapp-images-bot', { duration: 1500})
sr.reveal('#pro', { duration: 1500})
sr.reveal('.projects-git', { duration: 1500})


const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('#init ul');

hamburgerMenu.addEventListener('click', () => {
navLinks.classList.toggle('show');
});

const links = document.querySelectorAll('#init ul li');
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});




