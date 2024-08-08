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
let emailValid = false
let interactiveemail = document.querySelector('#interative-email')
interactiveemail.addEventListener('change', () => {
  console.log(interactiveemail.value)
  if (interactiveemail.value.includes('@gmail.com') || interactiveemail.value.includes('@yahoo.com') || interactiveemail.value.includes('@aol.com') || interactiveemail.value.includes('@outlook.com') || interactiveemail.value.includes('@icloud.com') || interactiveemail.value.includes('@me.com')) {
    console.log('personal email')
    document.querySelector('#emailtip').innerHTML = 'Please enter a business email, not a personal one.'
    emailValid = false
  } else {
    emailValid = true
  }
})
document.querySelector('#interactiveemail-submit').addEventListener('click', async () => {
  if (emailValid) {
    let id = self.crypto.randomUUID()
    await database.ref(`users/${id}/`).update({
      email: interactiveemail.value,
      verified: false,
    })
    // SEND VERIFICATION CODE EMAIL HERE
    document.querySelector('#interactive-1').style.display = 'none'
    document.querySelector('#interactive-2').style.display = 'block'
  }
})