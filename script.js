const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

document.querySelectorAll('.is-coming-soon').forEach((link) => {
  link.addEventListener('click', (event) => event.preventDefault());
});

document.querySelectorAll('.tooltip-trigger').forEach((trigger) => {
  const tooltip = document.getElementById(trigger.getAttribute('aria-describedby'));
  if (!tooltip) return;

  trigger.addEventListener('click', () => {
    const visible = tooltip.classList.toggle('is-visible');
    trigger.setAttribute('aria-expanded', String(visible));
  });

  trigger.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    tooltip.classList.remove('is-visible');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.blur();
  });
});
