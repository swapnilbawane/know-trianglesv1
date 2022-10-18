areaTriangleLink = document.querySelector("#areaofTriangle"); 
baseValue = document.querySelector("#base");
heightValue = document.querySelector("#height"); 
btnAreaTriangle = document.querySelector("#btn-calcAt"); 
messageAofT = document.querySelector("#notifyAt"); 

function calcAreaTriangle() {
   let sumAofT = 0.5*Number(baseValue.value)*Number(heightValue.value); 
   messageAofT.style.display = "block";
   messageAofT.innerText = "The area of triangle with sides: "+baseValue.value+"cms and "+heightValue.value+"cms is: "+sumAofT+" sq.cms.";
}


areaTriangleLink.style.textDecoration = "underline";
areaTriangleLink.style.color = "white";
btnAreaTriangle.addEventListener("click",calcAreaTriangle);