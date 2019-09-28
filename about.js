let lines = document.body.querySelectorAll(".aboutcontent>button");
let sections = document.body.getElementsByTagName("section");
let arr = [];
let currentElement;
let perviouselement;
let hasaddevent;


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
for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener("wheel", scrolling);
    if (window.innerWidth<=600){
       sections[i].addEventListener("touchend", scrolling);
    }
}
function scrolling(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!e.srcElement.id) {
        currentElement = e.srcElement.parentElement;
    } else {
        currentElement = e.srcElement;
    }
    if ((e.srcElement.tagName != "SECTION") && (e.srcElement.tagName != "DIV")) { return }
    if (e.deltaY > 0) {
        if (currentElement.id == "aaa") { return }
        children = currentElement.getElementsByTagName("*");
        let nextchildren = currentElement.nextElementSibling.getElementsByTagName("*");
        currentElement.style.animationName = "sectionheigthrem";
        currentElement.nextElementSibling.style.animationName="sectionheigthadd"
        currentElement.style.height = 0;
        currentElement.nextElementSibling.style.height = "100vh";
        perviouselement = currentElement;
         animdelete(children);
        animadd(nextchildren);
    } else if (e.deltaY < 0) {
        if (currentElement.id == "about") { return }
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
}

function animadd(children) {
    let len = children.length;
    for (let i = 0; i < len; i++) {
        children[i].style.opacity = 1;
        children[i].style.animationName = "opacityaboutcontenttoone";
    }
}


























// let animdelete = () => {
//     for (let i = 0; i < children.length; i++) {
//         if (children[i].style) {
//             arr.push(i);
//             children[i].style.animationName = "opacityaboutcontenttozero";
//             children[i].addEventListener("animationend",function forchildlisenerrem  () {console.log("delete"); children[i].style.display = "none"; });
//         }
//     }
//     for(let item of arr){
//            children[item].style.display = "none";
//     }

// }

// let animadd = () => {
//     for (let i = 0; i < children.length; i++) {
//         if (children[i].style) {

//             children[i].style.animationName = "opacityaboutcontenttoone";

//             // children[i].addEventListener("webkitAnimationStart", function forchildliseneradd () {console.log("add"); children[i].style.display = "flex" })
//             for(let item of arr){
//                    children[item].style.display = "flex";
//             }
//         }
//     }
// }











