function onScroll() {
    if (scrollY > 0) {
      document.querySelector('header').style.backgroundColor = 'rgb(34, 34, 34)'
    } else {
      document.querySelector('header').style.backgroundColor = ''
    }
  }
  
  window.sr = ScrollReveal({ reset: true});
  
  sr.reveal('.wrapp-content', {duration: 1500})
  sr.reveal('.image-profile', { duration:2000})
  sr.reveal('.wrapp-contain', { duration: 1500})
  sr.reveal('.skills-c', { duration: 1500})
  sr.reveal('.skills-c', { duration: 1500})
  sr.reveal('.images-skills', { duration: 2000})
  sr.reveal('.learning', { duration: 1500})
  sr.reveal('.wrapp-images-bot', { duration: 1500})
  sr.reveal('#pro', { duration: 1500})
  sr.reveal('.projects-git', { duration: 2000})
  


  