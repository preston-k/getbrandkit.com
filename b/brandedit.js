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

document.querySelectorAll('.asset-sample').forEach(element => {
  element.addEventListener('click', () => {
    console.log(element.id)
    document.querySelector('#asset-detailed-wrapper').style.display = 'flex'
    document.querySelector('#close-detailed').addEventListener('click', () => {
      document.querySelector('#asset-detailed-wrapper').style.display = 'none'
    })
  })
})

document.querySelector('#assetview-download').addEventListener('click', () => {
  console.log('download img')
})
document.querySelector('#assetview-save').addEventListener('click', () => {
  console.log('save changes')
})
document.querySelector('#close-detailed').addEventListener('click', () => {
  document.querySelector('#asset-detailed-wrapper').style.display = 'none'
})