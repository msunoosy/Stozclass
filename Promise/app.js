

function getuser() {
  fetch('https://69e114e8b1cb62b9f3168d86.mockapi.io/api/v1/user').then(res=>res.json())
  .then(users=>{
    console.table(users)
  })
}



function postuser(){
fetch('https://69e114e8b1cb62b9f3168d86.mockapi.io/api/v1/user', {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ id: 6, email: "sunoos" })
})
.then(res => res.json())
.then(console.log);
}

postuser()