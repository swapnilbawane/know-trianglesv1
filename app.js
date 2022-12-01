var angleInput = document.querySelectorAll(".angle"); 

var btnCalculate = document.querySelector("#btn-submit"); 

var hiddenMsg = document.querySelector(".hiddenMessage"); 

var indexLinkDeco = document.querySelector("#indexLink"); 

function isTriangle() { 

    if(angleInput[0].value && angleInput[1].value && angleInput[2].value)
    {
        
     if (angleInput[0].value > 0 && angleInput[1].value > 0 && angleInput[2].value > 0 ) 
     {
         var sum = Number(angleInput[0].value)+Number(angleInput[1].value)+Number(angleInput[2].value);
         
         if(sum===180) 
     {
      hiddenMsg.style.display = "block";
      hiddenMsg.innerText = "Sum of angles is "+sum+". This forms a triangle."; 
     } 
      
         else 
    {
    hiddenMsg.style.display = "block";
    hiddenMsg.innerText = "Sorry this does not form a triangle. Enter different values to find out.";   
    }
         
     }
     else hiddenMsg.innerText = "Please enter value greater than 0.";     
    } 
    
    else hiddenMsg.innerText = "Sorry please enter all values.";
   
}


indexLinkDeco.style.textDecoration = "underline"; 
indexLinkDeco.style.color = "white";
btnCalculate.addEventListener("click",isTriangle); 


// TESTS: 

function testInputValuesFirstElement() {
    // var angleNew = document.querySelector("#angleNew");
    console.log(btnCalculate);
    console.log(angleInput[0]);
    console.log(angleInput[0].value);
    console.log(typeof (angleNew)); 
    console.log(angleNew); 
    console.log(angleNew.value);
    console.log(typeof(angleInput[0].value));
}
