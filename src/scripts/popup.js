import ext from "./utils/ext";
import storage from "./utils/storage";
import config from "../config/config.js"

const locations = config.locations

document.addEventListener("DOMContentLoaded", function(event) {
  var locationSelect = document.getElementById("location")

  storage.get("pub_elec_location", m => {
    for (var i = 0; i < locations.length; i++) {
      var opt = document.createElement("option")
      opt.value = locations[i]
      opt.innerHTML = locations[i]

      if (m["pub_elec_location"] === locations[i]) {
        opt.selected = "selected"
      }

      locationSelect.appendChild(opt)
    }
  })

  locationSelect.addEventListener("change", function(e) {
    storage.set({pub_elec_location: e.target.value})
  })
})
