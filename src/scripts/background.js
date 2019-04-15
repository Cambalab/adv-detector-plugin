import ext from "./utils/ext";

var observe = false;

navigator.geolocation.getCurrentPosition(function(position) {
  //do_something(position.coords.latitude, position.coords.longitude);
  console.log(position)
})

function handleMessage(request, sender, sendResponse) {
  console.log("Message from the content script REQUEST: ", request);
  fetch('http://localhost:3030/advertising', {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: 'post',
    body: JSON.stringify(request)
  }).then(function(response) {
    // return response.json();
    console.log("ADVER RESPONSE: ", response)
  // }).then(function(data) {
    // ChromeSamples.log('Created Gist:', data.html_url);
  });
  // sendResponse({response: "Response from background script"});
}

ext.browserAction.onClicked.addListener(function(){
  console.log("CLICKEDDDD")
  console.log("OBSERVE: ", observe)
  console.log(browser)
  observe = !observe

  if (observe) {
    ext.browserAction.setIcon({"path": "icons/icon-active.png"})
  } else {
    ext.browserAction.setIcon({"path": "icons/icon.png"})
  }

  ext.tabs.query({active: true, currentWindow: true}, function(tabs) {
    ext.tabs.sendMessage(tabs[0].id, {observe: observe}, function(response) {
      console.log(response);
    });
  });

})

ext.runtime.onMessage.addListener(handleMessage)
