const container = document.querySelector("#topnews_main_stream_408239535924329")
const publi = '<div class="w_14f59byli_"><div class="i_14f59bv8v1 w_14f59c058l">Pu</div><div class="i_14f59bv8v1 l_14f59bv8vc">Pu</div><div class="i_14f59bv8v1 v_14f59bxa-y">P</div><div class="i_14f59bv8v1 w_14f59c058l">bli</div><div class="i_14f59bv8v1 l_14f59bv8vc">bli</div><div class="i_14f59bv8v1 v_14f59bxa-y">P</div><div class="i_14f59bv8v1 w_14f59c058l">ci</div><div class="i_14f59bv8v1 l_14f59bv8vc">ci</div><div class="i_14f59bv8v1 v_14f59bxa-y">P</div><div class="i_14f59bv8v1 w_14f59c058l">dad</div><div class="i_14f59bv8v1 l_14f59bv8vc">dad</div><div class="i_14f59bv8v1 v_14f59bxa-y">P</div><div class="i_14f59bv8v1 v_14f59bxa-y">PP</div></div>'

const mutationConfig = {
  attributes: false,
  childList: true,
  subtree: true,
  characterData: true,
  characterDataOldValue: true
}

var onMutate = function(mutationsList) {
  mutationsList.forEach(mutation => {
    if (mutation.type === "childList") {
      if (mutation.type === "childList") {
        if (mutation.target.id.startsWith("hyperfeed_story_id_")) {
          //console.log("ESTO ES UN POST!")
          //console.log(mutation.target)
          if (mutation.target.outerHTML.includes(publi_2)) {
            console.log("---- PUBLICIDAD!!! ----")
            console.log(mutation)
          }
        }
      }
    }
  })
}

var observer = new MutationObserver(onMutate)
console.log("SCANNER")
function scan(isActive) {
  console.log("ACTIVE: ", isActive)
  if (isActive) {
    observer.observe(container, mutationConfig)
  } else {
    observer.disconnect()
  }
}

module.exports = scan
