// const ambilData = async (nama) => {
//     await fetch(`https://pokeapi.co/api/v2/pokemon/${nama}/`)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(error => console.log(error))
// }
// ambilData(prompt('search'))

// //axios
// // async await => ascnchronus function yang mengembalikan imlisit promise, bekrja secara asynchronus,
// // ditulis secara synchronus

// // async function cobaAsync(){
// //     const data = await ambilData()
// //     console.log(data);
// // }

// // cobaAsync()

// let state = {
//   token: "",
//   user: {},
// };

// const myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// //register user
// function register() {
//   let dataToSend = {
//     name: prompt("Enter FullName"),
//     email: prompt("Enter Your Email"),
//     password: prompt("Enter Your Password"),
//     age: prompt("Enter Your Age"),
//   };

//   const init = {
//     method: "post",
//     headers: myHeaders,
//     body: JSON.stringify(dataToSend),
//   };

//   const response = fetch(
//     "https://api-nodejs-todolist.herokuapp.com/user/register",
//     init
//   )
//     .then((res) => res.json())
//     .then((res) => (state.token = res.token))
//     .catch((err) => console.log(err));

//   return response;
// }

// // login user

// function login() {
//   let dataToSend = {
//     email: prompt("Enter Your Email"),
//     password: prompt("Enter Your Password"),
//   };

//   const init = {
//     method: "post",
//     headers: myHeaders,
//     body: JSON.stringify(dataToSend),
//   };

//   const response = fetch(
//     "https://api-nodejs-todolist.herokuapp.com/user/login",
//     init
//   )
//     .then((res) => res.json())
//     .then((res) => {
//       state.token = res.token;
//       state.user = res.user;
//       console.log(res);
//     })
//     .catch((err) => console.log(err));

//   return response;
// }

// //logout user
// function logout() {
//   let myHeadersPrivate = new Headers();
//   myHeadersPrivate.append("Authorization", `Bearer ${state.token}`);

//   const init = {
//     method: "post",
//     headers: myHeadersPrivate,
//   };
//   const response = fetch(
//     "https://api-nodejs-todolist.herokuapp.com/user/logout",
//     init
//   )
//     .then((res) => res.json())
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("succes loguout"));

//   return response;
// }

// function getProfile() {
//   const myHeadersPrivate = new Headers();
//   myHeadersPrivate.append("Authorization", `Bearer ${state.token}`);

//   const init = {
//     method: "get",
//     headers: myHeadersPrivate,
//   };

//   fetch("https://api-nodejs-todolist.herokuapp.com/user/me", init)
//     .then((res) => res.json())
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

//   return "please wait. . .";
// }

// function updateProfile() {
//   const myHeadersPrivate = new Headers();
//   myHeadersPrivate.append("Authorization", `Bearer ${state.token}`);
//   myHeadersPrivate.append("Content-Type", "application/json");

//   let dataToSend = {
//     name: prompt("Enter FullName", state.user.name),
//     email: prompt("Enter Your Email", state.user.email),
//     age: prompt("Enter Your Age", state.user.age),
//   };

//   const init = {
//     method: "put",
//     headers: myHeadersPrivate,
//     body: JSON.stringify(dataToSend),
//   };

//   fetch("https://api-nodejs-todolist.herokuapp.com/user/me", init)
//     .then((res) => res.json())
//     .then((res) => {
//       state.user = res.data;
//       console.log(res);
//     })
//     .catch((err) => console.log(err));

//   return "please wait. . .";
// }

// function deleteAccount() {
//   const myHeadersPrivate = new Headers();
//   myHeadersPrivate.append("Authorization", `Bearer ${state.token}`);

//   const init = {
//     method: "delete",
//     headers: myHeadersPrivate,
//   };
//   let yesNo = confirm("apakah yakin ingin menghapus akun???");
//   if (yesNo) {
//     fetch("https://api-nodejs-todolist.herokuapp.com/user/me", init)
//       .then((res) => res.json())
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err))
//       .finally(() => console.log("Akun telah dihapus, loading berhenti"));
//   } else {
//     return "selamat akun anda tidak jadi di hapus";
//   }

//   return "please wait. . .";
// }

// function addTask() {
//   const myHeadersPrivate = new Headers();
//   myHeadersPrivate.append("Authorization", `Bearer ${state.token}`);
//   myHeadersPrivate.append("Content-Type", "application/json");

//   const dataToSend = {
//     description: prompt("Enter your task"),
//   };

//   const init = {
//     method: "POST",
//     headers: myHeadersPrivate,
//     body: JSON.stringify(dataToSend),
//   };

//   fetch("https://api-nodejs-todolist.herokuapp.com/task", init)
//     .then((res) => res.json())
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

//   return "please wait. . .";
// }

// function getAllTask() {
//   const myHeadersPrivate = new Headers();
//   myHeadersPrivate.append("Authorization", `Bearer ${state.token} `);
//   myHeadersPrivate.append("Content-Type", "application/json");

//   const init = {
//     method: "GET",
//     headers: myHeadersPrivate,
//   };

//   fetch("https://api-nodejs-todolist.herokuapp.com/task", init)
//     .then((res) => res.json())
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

//   return "please wait. . .";
// }

// function getTaskById(id) {
//   const myHeadersPrivate = new Headers();
//   myHeadersPrivate.append("Authorization", `Bearer ${state.token}`);
//   myHeadersPrivate.append("Content-Type", "application/json");

//   const init = {
//     method: "GET",
//     headers: myHeadersPrivate,
//   };

//   fetch(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, init)
//     .then((res) => res.json())
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));

//   return "please wait. . .";
// }

// function editTask(id){
//   const myHeadersPrivate = new Headers();
//   myHeadersPrivate.append("Authorization", `Bearer ${state.token}`);
//   myHeadersPrivate.append("Content-Type", "application/json");

//   const dataToSend = {
//     completed: true
//   }

//   const init = {
//     method: 'PUT',
//     headers: myHeadersPrivate,
//     body: JSON.stringify(dataToSend)
//   }

//   fetch(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, init)
//     .then((res) => res.json())
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));

//   return "please wait. . .";
// }

// function taskCompleted(){
//   const myHeadersPrivate = new Headers();
//   myHeadersPrivate.append("Authorization", `Bearer ${state.token}`);
//   myHeadersPrivate.append("Content-Type", "application/json");

//   const init = {
//     method: 'GET',
//     headers: myHeadersPrivate
//   }

//   fetch(`https://api-nodejs-todolist.herokuapp.com/task?completed=true`, init)
//     .then((res) => res.json())
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));

//   return "please wait. . .";
// }

// function deleteTask(id){
//   const myHeadersPrivate = new Headers();
//   myHeadersPrivate.append("Authorization", `Bearer ${state.token}`);
//   myHeadersPrivate.append("Content-Type", "application/json");

//   const init = {
//     method: 'DELETE',
//     headers: myHeadersPrivate
//   }

//   fetch(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, init)
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// return "please wait. . .";
// }

// function taskByPagination(){
//   const myHeadersPrivate = new Headers();
//   myHeadersPrivate.append("Authorization", `Bearer ${state.token}`);
//   myHeadersPrivate.append("Content-Type", "application/json");

//   const init = {
//     method: 'GET',
//     headers: myHeadersPrivate
//   }

//   fetch(`https://api-nodejs-todolist.herokuapp.com/task?limit=2`, init)
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// return "please wait. . .";
// }

