// Open YouTube link in new tab
const subjects = document.querySelectorAll('.subject');

subjects.forEach(subject => {
  subject.addEventListener('click', () => {
    const url = subject.dataset.url;
    window.open(url, '_blank');
  });
});
