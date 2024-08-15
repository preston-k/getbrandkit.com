// <script src='https://sdk.amazonaws.com/js/aws-sdk-2.1624.0.min.js'> 
let albumBucketName = 'getbrandkit'
let bucketRegion = 'us-east-2'
let IdentityPoolId = 'us-east-2:352d487b-c052-423a-bdeb-8656d8d373e0'
AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId,
  }),
})
let photoid = ''
let s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: albumBucketName },
})
function addPhoto() {
  let files = document.getElementById('pfpup').files
  let fileExtension 
  if (!files.length) {
    return alert('Please choose a file to upload first.')
    
  }
  let file = files[0]
  let id = self.crypto.randomUUID()
  photoid = id
  let upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: albumBucketName,
      Key: `${id}.png`,
      Body: file,
      ContentType: 'image/png',
      // Tagging: 'email=' + email,
    },
  })

  let promise = upload.promise()

  promise.then(
    function (data) {
      console.log(data)
    },
    function (err) {
      console.log(err)
      return alert(
        'Sorry, we ran into an error uploading your image.\n\nRef: ',
        err.message
      )
    }
  )
}

document.querySelector('#file-input').addEventListener('change', () => {
  addPhoto()
})