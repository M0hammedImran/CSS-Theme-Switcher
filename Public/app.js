const lightBtn = document.querySelector('#light');
const darkBtn = document.querySelector('#dark');

const body = document.body;

// Event Handlers
const theme = localStorage.getItem('theme');
if (theme) {
  body.classList.remove('light');
  body.classList.add(theme);
}

darkBtn.onclick = () => {
  body.classList.remove('light');
  body.classList.add('dark');
  localStorage.setItem('theme', 'dark');
};
lightBtn.onclick = () => {
  body.classList.remove('dark');
  body.classList.add('light');
  localStorage.setItem('theme', 'light');
};
