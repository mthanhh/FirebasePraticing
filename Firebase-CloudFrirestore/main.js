const firebaseConfig = {
  apiKey: "AIzaSyBLmycYHX4rB7N7cVYPFeACMxecEh2FUTs",
  authDomain: "fir-firebase-cloudmsging.firebaseapp.com",
  projectId: "fir-firebase-cloudmsging",
  storageBucket: "fir-firebase-cloudmsging.appspot.com",
  messagingSenderId: "494440780502",
  appId: "1:494440780502:web:6654686d68b673b4f16f77",
  measurementId: "G-04Y6MNWK5C"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

db.collection("chats").onSnapshot((snapshot) => {
  console.log(snapshot.docChanges())
  snapshot.docChanges().forEach(data => {
    console.log(data.doc.data());
    if (data.doc.data().senderName == 'toi') { 
      const html = `
          <div class="my-msg">
              <p>
                  ${data.doc.data().message}
              </p>  
          </div>`;

      $('.chat-show-msg').append(html);
    }else{
      const html = `
      <div class="enemy-msg">
          <p>
              ${data.doc.data().message}
          </p>  
      </div>`;

  $('.chat-show-msg').append(html);
    }
  });
})



$('.chat-input-msg').submit((e) => {
  e.preventDefault()
  const message = $('#chat-msg').val();
  if (message) {
    sendMessage({
      senderName: 'toi',
      message: message,
    })

    $('#chat-msg').val("")
  }
})

const sendMessage = async (message) => {
  try {
    await db.collection("chats").add(message)
    console.log('==asdasdasd==========');
  } catch (err) {
    console.log(err);
  }
}


console.log('abcx');