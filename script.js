let input=document.getElementById("inputbox");
let buttons=document.querySelectorAll('button');

//empty string for result
let string="";
let arr=Array.from(buttons);
arr.forEach(button =>{
button.addEventListener('click', (e)=>{
    // check if our target is button or equals button if it is button then we want to show o/p that why we use innerHTML

  if(e.target.innerHTML == '='){
    
    // built in func to evaluate any thing in string
    try{
    string =eval(string)
    // we store string value to our input value
    input.value=string;
    }catch{
    input.value = "Error";
    string = "";
}
    
  }
//   if AC btn is clicked
  else if(e.target.innerHTML=='AC'){
    string="";
    input.value=string;

  }
//   Now if del btn is clicked
// if anyone clciked this so our last digit should be removed that why we use substring function
else if(e.target.innerHTML=='DEL'){
    string=string.substring(0,string.length-1);
    input.value=string;
}


//   Now if it is not a equal  button then
else{
    string+=e.target.innerHTML;
    input.value=string;
}

})
})
