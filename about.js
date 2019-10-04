let lines = document.body.querySelectorAll(".aboutcontent>button");
let sections = document.body.getElementsByTagName("section");
let currentElement;
let perviouselement;
let isAnimationEnded;
let isTouchDevice;
let TouchStartY;
let deltaScroll;
buttonlines();
function buttonlines(){
    for (let i = 0; i < lines.length; i++) {
        lines[i].addEventListener("mouseenter", animlines);
        lines[i].addEventListener("mouseleave", animlinesout);
    }
    function animlines(e) {
        let current = e.srcElement.id;
        let spans = document.body.querySelectorAll(`#${current}>span`)
        spans[0].className = "linetop";
        spans[1].className = "linebottom";
    }
    function animlinesout(e) {
        let current = e.srcElement.id;
        let spans = document.body.querySelectorAll(`#${current}>span`)
        spans[0].className = "";
        spans[1].className = "";
    }
}
for (let i = 0; i < sections.length; i++) {
    if(window.innerWidth<1000){
        isTouchDevice = true;
        sections[i].addEventListener("touchstart",(e) => { TouchStartY = e.touches[0].clientY; },false);
        sections[i].addEventListener("touchmove",scrolling ,false);
    }else{
        sections[i].addEventListener("wheel", scrolling);
    }
}

function scrolling(e) {
    e.preventDefault();
    e.stopPropagation();
    if(isTouchDevice){
        // alert("width = " + window.innerWidth);
        // alert("height = " + window.innerHeight);
        deltaScroll=TouchStartY - e.touches[0].clientY;
        currentElement = e.targetTouches[0].target;
    }else{
        deltaScroll = e.deltaY;
        
        currentElement = e.target;
    }
    if (!currentElement.id) {
        currentElement = currentElement.parentElement;
    }

    currentElement.addEventListener("animationstart",() => isAnimationEnded = false);
    currentElement.addEventListener("animationend",() => isAnimationEnded = true);
    if(isAnimationEnded == false){return}
    if ((e.srcElement.tagName != "SECTION") && (e.srcElement.tagName != "DIV")) { return }
    if (deltaScroll > 0) {
        if (currentElement.id == "CV") { return }
        displayheader(currentElement.nextElementSibling);
        children = currentElement.getElementsByTagName("*");
        let nextchildren = currentElement.nextElementSibling.getElementsByTagName("*");
        currentElement.style.animationName = "sectionheigthrem";
        currentElement.nextElementSibling.style.animationName="sectionheigthadd";
        currentElement.style.height = 0;
        currentElement.nextElementSibling.style.height = "100vh";
        perviouselement = currentElement;
        animdelete(children);
        animadd(nextchildren);
    } else if (deltaScroll < 0) {
        if (currentElement.id == "About") { return }
        if(currentElement.previousElementSibling.id == "About"){buttonlines()}
        displayheader(currentElement.previousElementSibling);
        children = currentElement.previousElementSibling.getElementsByTagName("*"); 
        let previouschildren = currentElement.getElementsByTagName("*");
        currentElement.previousElementSibling.style.animationName="sectionheigthadd";
        currentElement.style.animationName = "sectionheigthrem";
        currentElement.style.height = 0;
        currentElement.previousElementSibling.style.height = "100vh";
        animadd(children);
        animdelete(previouschildren);
    }
}
function animdelete(children) {
    let len = children.length;
    for (let i = 0; i < len; i++) {
        children[i].style.opacity = 0;
        children[i].style.animationName = "opacityaboutcontenttozero";
    }
    setTimeout(() => {
        for(let i = 0; i<len; i++){
            children[i].style.display = "none";            
        }
    }, 2000);
}


function animadd(children) {
    let len = children.length;
    for (let i = 0; i < len; i++) {
        children[i].style.display = "flex";            
        children[i].style.opacity = 1;
        children[i].style.animationName = "opacityaboutcontenttoone";
    }
}


function displayheader(element){
    let header = document.getElementById("header");
    let headerchildes = header.querySelectorAll("a");
    if(element.id != "About"){
        header.style.opacity=1;
        header.style.animationName = "opacityaboutcontenttoone";
        setTimeout(() => {
            header.style.display = "flex";    
            for(let el of headerchildes){
                if(el.outerText == element.id){
                    el.style.borderBottom =  "3px solid darkblue";
                }else{
                    el.style.borderBottom =  "3px solid whitesmoke";
                }
            }            
        }, 1000);
    }else{
        header.style.opacity=0;
        header.style.animationName = "opacityaboutcontenttozero";
        setTimeout(() => {
            header.style.display = "none";       
        }, 1000);
    }
    
}
