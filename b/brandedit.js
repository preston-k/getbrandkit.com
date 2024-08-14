const firebaseConfig = {
  apiKey: "AIzaSyC0NSMfRfdFGPhKsl0y1J_2Ad-T7eM225k",
  authDomain: "brandkit-1afe6.firebaseapp.com",
  projectId: "brandkit-1afe6",
  storageBucket: "brandkit-1afe6.appspot.com",
  messagingSenderId: "92568599474",
  appId: "1:92568599474:web:272bc21f1265dfe28c42ab"
}
firebase.initializeApp(firebaseConfig)
const database = firebase.database()

let opened = ''
document.querySelector('#assetview-download').addEventListener('click', () => {
  console.log('download img')
})

document.querySelector('#assetview-save').addEventListener('click', () => {
  console.log('save changes')

})
document.querySelector('#close-detailed').addEventListener('click', () => {
  document.querySelector('#asset-detailed-wrapper').style.display = 'none'
  opened = ''
})
const urlParams = new URLSearchParams(window.location.search)
const b = urlParams.get('b')
if (b == null || b == '') {
  document.querySelector('#non-existb').style.display = 'block'
}

if (b) {
  console.log(b)
}
let url = new URLSearchParams(window.location.search)
if (url.get('b') == '' || url.get('b') == null) {
  console.log(url)
  // window.location.replace('../brands.html')
}
let brand = url.get('b')
let addLogos = ''
console.log(brand)

function updateDetails(assetType) {

}
await database.ref(`brands/${brand}/logos/primary`).once('value').then(snapshot => {
  let data = snapshot.val()
  console.log(data.primary)
  addLogos += `<div class='asset-sample' id='${data.primary}'> <div class='assetcard-top'> <p class='assetcard-type'>Primary Logo</p> </div> <div class='asset-preview'> <img src='https://getbrandkit.s3.us-east-2.amazonaws.com/${data.primary}.png' class='imageasset-preview'> </div> </div>`
  document.querySelector('#brand-logos').innerHTML = addLogos
  document.querySelectorAll('.asset-sample').forEach(element => {
    element.addEventListener('click', () => {
      console.log(element.id)
      document.querySelector('#asset-detailed-wrapper').style.display = 'flex'
      document.querySelector('#assetview-img').src = `https://getbrandkit.s3.us-east-2.amazonaws.com/${element.id}.png`
      opened = element.id
      document.querySelector('#close-detailed').addEventListener('click', () => {
        document.querySelector('#asset-detailed-wrapper').style.display = 'none'
      })
    })
  })
})
await database.ref(`brands/${brand}/logos/favicon`).once('value').then(snapshot => {
  let data = snapshot.val()
  console.log(data.favicon)
  addLogos += `<div class='asset-sample' id='${data.favicon}'> <div class='assetcard-top'> <p class='assetcard-type'>Favicon</p> </div> <div class='asset-preview'> <img src='https://getbrandkit.s3.us-east-2.amazonaws.com/${data.favicon}.png' class='imageasset-preview'> </div> </div>`
  document.querySelector('#brand-logos').innerHTML = addLogos
  document.querySelectorAll('.asset-sample').forEach(element => {
    element.addEventListener('click', () => {
      console.log(element.id)
      document.querySelector('#asset-detailed-wrapper').style.display = 'flex'
      document.querySelector('#assetview-img').src = `https://getbrandkit.s3.us-east-2.amazonaws.com/${element.id}.png`
      opened = element.id
      document.querySelector('#close-detailed').addEventListener('click', () => {
        document.querySelector('#asset-detailed-wrapper').style.display = 'none'
      })
    })
  })
})

