import ext from "./utils/ext";
import storage from "./utils/storage";
import config from "../config/config.js"

const locations = config.locations

document.addEventListener("DOMContentLoaded", function(event) {
  var locationSelect = document.getElementById("location")

  storage.get("plugin_location", m => {
    for (var i = 0; i < locations.length; i++) {
      var opt = document.createElement("option")
      opt.setAttribute('value', locations[i]);
      opt.appendChild(document.createTextNode(locations[i]));

      if (m["plugin_location"] === locations[i]) {
        opt.selected = "selected"
      }

      locationSelect.appendChild(opt)
    }
  })

  locationSelect.addEventListener("change", function(e) {
    storage.set({plugin_location: e.target.value})
  })
})
