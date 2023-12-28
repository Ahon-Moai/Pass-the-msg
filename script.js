let btn = document.getElementById('btn');
let inputField = document.getElementById('inputField');
let mainContent = document.getElementById('main');
let para = document.getElementById('para');

btn.addEventListener('click', function(){
  para.innerText = inputField.value;
   inputField.value = "";
 
})