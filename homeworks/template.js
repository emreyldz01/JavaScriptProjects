let temp = document.getElementById('message');

var go =true;
let passwordInput = prompt("enter your password","");
while(go){
let passwordInput2 = prompt("re-enter your password","");
if(passwordInput===passwordInput2){
    go=false;
    alert("şifre dogru");
    //temp2 =" şifre doğru";
    //temp.innerHTML = temp2;
}
else{
   // temp2 =" şifre yanlış tekrar dene";
    //temp.innerHTML = temp2;
    alert("şifre yanlış");
}

}