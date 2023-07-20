let userData = [
  {
    id: 1,
    username: "Mohan",
    email: "mohan@gmail.com",
    password: "mohan12345",
  },

  { 
    id: 2, 
    username: "Ram", 
    email: "ram@gmail.com", 
    password: "ram12345" 
  },

  {
    id: 3,
    username: "Ajith",
    email: "ajith@gmail.com",
    password: "ajith12345",
  }
];

let emailId = document.getElementById("e-mail");
let passId = document.getElementById("pass");
let inputs = document.getElementsByClassName("input");
let successMsg = document.getElementsByClassName("success_msg");
let welMsg = document.getElementById("wel_msg");

let signInBtn = document.getElementById("signin_btn");
signInBtn.addEventListener("click", signIn.bind(null));

let showBtn = document.getElementById("show");
showBtn.addEventListener("click", showPassword.bind(null));

let hideBtn = document.getElementById("hide");
hideBtn.addEventListener("click", hidePassword.bind(null));

function signIn(eve) {
  eve.preventDefault();
  let check = true;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      let pNode = inputs[i].parentNode;
      let msg = pNode.getElementsByClassName("msg")[0];
      //msg.innerHTML = "*Please Enter the Email";
      msg.classList.add("msg_visib");
      check = false;
    } else {
      let pNode = inputs[i].parentNode;
      let msg = pNode.getElementsByClassName("msg")[0];
      msg.classList.remove("msg_visib");
    }
  }

  if (check) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId.value)) {
      
      let findItem = userData.find(function (item) {
        return emailId.value === item.email;
      });

      if (!findItem) {
        let pNode = inputs[0].parentNode;
        let msg = pNode.getElementsByClassName("msg")[0];
        msg.innerHTML = "*Check the Email Again";
        msg.classList.add("msg_visib");
      }
      checkPassword(findItem);
    } else {
      let pNode = inputs[0].parentNode;
      let msg = pNode.getElementsByClassName("msg")[0];
      msg.innerHTML = "*Please Enter a valid Email";
      msg.classList.add("msg_visib");
    }
  }
}
function checkPassword(item) {
  if (passId.value === item.password) {
    console.log("true");
    welMsg.innerHTML = "WELCOME BACK, " + item.username;
    let welcomeBox = document.getElementsByClassName("welcome_msg")[0];
    welcomeBox.classList.add("msg_visib");
    successMsg[0].classList.add("msg_visib");
  } else {
    let pNode = inputs[1].parentNode;
    let msg = pNode.getElementsByClassName("msg")[0];
    msg.innerHTML = "*Check the Password Again";
    msg.classList.add("msg_visib");
  }
}
function showPassword(eve) {
  passId.type = "text";
  showBtn.classList.add("d-none");
  hideBtn.classList.add("d-block");
}

function hidePassword(eve) {
  passId.type = "password";
  showBtn.classList.remove("d-none");
  hideBtn.classList.remove("d-block");
}
