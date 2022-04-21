//JQUERY TYPING ANIMATION JS CODE
const typed = new Typed(".type", {
  strings: [" ", "UGEL", "Our Complaint Portal"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});


// JAVASCRIPT CODE FOR LOADER ANIMATION

// const none = document.getElementById('loader');
// const block = document.getElementById('content');

// setTimeout(function () {
//     none.style.display = 'none';
//     block.style.display = 'block';
// }, 3000);



//JS CODE FOR FORM VALIDATION
const form = document.querySelector("#form");
const user = document.querySelector("#user-name");
const studentid = document.querySelector("#studentID");
const roomNumber = document.querySelector("#roomNumber");
const submit = document.querySelector("#submit");
const err = document.querySelector("#required");
const rUser = document.querySelector("#required-name");
const rID = document.querySelector("#required-id");
const rRoom = document.querySelector("#required-room");
const cRoom = document.querySelector("#correct-room");


 user.addEventListener("input", () => {
    if (user.value.length > 0) {
        rUser.style.display = "none";
        rUser.innerHTML = "⚠ Error: Please enter your name";
    } else {
        rUser.style.display = "block";
    }
 });
 studentid.addEventListener("input", () => {
    if (studentid.value.length > 0) {
        rID.style.display = "none";
        rID.innerHTML = "⚠ Error: Please enter your ID";
    } else {
        rID.style.display = "block";
    }
 });
roomNumber.addEventListener("input", () => {
    if (roomNumber.value.length > 0 && roomNumber.value.length < 3)
    {
        rRoom.style.display = "none";
        rRoom.innerHTML =
          "⚠ Error: Please enter a valid room number";
        cRoom.style.display = "none";  
    }
    else if(roomNumber.value.length > 0 && roomNumber.value.length > 3){
        rRoom.style.display = "none";
        cRoom.style.display = "block";
        cRoom.innerHTML = "✔ Correct Room Number";
    }
    else if (roomNumber.value.length < 4) {
         rRoom.innerHTML = "Your room number is invalid";
         rRoom.style.display = "block";
        //  rRoom.style.display = "none";
    }
    else {
        rRoom.style.display = "block";
    }
 });

 submit.addEventListener("click", (e) => {
    e.preventDefault();
    if(studentid.value === "" || user.value === "" || roomNumber.value === ""){
        alert("Please fill the required fields");
    }
    else{
        window.open("success.html", "_blank");
        
    }
 });




