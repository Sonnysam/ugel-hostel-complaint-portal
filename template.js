// //JQUERY TYPING ANIMATION JS CODE
// const typed = new Typed(".type", {
//   strings: [" ", "UGEL", "Our Complaint Portal"],
//   typeSpeed: 100,
//   backSpeed: 60,
//   loop: true,
// });

// //JS CODE FOR FORM VALIDATION

// const signUp = e => {
//   let formData = {
//     studentNAME: document.getElementById("name").value,
//     studentID: document.getElementById("studentID").value,
//     roomNUMBER: document.getElementById("roomNumber").value,
//     studentEMAIL: document.getElementById("email").value,
//     // studentComplaint: document.getElementById("complaint").value,
//     problemTYPE: document.getElementById("problemType").value,
//     problemDESCRIPTION: document.getElementById("description").value,
//     problemMEDIA: document.getElementById("myfile").value,
//   }
//   localStorage.setItem("formData", JSON.stringify(formData));
//   // console.log(localStorage.getItem("formData"));
//   displayData();
//   e.preventDefault();

// }

// const displayData = () => {
//   // console.log(JSON.parse(localStorage.getItem("formData")));
//  if(localStorage.getItem("formData")){
//     let { studentNAME, studentID, roomNUMBER, studentEMAIL, studentComplaint, problemTYPE, problemDESCRIPTION, problemMEDIA } = JSON.parse(localStorage.getItem("formData"));
//   let output = document.getElementById("output");
//   output.innerHTML = `
//     <table class="table">
//       <tbody>
//         <tr>
//           <td>Name</td>
//           <td>${studentNAME}</td>
//         </tr>
//          <tr>
//           <td>Student ID</td>
//           <td>${studentID}</td>
//         </tr>
//          <tr>
//           <td>Room Number</td>
//           <td>${roomNUMBER}</td>
//         </tr>
//          <tr>
//           <td>Email</td>
//           <td>${studentEMAIL}</td>
//         </tr>
//          <tr>
//           <td>Problem Type</td>
//           <td>${problemTYPE}</td>
//         </tr>
//          <tr>
//           <td>Problem Description</td>
//           <td>${problemDESCRIPTION}</td>
//         </tr>
//          <tr>
//           <td>Optional Problem Media File</td>
//           <td>${problemMEDIA}</td>
//         </tr>
//       </tbody>
//     </table>
//   `;
//  }
// } 
// displayData();