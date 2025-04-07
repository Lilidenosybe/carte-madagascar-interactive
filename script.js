document.getElementById('toggle-mouillages').addEventListener('click', () => {
  const mouillages = document.getElementById('mouillages');
  if (mouillages) {
    const isHidden = mouillages.style.display === 'none';
    mouillages.style.display = isHidden ? 'inline' : 'none';
  }
});

document.getElementById('reset-view').addEventListener('click', () => {
  // À personnaliser avec pan/zoom reset si lib utilisée
  window.location.reload();
});