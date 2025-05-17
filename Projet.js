console.log("Animations actives");
document.querySelector('.buttons button').addEventListener('click', function(){
    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
});
let skillsAnimated = false;

window.addEventListener('scroll', () => {
  const skillsSection = document.querySelector('.skills');
  const rect = skillsSection.getBoundingClientRect();

  if (!skillsAnimated && rect.top < window.innerHeight - 100) {
    const fillWeb = document.querySelector('.fill-web');
    const fillBranding = document.querySelector('.fill-branding');
    const fillDev = document.querySelector('.fill-dev');

    fillWeb.style.width = "95%";
    fillWeb.style.opacity = "1";

    fillBranding.style.width = "80%";
    fillBranding.style.opacity = "1";

    fillDev.style.width = "90%";
    fillDev.style.opacity = "1";

    skillsAnimated = true;
  }
});