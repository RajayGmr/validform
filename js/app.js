//UI
const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const cpassword=document.getElementById('cpassword');
//
// //Event listener
// form.addEventListener('submit',function(e){
//   e.preventDefault();
// //  console.log(e);
//
// if(username.value==''){
//       //const formcontrol=username.parentElement;
//      //formcontrol.classList.add('error');
//     // const small=document.querySelector('small');
//     // small.innerText='Username must be at least 3 letters';
//     showerror(username,'Username is required');
// }else{
//     showsuccess(username);
// }
//
// if(email.value==''){
//   showerror(email,'Email is required');
// }else if(!ValidEmail(email.value)){
//   showerror(email,'Email is not valid');
// }else{
//   showsuccess(email);
// }
//
// if(password.value==''){
//   showerror(password,'Password is required');
// }else {
//   showsuccess(password);
// }
//
// if(cpassword.value==''){
//   showerror(cpassword,'Confirm your password');
// }else if (cpassword.value!==password.value) {
//   showerror(cpassword,'Password is not matched');
// }else {
//   showsuccess(cpassword);
// }
// });

function showerror(input,message){
  const formcontrol=input.parentElement;
  formcontrol.className="form-control error";
  const small=formcontrol.querySelector('small');
  small.innerText=message;
}
function showsuccess(input){
  const formcontrol=input.parentElement;
  //formcontrol.className="form-control success";
  formcontrol.classList.remove('error');
  formcontrol.classList.add('success');
}
//for checking email
function ValidEmail(email){
  const re=/^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;
  return re.test(String(email).toLowerCase());
}
//Check require field
function checkrequired(inputarrs){
  //console.log(inputarr);

  inputarrs.forEach(function(inputarr){
    // console.log(inputarr);
    // console.log(inputarr.value);
    //  console.log(inputarr.id);

    if(inputarr.value==''){
      showerror(inputarr,`${getfieldname(inputarr)} is required`);
    }else {
      showsuccess(inputarr);
    }
  })
}


  //Get field Name
function getfieldname(inputarr){
  return inputarr.id.charAt(0).toUpperCase()+inputarr.id.slice(1);
}
//Check Input length
function checklength(input,min,max){
  if(input.value.length<min){
    showerror(input,`${getfieldname(input)} must be at least ${min}`);
  }else if (input.value.length>max) {
    showerror(input,`${getfieldname(input)} must be less than ${max}`);
  }else {
    showsuccess(input);
  }
}

//check email is valid
function checkemail(input){
  const re=/^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;
//  return re.test(String(email).toLowerCase());
   if(re.test(input.value)){
     showsuccess(input);
   }else {
     showerror(input,`Email is not valid`);
   }
}

//Check password match
function checkpasswordsmatch(input,input1){
  if(input.value!=input1.value){

    showerror(input1,`Password is not match`);
  }
  // else {
  //   showsuccess(input1);
  // }
}



//Event listener (method 2)
form.addEventListener('submit',function(e){
  e.preventDefault();
//  console.log("hey");

   checkrequired([username,email,password,cpassword]);
   checklength(username,3,15);
   checklength(password,6,20);

   checkemail(email);
   checkpasswordsmatch(password,cpassword);
});
