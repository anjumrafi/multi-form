const form = document.querySelector('form'); 
 
form.addEventListener('submit', function(event) { 
  event.preventDefault(); 
  
}); 

const frist = document.getElementById("frist");
const second = document.getElementById("second");
const preBtn = document.getElementById("pre-btn");
const nextBtn =document.getElementById("next-Btn");
const seNextBtn =document.getElementById("se-next-btn");
const trPreBtn =document.getElementById("tr-pre-btn");




nextBtn.onclick= function(){
    frist.style.marginTop ='-420px';   
}

preBtn.onclick= function(){
    frist.style.marginTop ='0px';
}

seNextBtn.onclick=function(){
    second.style.marginTop= '-380px'

}
trPreBtn.onclick=function(){
    second.style.marginTop="80px"
}

