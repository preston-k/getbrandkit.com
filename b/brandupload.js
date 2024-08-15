document.querySelector('#uploadbox').addEventListener('click', () => {
  document.querySelector('#file-input').click()
})

document.querySelector('#uploadbox').addEventListener('dragover', (event) => {
  event.preventDefault()
  document.querySelector('#uploadbox').classList.add('dragover')
})

document.querySelector('#uploadbox').addEventListener('dragleave', () => {
  document.querySelector('#uploadbox').classList.remove('dragover')
})

document.querySelector('#uploadbox').addEventListener('drop', (event) => {
  event.preventDefault()
  document.querySelector('#uploadbox').classList.remove('dragover')
  const files = event.dataTransfer.files
  handleFiles(files)
})

document.querySelector('#uploadbox').addEventListener('drop', (event) => {
  event.preventDefault()
  document.querySelector('#uploadbox').classList.remove('dragover')
  const files = event.dataTransfer.files
  // handleFiles(files)
})