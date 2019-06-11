import ext from "./utils/ext"
import storage from "./utils/storage"
import config from '../config/config.js'

function handleMessage(request, sender, sendResponse) {
  storage.get("pub_elec_location", m => {
    var ad = {
      userId: request.userId,
      userSelectedLocation: m["pub_elec_location"],
      fbPostId: request.postId,
      fbAccountId: request.accountId,
      visualizedDate: request.visualizedDate
    }
    fetch(config.adUri, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'post',
      body: JSON.stringify(ad)
    }).then(function(response) {
      console.log("SENDING DATA SUCCESSFULLY")
    }).catch(function(response) {
      console.log("ERROR WHILE SENDING DATA")
    });
  })
}

ext.runtime.onMessage.addListener(handleMessage)
