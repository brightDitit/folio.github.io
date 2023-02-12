
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

   
 const tog = document.getElementByid("navT");
 tog.addEventListener(click, () =>{

    

 } )

