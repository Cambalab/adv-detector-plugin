var scanButton = document.getElementById('scanButton');
// var isActive = false;
const toggleButton = require('./utils/toggleButton.js');
// const scanner = require('./scanner')

toggleButton(scanButton);
scanButton.addEventListener('click', (e) => {
  toggleButton(scanButton);
  // script de scaneo
  // scanner.scan()
});
