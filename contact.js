const firebaseConfig = {
    apiKey: "AIzaSyBUps4KCXd4kWi2tm6diHXG0hhfBsDo6fQ",
    authDomain: "portfolio-cbc6e.firebaseapp.com",
    databaseURL: "https://portfolio-cbc6e-default-rtdb.firebaseio.com",
    projectId: "portfolio-cbc6e",
    storageBucket: "portfolio-cbc6e.appspot.com",
    messagingSenderId: "629309108296",
    appId: "1:629309108296:web:a9adba8bcae06ab9e5a87d"
  };
  // initialize firebase
   firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contact").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var Email = getElementVal("Email");
  var Subject = getElementVal("Subject")
  var message = getElementVal("message");

  saveMessages(name, Email,Subject, message);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, Email, Subject, message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    Email: Email,
    Subject: Subject,
    message: message,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};