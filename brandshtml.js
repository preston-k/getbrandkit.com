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
let brandList = ''
database.ref('/brands/').once('value').then(snapshot => {
  Object.keys(snapshot.val()).forEach(key => {
    brandList += `<a href='/b/main.html?b=${key}'><div class='brandview-tile'><img src='https://getbrandkit.s3.us-east-2.amazonaws.com/${snapshot.val().brandkit.logos.primary.primary}.png' class='brandview-logo'></div></a>`
  })
  document.querySelector('#brandviewer').innerHTML = brandList
})