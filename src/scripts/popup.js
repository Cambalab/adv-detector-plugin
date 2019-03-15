var scanButton = document.getElementById('scanButton');
var isActive = false;
isActive ? scanButton.innerHTML = 'Desactivar' : scanButton.innerHTML = 'Activar';
isActive = !isActive;
scanButton.addEventListener('click', (e) => {
  isActive ? scanButton.innerHTML = 'Desactivar' : scanButton.innerHTML = 'Activar';
  isActive ? scanButton.className = 'btn btn-danger' : scanButton.className = 'btn btn-success';
  isActive = !isActive;
  // script de scaneo
});
