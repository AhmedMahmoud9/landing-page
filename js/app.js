/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



const navUl = document.querySelector("#navbar__list")
const pageSection = document.querySelectorAll('section')

let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
}

for(let i = 1; i <= pageSection.length; i++){

/**********************add li to nav ul ***********************/
    const navList = document.createElement("li")
    navUl.appendChild(navList)

/**********************add links to nav ***********************/
    const navLink = document.createElement("a")

    navLink.textContent = `section ${i}`
    navLink.setAttribute("data-nav",`section ${i}`)
    navList.appendChild(navLink)
    // navLink.className="menu__link"


/**********************add event to links when click on it scroll to link's section  ***********************/

    navLink.addEventListener("click",function moveTo(){
        pageSection[i-1].scrollIntoView({behavior: "smooth"})
    })



/**********************add active class to highlights section in viewport upon scrolling. ***********************/

    let observer = new IntersectionObserver(function(entries, observer){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                pageSection[i-1].setAttribute("class","your-active-class")
                navLink.setAttribute("class","menu__link__target")
                // navLink.style.cssText = 'background:#000; color:#fff;'
            }
            else{
                pageSection[i-1].removeAttribute("class","your-active-class");
                // navLink.removeAttribute("class","menu__link__target")
                navLink.setAttribute("class","menu__link")

            }
        })
    }, options);    
    observer.observe(pageSection[i-1])



}


