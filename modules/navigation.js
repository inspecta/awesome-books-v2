const singePageNavigation = () => {
  const homePageSection = document.getElementById('home-page');
  const addPageSection = document.getElementById('add-page');
  const contactPageSection = document.getElementById('contact-page');

  const linksBtn = document.getElementById('lists');
  const addBookBtn = document.getElementById('add-link');
  const contactBtn = document.getElementById('contact');

  linksBtn.addEventListener('click', () => {
    addPageSection.style.display = 'none';
    contactPageSection.style.display = 'none';
    homePageSection.style.display = 'block';

    linksBtn.classList.add('active');
    addBookBtn.classList.remove('active');
    contactBtn.classList.remove('active');
  });

  addBookBtn.addEventListener('click', () => {
    homePageSection.style.display = 'none';
    contactPageSection.style.display = 'none';
    addPageSection.style.display = 'block';

    linksBtn.classList.remove('active');
    addBookBtn.classList.add('active');
    contactBtn.classList.remove('active');
  });

  contactBtn.addEventListener('click', () => {
    addPageSection.style.display = 'none';
    homePageSection.style.display = 'none';
    contactPageSection.style.display = 'block';

    linksBtn.classList.remove('active');
    contactBtn.classList.add('active');
    addBookBtn.classList.remove('active');
  });

  window.addEventListener('DOMContentLoaded', () => {
    addPageSection.style.display = 'none';
    contactPageSection.style.display = 'none';
    homePageSection.style.display = 'block';
  });
};

export default singePageNavigation;
