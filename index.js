// let title = document.getElementById("title");

// title.textContent = "JavaScript Switch Statement updated";

// let description = document.getElementById("description");
// console.log(description);
// description.textContent = "The switch statement is used to perform different actions based on different conditions.";

// let updateButton = document.getElementById("updateButton");

// updateButton.addEventListener("click", function () {
//     let title = document.getElementById("title");
//     let description = document.getElementById("description");

//     title.textContent = "JavaScript Switch Statement updated";
//     description.textContent = "The switch statement is used to perform different actions based on different conditions.";

//     alert("Description updated!");
// })

let userForm = document.getElementById("userForm");

userForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // get information from the form
    let rollno = document.getElementById("rollno").value;
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let fatherName = document.getElementById("father-name").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let checkedDepts = document.querySelectorAll('input[type="checkbox"]:checked'); // for checkbox value it's collecting which department checkboxes the user has selected — likely to filter or process data based on those selections.
    let genderEl = document.querySelector('input[name="gender"]:checked');
    let gender = genderEl ? genderEl.value : "";
    let course = document.getElementById("course").value;
    let city = document.getElementById("city").value;
    let address = document.getElementById("address").value;




    // Display information
    let dRollno = document.getElementById("d-rollno");
    dRollno.textContent = `Rollno : ${rollno}`;
    let dFirstName = document.getElementById("d-first-name");
    dFirstName.textContent = `First Name : ${firstName}`;
    let dLastName = document.getElementById("d-last-name");
    dLastName.textContent = `Last Name : ${lastName}`;
    let dFatherName = document.getElementById("d-father-name")
    dFatherName.textContent = `Father's Name : ${fatherName}`
    let dDOB = document.getElementById("d-dob");
    dDOB.textContent = `Date of Birth : ${dob}`;
    let dEmail = document.getElementById("d-email");
    dEmail.textContent = `Email : ${email}`;
    let dPassword = document.getElementById("d-password");
    dPassword.textContent = `Password : ${password}`;
    let dDepartment = document.getElementById("d-department");
    let departments = Array.from(checkedDepts).map(cb => cb.value).join(", "); // Array.from convert it into array and map will loop over the array and join will join the values with comma and space
    dDepartment.textContent = `Department : ${departments}`;
    let dGender = document.getElementById("d-gender");
    dGender.textContent = `Gender : ${gender}`;
    let dCourse = document.getElementById("d-course");
    dCourse.textContent = `Course : ${course}`;
    let dCity = document.getElementById("d-city");
    dCity.textContent = `City : ${city}`;
    let dAddress = document.getElementById("d-address");
    dAddress.textContent = `Address : ${address}`;
})

const updateBackground = () => {
    let body = document.getElementById("body");
    body.style.backgroundColor = "rgb(241, 241, 226)";

}