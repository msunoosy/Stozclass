console.log("hi")

function getuser() {
  fetch('https://69e114e8b1cb62b9f3168d86.mockapi.io/api/v1/user').then(res=>res.json())
  .then(users=>{
    users.forEach(user=>{
        console.log("ID :",user.id)
        console.log("ID :",user.name)
        console.log(".....")
    })
  })
}

getuser();