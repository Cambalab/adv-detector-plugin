import ext from "./utils/ext"
const sha256 = require('crypto-js/sha256')
const hex = require('crypto-js/enc-hex')

var accounts = [
  {
    name: "PCDiscount",
    page_id: "171423946206329",
    page_name: "https://www.facebook.com/pcdiscount.com.ar/posts/"
  },
  {
    name: "Tuenti",
    page_id: "504460039641759",
    page_name: "https://www.facebook.com/TuentiArgentina/posts/"
  },
  {
    name: "MercadoSitio",
    page_id: "1378535879045039",
    page_name: "https://www.facebook.com/mercadositio/posts/"
  },
  {
    name: "Dreamland",
    page_id: "122106381199030",
    page_name: "https://www.facebook.com/dreamlandcomputacion/"
  },
  {
    name: "Hacktown",
    page_id: "1689505504597198",
    page_name: "https://www.facebook.com/hacktownfest/"
  },
  {
    name: "Necxus",
    page_id: "108471585883916",
    page_name: "https://www.facebook.com/necxus.ok/"
  },
  {
    name: "MotorolaInAR",
    page_id: "101556936588074",
    page_name: "https://www.facebook.com/MotorolaInAR/"
  },
  {
    name: "Dafiti",
    page_id: "172289799523590",
    page_name: "https://www.facebook.com/dafitiarg/"
  }
]

var container = document.querySelector("#topnews_main_stream_408239535924329")

var profile = document.querySelector('a[title="Perfil"]')
var id = sha256(profile.href).toString(hex)

var publi = 'Publicidad'
// var publi = '<div class="w_14f59byli_"><div class="i_14f59bv8v1 w_14f59c058l">Pu</div><div class="i_14f59bv8v1 l_14f59bv8vc">Pu</div><div class="i_14f59bv8v1 v_14f59bxa-y">P</div><div class="i_14f59bv8v1 w_14f59c058l">bli</div><div class="i_14f59bv8v1 l_14f59bv8vc">bli</div><div class="i_14f59bv8v1 v_14f59bxa-y">P</div><div class="i_14f59bv8v1 w_14f59c058l">ci</div><div class="i_14f59bv8v1 l_14f59bv8vc">ci</div><div class="i_14f59bv8v1 v_14f59bxa-y">P</div><div class="i_14f59bv8v1 w_14f59c058l">dad</div><div class="i_14f59bv8v1 l_14f59bv8vc">dad</div><div class="i_14f59bv8v1 v_14f59bxa-y">P</div><div class="i_14f59bv8v1 v_14f59bxa-y">PP</div></div>'

// console.log("DOCUMENT: ", document)
console.log("CONTAINER: ", container)
console.log("ID_PROFILE: ", id)

var mutationConfig = {
  attributes: true,
  childList: true,
  subtree: true,
  characterData: true,
  characterDataOldValue: true
}

console.log(container)

function strip(html) {
  var tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

var onMutate = function(mutationsList) {
  mutationsList.forEach(mutation => {
    if (mutation.type === "childList") {
      if (mutation.target.id.startsWith("hyperfeed_story_id_")) {
        // var pubElement = mutation.target.querySelector("[id^='feed_subtitle']").outerHTML
        var pubElement = mutation.target.querySelector("[id^='fe_edsubtitle']").outerHTML
        console.log("PUBELEM: ", pubElement)
        var ppuubb = strip(pubElement.replace(/-/g, ''))
        console.log("PUB: ", ppuubb)
        // if (mutation.target.classList.contains('sponsored_ad') && mutation.target.outerHTML.includes(publi)) {
        if (ppuubb.includes(publi)) {
          // console.log("MUTATION: ", mutation)
          console.log("---- PUBLICIDAD!!! ----")
          //add blue border to identify ad
          mutation.target.style.border = "3px solid #0000FF";
          // let account = accounts.filter( (account) => {
          //     return mutation.target.outerHTML.includes(account.page_id) && mutation.target.outerHTML.includes(account.page_name)
          // })

          // console.log("ACCOUNT BEFORE LENGTH: ", account)

          // if (account.length === 1) {
            console.log("---- TARGET ----")
            // console.log("ACCOUNT: ", account)
            //add red border to identify target ad
            mutation.target.style.border = "3px solid #FF0000";
            let data = {
              postLinkId: mutation.target.querySelector("[name=ft_ent_identifier]").value,
              // account_id: account[0].page_id,
              // account_name: account[0].page_name
            }
            console.log("DATA: ", data)
            //send data to our service
            browser.runtime.sendMessage(data)
          // }
        }
      }
    }
  })
}

var observer = new MutationObserver(onMutate)
observer.observe(container, mutationConfig)

// ext.runtime.onMessage.addListener(handleMessage);
