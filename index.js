
let form = document.querySelector("#user-form")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let name = document.querySelector("#username").value
    let email = document.querySelector("#email").value
    submitData(name, email)  

})
function submitData(name, email) {
    
    let formData = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    return  fetch("http://localhost:3000/users", configObj)
        .then(res => res.json())
        .then(json => {
            const newUser = document.createElement('p');
            newUser.innerHTML = JSON.stringify(json);
            document.querySelector("body").append(newUser)

        })
        .catch(function(error) {
            const newError = document.createElement('p');
            newError.innerHTML = "Unauthorized Access";
            document.querySelector("body").append(newError)
            console.log(error.message);
        })
}


// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
   
//   let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
   
//   fetch("http://localhost:3000/dogs", configObj)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object);
//   })
//   .catch(function(error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });
