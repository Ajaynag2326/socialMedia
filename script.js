let users = [];

function showLogin() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      displayUsers(data);
    })
    .catch((err) => console.log(err));
  

}
function showTodo(id)
{
  let str=`<p><h1>My TODO</h1></p> <div>`
    fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${id}`)
    .then((res)=>res.json())
    .then((data)=>{
        data.map((value)=>{
            str+=`<div class="fs-5"><input type="checkbox" ${value.completed && "checked"}>${value.title}</div>`
        });
        content.innerHTML=str+`</div>`;
    })
    .catch((err)=>console.log(err));
}
function showAlbums(id)
{
    let str=`<p><h1>My Albums</h1><p> <div>`
    fetch(`https://jsonplaceholder.typicode.com/albums/?userId=${id}`)
    .then((res)=>res.json())
    .then((data)=>{
        data.map((value)=>{
            str+=`<p class="fs-4">${value.title}</p>`

        });
        content.innerHTML=str+`</div>`;
    })
    .catch((err)=>console.log(err));
}
function showPosts(id) {
    let str=`<p><h1>My Posts</h1><p> <div>`
    fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`)
    .then((res)=>res.json())
    .then((data)=>{
        data.map((value)=>{
            str+=`<b class="fs-5">${value.title}</b>
            <p>${value.body}</p>`

        });
        content.innerHTML=str;
    })
    .catch((err)=>console.log(err));
    
}
function showProfile(id)
{
    fetch(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
    .then((res)=>res.json())
    .then((data)=>{
       
      const user = data[0];
            
      let str = `<p><h1>My Profile</h1><p>
      <div>
          <p class="fs-1">${user.name}</p>
          <p>${user.username}</p>
          <p class="fs-3">Contact</p>
          <p><b>Email :</b> ${user.email} | <b>Phone:</b> ${user.phone} | <b>Address:</b>${user.address.street},${user.address.city},${user.address.zipcode}</p>
          <p class="fs-4">Work Space</p>
          <p><b class="fs-5">${user.company.name}</b> ${user.website}</p>
          <p>${user.company.catchPhrase}</p>
          <p><b>Business Slogan:</b> ${user.company.bs}</p>
      </div>`;

       
            content.innerHTML=str;
        })
        .catch((err)=>console.log(err));
}
function getUserInfo() {}

function showHome() {
  let userId = selUser.value;
  let str = `
    <div class="container-fluid">
         <div class="row">
         <div class="d-flex justify-content-between bg-warning text-dark">
         <div class="fs-1">My Space</div>
            <div id="username" class="fs-3">${selUser.options[userId].text}</div>
          </div>
          </div>
            
            <div class="row mt-1 ">
            <div class="d-flex">
            <div class="col-lg-1 p-2">
            <p onclick="showPosts(${userId})">Home</p>
            <p onclick="showAlbums(${userId})">Album</p>
            <p onclick="showProfile(${userId})">Profile</p>
            <p onclick="showTodo(${userId})">TODO</p>
            <p onclick="showLogin()">Logout</p>
            </div>
            <div class="col-lg-11" id="content"></div>
            </div>
            </div>
            
            <div class="row">
            <div class="bg-warning text-dark p-3">
                <p>@Coptright 2025. All rights reserved.</p>
            </div>
            </div>
            
            </div>
            `;
  root.innerHTML = str;
  showPosts(userId);
}

function displayUsers(data) {
  let str = `
    <div class="d-flex justify-content-center p-5">
    <div class="p-5">
    <h2>My Social Media</h2>
    <p>This is my Social Media Website</p>
    </div>
    <div class="p-5">
    <select class="form-control m-3" id="selUser">
    <option value='0'>---Select User---</option>`;
    data.map((value) => {
    str += `<option value=${value.id}>${value.name}</option>`;
  });

  str += `</select>
  <p>
  <button class="form-control m-3 btn btn-warning" onclick="showHome()">Login</button>
  </p>
  </div>
  </div>`;
  root.innerHTML = str;
}
