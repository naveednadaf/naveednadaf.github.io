const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const contact__btn = document.querySelector('.contact__btn');
const popup = document.querySelector('.popup');
const closeButton = document.getElementById('close-button');
const textToCopy = 'nnn.ds2016@gmail.com';



contact__btn.addEventListener('click', function(event) {
  // Create a hidden textarea element
  const textarea = document.createElement('textarea');
  textarea.style.position = 'fixed';
  textarea.style.top = '0';
  textarea.style.left = '0';
  textarea.style.width = '1px';
  textarea.style.height = '1px';
  textarea.style.padding = '0';
  textarea.style.border = 'none';
  textarea.style.outline = 'none';
  textarea.style.boxShadow = 'none';
  textarea.style.background = 'transparent';
  textarea.value = textToCopy;
  document.body.appendChild(textarea);


  // Select the text
  textarea.select();

  // Copy the text
  document.execCommand('copy');

  // Remove the textarea element
  document.body.removeChild(textarea);
});

contact__btn.addEventListener('click' , ()  => {
    popup.showModal();
});

closeButton.addEventListener('click' , ()  => {
    popup.close();
});

