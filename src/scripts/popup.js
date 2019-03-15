var scanButton = document.getElementById('scanButton');
var isActive = false;
isActive ? scanButton.innerHTML = 'Desactivar' : scanButton.innerHTML = 'Activar';
isActive = !isActive;
scanButton.addEventListener('click', (e) => {
  isActive ? scanButton.innerHTML = 'Desactivar' : scanButton.innerHTML = 'Activar';
  isActive ? scanButton.className = 'btn btn-danger btn-lg btn-block' : scanButton.className = 'btn btn-success btn-lg btn-block';
  isActive = !isActive;
  // script de scaneo
  !isActive ? alert('Activaste el plugin') : alert('Desastivaste el plugin');
});
