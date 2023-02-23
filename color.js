
/*----------color switch script----------*/
const ShowColor = document.querySelector(".style-switch-toggler");
/*----------switch class list----------*/
ShowColor.addEventListener("click", () => {
    document.querySelector(".switch-color").classList.toggle("open");

});

/*prevent open class from showing while csrolling the window scroll bar */

window.addEventListener("scroll", () => {
    if(document.querySelector(".switch-color").classList.contains("open"))
    {
        document.querySelector(".switch-color").classList.remove("open");
    }

});

/**primary color  */
 const  defaultColor = document.querySelectorAll(".default-color");
 function setActiveStyle(color)
 {
    defaultColor.forEach((style) => {
        
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled"); 
        }
        else
        {
            style.setAttribute("disabled","true"); 
        }
    })
 }

 // the toggle elements lines of code bellow

 document.getElementById('navT').addEventListener
 ('click',loadtoggle);

 function loadtoggle(){
 /* the code that hide and show the nav element.........*/
   var w = window.innerWidth;
   var elem = document.getElementById('navID'),
   style    = window.getComputedStyle(elem),
   left     = style.getPropertyValue('left');




   if(left =='0px'){
    elem.style.left ='-270px';
   }
   else if(w < 1199){
    elem.style.left ='0px';
   }
   else if (w >1194  ){
    elem.style.left = '0px';
   }
 }

 /*// clear text field after submitssion of form 
 document.getElementById('sendbtn').addEventListener('click', cleartext);
 function cleartext(e){
    // to prevent the form reload after form submission.
    e.preventDefault();
    
    
    var clientname  = document.getElementById('name');
    var clientemail = document.getElementById('email');
    var clientmsg   = document.getElementById('message');
    //setting the inputs to empty after submission
    clientname.value  = '';
    clientemail.value ='';
    clientmsg.value   ='';
   
 }
 */