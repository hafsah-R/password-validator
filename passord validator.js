function password(str){

   str=document.getElementById("pass").value
   
   strR=document.getElementById("Rpass").value
    
   var regex=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W])(?!.*[\s]).{5,10}$/g

    
    if(str.match(regex)&&(str==strR)){
    
alert("resignation sucess welcome")

//refresh text field
       
document.getElementById("pass").value=""

document.getElementById("Rpass").value=""
       
    }else{
    
    
    
       document.getElementById("Rpass").disabled=true;
    
document.getElementById("pass").value=""

document.getElementById("Rpass").value=""

//----------------------------------
    
    if(!(str.match(/[A-Za-z]/))){
    
          
p.innerHTML="password should contain at lest 1  <strong>letter</strong>"

      
      
      }
 //----—-------------------------------
      if(!(str.match(/[\d]/))){ 
    
          
p.innerHTML="password should contain at lest 1 <strong>number</strong>"
    

    }
//----------------------------------------  
    if(!(str.match(/[\W]/))){ 
    
          
p.innerHTML="password should contain at lest 1  <strong>spical character</strong>"

    
    }
  //------------------------------------
    if(str.match(/[\s]/)){ 
    
          
p.innerHTML="password should not contain <strong>space</strong>"
          
        
}

    
   } 
}function password(str){

   str=document.getElementById("pass").value
   
   strR=document.getElementById("Rpass").value
    
   var regex=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W])(?!.*[\s]).{5,10}$/g

    
    if(str.match(regex)&&(str==strR)){
    
alert("resignation sucess welcome")

//refresh text field
       
document.getElementById("pass").value=""

document.getElementById("Rpass").value=""
       
    }else{
    
    
    
       document.getElementById("Rpass").disabled=true;
    
document.getElementById("pass").value=""

document.getElementById("Rpass").value=""

//----------------------------------
    
    if(!(str.match(/[A-Za-z]/))){
    
          
p.innerHTML="password should contain at lest 1  <strong>letter</strong>"

      
      
      }
 //----—-------------------------------
      if(!(str.match(/[\d]/))){ 
    
          
p.innerHTML="password should contain at lest 1 <strong>number</strong>"
    

    }
//----------------------------------------  
    if(!(str.match(/[\W]/))){ 
    
          
p.innerHTML="password should contain at lest 1  <strong>spical character</strong>"

    
    }
  //------------------------------------
    if(str.match(/[\s]/)){ 
    
          
p.innerHTML="password should not contain <strong>space</strong>"
          
        
}

    
   } 
}