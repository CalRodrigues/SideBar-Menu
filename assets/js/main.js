const showMenu = (toggledId, navbarId, bodyId) => {
  const toggle = document.getElementById(toggledId),
  navbar = document.getElementById(navbarId),
  bodypadding = document.getElementById(bodyId)

  if(toggle && navbar) {
    toggle.addEventListener('click', () => {
      navbar.classList.toggle('show')
      toggle.classList.toggle('rotate')
      bodypadding.classList.toggle('expander')
    })
  }
}
showMenu ('nav-toggle','navbar','body');

const linkColor = document.querySelectorAll('.nav__link');
function colorLink() {
  linkColor.forEach(l => l.classList.remove('active'));
  this.classList.add('active');
}

linkColor.forEach(l => l.addEventListener('click', colorLink));