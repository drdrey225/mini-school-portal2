var allStudents = []
var editedIndex;

function register(){
   var student = {
      firstname: fn.value,
      lastname: ln.value,
      email: em.value,
      password: pw.value,
      date: date.value,
   }
   allStudents.push(student)
   console.log(student)
   displayStudents()
   fn.value = ""
   ln.value = ""
   em.value = ""
   pw.value = ""
   date.value =""
}

function displayStudents() {
      disp.innerHTML = ""
      disp.innerHTML += `
         <table class="table table-striped" id="myTable">
            <tr>
               <th>S/N</th>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Email</th>
               <th>Date</th>
               <th>Actions</th>

            </tr>
       `
      for (let index = 0; index < allStudents.length; index++) {
         myTable.innerHTML += `
            <tr>
               <td>${index}</td>
            <td>${allStudents[index].firstname}</td>
            <td>${allStudents[index].lastname}</td>
            <td>${allStudents[index].email}</td>
            <td>${allStudents[index].date}</td>
            <td>
               <button class="btn btn-danger py-2" onclick="deleteStudent(${index})"><img width="20" height="20" src="https://img.icons8.com/ios/50/trash--v1.png" alt="trash--v1"/></button>
               <button data-toggle="modal" data-target="#exampleModal" onclick="editStudent(${index})" class="btn btn-warning py-2"><img width="20" height="20" src="https://img.icons8.com/ios/50/edit-text-file.png" alt="edit-text-file"/></button>
            </td>
           </tr>
        `
         disp.innerHTML += `</table>`
      }
   }



function deleteStudent(index) {
   allStudents.splice(index,1)
   displayStudents()
}

function editStudent(index) {
   editDiv.style.display = "block"
   editedIndex = index
}

function saveChanges(index) {
   var replacement = {
      firstname: editedFn.value,
      lastname: editedLn.value,
      email: editedEm.value,
      password: editedPw.value,
   }
   allStudents.splice(index,1,replacement)
   displayStudents()
   editDiv.style.display = "none"
}