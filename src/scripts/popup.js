var scanButton = document.getElementById('scanButton');
var isActive = false;
const toggleButton = require('./utils/toggleButton.js');

toggleButton(scanButton);
scanButton.addEventListener('click', (e) => {
  toggleButton(scanButton);
  // script de scaneo
});
