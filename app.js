let display=document.querySelector("#display");

function appendvalue(value){
   
   display.value+=value;




}
function cleardisplay(){

   display.value="";

}
function clearstep(){

  display.value=display.value.slice(0,-1);
}

function ans(value){

try{


   display.value=eval(display.value);
}
catch{

   display.value="Error";
}


}
document.addEventListener("keydown",()=>{

   let key=event.key
  
if(!isNaN(key)||key==="."){


   appendvalue(key);
}
else if(key==="+"||key==="-"||key==="*"||key==="/"||key==="%"){


   appendvalue(key);
}
else if (key==="Enter"){

   ans();
}
else if(key==="Backspace"){

   clearstep();
}
else if(key==="Escape"){

   cleardisplay();
}






})