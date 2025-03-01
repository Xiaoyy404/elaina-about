const cursor = document.querySelector('.cursor');
const links = document.querySelectorAll('a');
const cards = document.querySelectorAll('.project-card');
const skillTags = document.querySelectorAll('.skill-tag');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

document.addEventListener('click', () => {
  cursor.classList.add('clicked');
  setTimeout(() => {
    cursor.classList.remove('clicked');
  }, 200);
});

const addHoverEffect = (elements) => {
  elements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursor.style.borderColor = 'rgba(100, 255, 218, 0.8)';
    });

    element.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.borderColor = 'rgb(100, 255, 218)';
    });
  });
};

/*





OWNER: BY FAUZIALIFATAH
AKU PEMULAH MANA BISA KEK KALIAN

SOSMED:
YOUTUBE: https://www.youtube.com/@Fauzialifatah
SALURAN INFORMASI: https://whatsapp.com/channel/0029VawsCnQ9mrGkOuburC1z





*/
addHoverEffect(links);
addHoverEffect(cards);
addHoverEffect(skillTags);

// Add scroll reveal animation
const revealElements = document.querySelectorAll('section');
const aboutImage = document.querySelector('.about-image');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.8;

  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
      
      if (element.classList.contains('about')) {
        aboutImage.classList.add('animate');
      }
    }
  });
};
/*





OWNER: BY FAUZIALIFATAH
AKU PEMULAH MANA BISA KEK KALIAN

SOSMED:
YOUTUBE: https://www.youtube.com/@Fauzialifatah
SALURAN INFORMASI: https://whatsapp.com/channel/0029VawsCnQ9mrGkOuburC1z





*/
revealElements.forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'all 0.6s ease';
});
window.addEventListener('scroll', revealOnScroll);
/*





OWNER: BY FAUZIALIFATAH
AKU PEMULAH MANA BISA KEK KALIAN

SOSMED:
YOUTUBE: https://www.youtube.com/@Fauzialifatah
SALURAN INFORMASI: https://whatsapp.com/channel/0029VawsCnQ9mrGkOuburC1z





*/
revealOnScroll();