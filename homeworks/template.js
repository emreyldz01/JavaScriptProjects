let temp = document.getElementById('message');

var go =true;
let passwordInput = prompt("enter your password","");
while(go){
let passwordInput2 = prompt("re-enter your password","");
if(passwordInput===passwordInput2){
    go=false;
    alert("şifre dogru");
    }
    else{
  
        alert("şifre yanlış");
    }  


}