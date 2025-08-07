//select popup-overlay,popup-box,add-button
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addbutton = document.getElementById("add-button")


addbutton.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
})


//select cancel button
var cancelpopup = document.getElementById("cancel-popup")
  cancelpopup.addEventListener("click",function(){
      popupoverlay.style.display="none";
    popupbox.style.display="none";
})
//education
var popupoverlay1 = document.querySelector(".popup-overlay1")
var popupbox1 = document.querySelector(".popup-box1")
var addeducation1 = document.getElementById("add-education")


addeducation1.addEventListener("click",function(){
    popupoverlay1.style.display="block";
    popupbox1.style.display="block";
})
var cancelpopup1 = document.getElementById("cancel-popup1")
  cancelpopup1.addEventListener("click",function(){
      popupoverlay1.style.display="none";
    popupbox1.style.display="none";
})
//contact
var popupoverlay2 = document.querySelector(".popup-overlay2")
var popupbox2 = document.querySelector(".popup-box2")
var addcontact = document.getElementById("add-contact")


addcontact.addEventListener("click",function(){
    popupoverlay2.style.display="block";
    popupbox2.style.display="block";
})
var cancelpopup2 = document.getElementById("cancel-popup2")
  cancelpopup2.addEventListener("click",function(){
      popupoverlay2.style.display="none";
    popupbox2.style.display="none";
})
//click home button 
var popupoverlay0 = document.querySelector(".popup-overlay0")
var popupbox0 = document.querySelector(".popup-box0")
var addhome = document.getElementById("add-home")


addhome.addEventListener("click",function(){
    popupoverlay0.style.display="block";
    popupbox0.style.display="block";
})
var cancelpopup0 = document.getElementById("cancel-popup0")
  cancelpopup0.addEventListener("click",function(){
      popupoverlay0.style.display="none";
    popupbox0.style.display="none";
})
